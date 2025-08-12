const config = {
  development: {
    API_BASE_URL: 'http://localhost:5001/api'
  },
  production: {
    API_BASE_URL: 'https://udyam.onrender.com/api' // ✅ Updated with your Render URL
  }
};

export default config[import.meta.env.MODE === 'production' ? 'production' : 'development'];