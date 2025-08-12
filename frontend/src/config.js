const config = {
  development: {
    API_BASE_URL: 'http://localhost:5001/api'
  },
  production: {
    API_BASE_URL: 'https://your-railway-backend.railway.app/api' // Replace with your Railway URL
  }
};

export default config[process.env.NODE_ENV || 'development'];