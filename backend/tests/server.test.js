const request = require('supertest')
const app = require('../server')

describe('API Endpoints', () => {
  test('GET /api/health should return status OK', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect(200)
    
    expect(response.body.status).toBe('OK')
  })

  test('GET /api/form-schema should return form schema', async () => {
    const response = await request(app)
      .get('/api/form-schema')
      .expect(200)
    
    expect(response.body).toHaveProperty('step1')
    expect(response.body).toHaveProperty('step2')
    expect(response.body).toHaveProperty('step3')
  })

  test('POST /api/submit-step1 should validate Aadhaar', async () => {
    const response = await request(app)
      .post('/api/submit-step1')
      .send({
        aadhaar: '123456789012',
        mobile: '9876543210'
      })
    
    expect(response.status).toBe(200)
    expect(response.body.success).toBe(true)
  })

  test('POST /api/submit-step1 should reject invalid Aadhaar', async () => {
    const response = await request(app)
      .post('/api/submit-step1')
      .send({
        aadhaar: '12345',
        mobile: '9876543210'
      })
    
    expect(response.status).toBe(400)
    expect(response.body.success).toBe(false)
    expect(response.body.errors).toHaveProperty('aadhaar')
  })
})