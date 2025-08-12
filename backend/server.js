const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { PrismaClient } = require('./generated/prisma');

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// Enhanced CORS for production
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://udyam-clone-frontend.vercel.app', // We'll update this later
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(null, true); // Allow all origins in development
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept']
}));

app.use(express.json());

// Trust proxy for Railway
app.set('trust proxy', 1);

// Add a root route for Railway health checks
app.get('/', (req, res) => {
  res.json({ 
    message: 'Udyam Registration Backend API',
    status: 'OK',
    endpoints: {
      health: '/api/health',
      schema: '/api/form-schema',
      step1: '/api/submit-step1',
      step2: '/api/submit-step2',
      step3: '/api/submit-step3',
      pincode: '/api/pincode/:pincode'
    }
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Form schema endpoint
app.get('/api/form-schema', (req, res) => {
  try {
    const schema = {
      step1: {
        title: "Aadhaar Number Verification",
        fields: [
          {
            name: "aadhaar",
            type: "text",
            label: "Aadhaar Number",
            placeholder: "Enter your 12 digit Aadhaar number",
            required: true,
            maxLength: 12,
            validation: "aadhaar"
          },
          {
            name: "mobile",
            type: "tel",
            label: "Mobile Number",
            placeholder: "Enter your mobile number",
            required: true,
            maxLength: 10,
            validation: "mobile"
          }
        ]
      },
      step2: {
        title: "OTP Verification",
        fields: [
          {
            name: "otp",
            type: "text",
            label: "OTP",
            placeholder: "Enter 6 digit OTP",
            required: true,
            maxLength: 6,
            validation: "otp"
          }
        ]
      },
      step3: {
        title: "PAN & Personal Details",
        fields: [
          {
            name: "pan",
            type: "text",
            label: "PAN Number",
            placeholder: "Enter your PAN number",
            required: true,
            maxLength: 10,
            validation: "pan"
          },
          {
            name: "name",
            type: "text",
            label: "Full Name",
            placeholder: "Enter your full name",
            required: true,
            validation: "name"
          },
          {
            name: "email",
            type: "email",
            label: "Email Address",
            placeholder: "Enter your email address",
            required: true,
            validation: "email"
          },
          {
            name: "pincode",
            type: "text",
            label: "PIN Code",
            placeholder: "Enter your PIN code",
            required: true,
            maxLength: 6,
            validation: "pincode"
          }
        ]
      }
    };

    res.json(schema);
  } catch (error) {
    console.error('Error serving form schema:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to load form schema'
    });
  }
});

// Step 1: Submit Aadhaar and Mobile
app.post('/api/submit-step1', async (req, res) => {
  try {
    const { aadhaar, mobile } = req.body;

    if (!validateAadhaar(aadhaar)) {
      return res.status(400).json({
        success: false,
        errors: { aadhaar: 'Please enter a valid 12-digit Aadhaar number' }
      });
    }

    if (!validateMobile(mobile)) {
      return res.status(400).json({
        success: false,
        errors: { mobile: 'Please enter a valid 10-digit mobile number' }
      });
    }

    let user = await prisma.udyamUser.findUnique({
      where: { aadhaar }
    });

    if (user) {
      user = await prisma.udyamUser.update({
        where: { aadhaar },
        data: { mobile, step: 2 }
      });
    } else {
      user = await prisma.udyamUser.create({
        data: {
          aadhaar,
          mobile,
          step: 2
        }
      });
    }

    const mockOTP = '123456';
    await prisma.udyamUser.update({
      where: { aadhaar },
      data: { otp: mockOTP }
    });

    res.json({
      success: true,
      message: 'OTP sent successfully to your mobile number',
      userId: user.id,
      mockOTP
    });

  } catch (error) {
    console.error('Step 1 submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Step 2: Verify OTP
app.post('/api/submit-step2', async (req, res) => {
  try {
    const { aadhaar, otp } = req.body;

    if (!validateOTP(otp)) {
      return res.status(400).json({
        success: false,
        errors: { otp: 'Please enter a valid 6-digit OTP' }
      });
    }

    const user = await prisma.udyamUser.findUnique({
      where: { aadhaar }
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        success: false,
        errors: { otp: 'Invalid OTP' }
      });
    }

    await prisma.udyamUser.update({
      where: { aadhaar },
      data: { 
        step: 3,
        isVerified: true
      }
    });

    res.json({
      success: true,
      message: 'OTP verified successfully'
    });

  } catch (error) {
    console.error('Step 2 submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Step 3: Submit PAN and other details
app.post('/api/submit-step3', async (req, res) => {
  try {
    const { aadhaar, pan, name, email, pincode, city, state } = req.body;

    const errors = {};
    
    if (!validatePAN(pan)) {
      errors.pan = 'Please enter a valid PAN number (e.g., ABCDE1234F)';
    }

    if (!name || name.trim().length < 2) {
      errors.name = 'Please enter a valid name';
    }

    if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!validatePincode(pincode)) {
      errors.pincode = 'Please enter a valid 6-digit PIN code';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        errors
      });
    }

    const user = await prisma.udyamUser.findUnique({
      where: { aadhaar }
    });

    if (!user || !user.isVerified) {
      return res.status(404).json({
        success: false,
        message: 'Please complete previous steps first'
      });
    }

    const updatedUser = await prisma.udyamUser.update({
      where: { aadhaar },
      data: {
        pan,
        name,
        email,
        pincode,
        city,
        state,
        step: 4
      }
    });

    res.json({
      success: true,
      message: 'Registration completed successfully',
      user: {
        id: updatedUser.id,
        aadhaar: updatedUser.aadhaar,
        name: updatedUser.name,
        email: updatedUser.email
      }
    });

  } catch (error) {
    console.error('Step 3 submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// PIN code lookup
app.get('/api/pincode/:pincode', async (req, res) => {
  try {
    const pincode = req.params.pincode;
    
    if (!pincode || !validatePincode(pincode)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid PIN code format'
      });
    }

    const mockData = {
      '560001': { city: 'Bangalore', state: 'Karnataka' },
      '110001': { city: 'New Delhi', state: 'Delhi' },
      '400001': { city: 'Mumbai', state: 'Maharashtra' },
      '600001': { city: 'Chennai', state: 'Tamil Nadu' },
      '500001': { city: 'Hyderabad', state: 'Telangana' },
      '700001': { city: 'Kolkata', state: 'West Bengal' }
    };

    const data = mockData[pincode];
    
    if (data) {
      res.json({
        success: true,
        data
      });
    } else {
      res.json({
        success: false,
        message: 'PIN code not found'
      });
    }

  } catch (error) {
    console.error('PIN code lookup error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Just add enhanced error handling at the end
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : error.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server with enhanced logging
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 API endpoints available`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
const shutdown = async () => {
  console.log('\n🔄 Shutting down gracefully...');
  
  server.close(() => {
    console.log('✅ HTTP server closed');
  });
  
  try {
    await prisma.$disconnect();
    console.log('✅ Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during shutdown:', error);
    process.exit(1);
  }
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

module.exports = app;