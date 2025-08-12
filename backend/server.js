const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { PrismaClient } = require('./generated/prisma');

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173', '*'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept']
}));

app.use(express.json());

// Handle preflight requests
app.options('*', cors());

// Add explicit headers middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Validation utilities
const validateAadhaar = (aadhaar) => {
  const aadhaarRegex = /^[0-9]{12}$/;
  return aadhaarRegex.test(aadhaar);
};

const validatePAN = (pan) => {
  const panRegex = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/;
  return panRegex.test(pan);
};

const validateOTP = (otp) => {
  const otpRegex = /^[0-9]{6}$/;
  return otpRegex.test(otp);
};

const validateMobile = (mobile) => {
  const mobileRegex = /^[6-9][0-9]{9}$/;
  return mobileRegex.test(mobile);
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePincode = (pincode) => {
  const pincodeRegex = /^[0-9]{6}$/;
  return pincodeRegex.test(pincode);
};

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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 API endpoints available at http://localhost:${PORT}/api`);
});

// Graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

process.on('SIGINT', async () => {
  console.log('\n🔄 Shutting down gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});

module.exports = app;