import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Step1 = ({ 
  schema, 
  userData, 
  updateUserData, 
  nextStep, 
  loading, 
  setLoading, 
  errors, 
  setErrors 
}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    aadhaar: userData.aadhaar || '',
    mobile: userData.mobile || ''
  })
  const [clientErrors, setClientErrors] = useState({})

  const validateField = (name, value) => {
    let error = ''
    
    if (name === 'aadhaar') {
      if (!value) {
        error = 'Aadhaar number is required'
      } else if (!/^[0-9]{12}$/.test(value)) {
        error = 'Please enter a valid 12-digit Aadhaar number'
      }
    }
    
    if (name === 'mobile') {
      if (!value) {
        error = 'Mobile number is required'
      } else if (!/^[6-9][0-9]{9}$/.test(value)) {
        error = 'Please enter a valid 10-digit mobile number'
      }
    }
    
    return error
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Only allow numbers for aadhaar and mobile
    if ((name === 'aadhaar' || name === 'mobile') && !/^[0-9]*$/.test(value)) {
      return
    }
    
    // Limit length
    if (name === 'aadhaar' && value.length > 12) return
    if (name === 'mobile' && value.length > 10) return
    
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear errors on input
    if (clientErrors[name]) {
      setClientErrors(prev => ({ ...prev, [name]: '' }))
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Client-side validation
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })
    
    if (Object.keys(newErrors).length > 0) {
      setClientErrors(newErrors)
      return
    }
    
    setLoading(true)
    setErrors({})
    
    try {
      const response = await axios.post('/submit-step1', formData)
      
      if (response.data.success) {
        updateUserData(formData)
        nextStep()
        navigate('/step2')
        
        // Show mock OTP in development
        if (response.data.mockOTP) {
          alert(`Mock OTP for testing: ${response.data.mockOTP}`)
        }
      }
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ 
          general: error.response?.data?.message || 'Something went wrong. Please try again.' 
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="step-container">
      <h2 className="step-title">{schema.title}</h2>
      <p className="step-description">
        Enter your Aadhaar number and mobile number to begin the registration process.
      </p>
      
      {errors.general && (
        <div className="form-error general-error">
          ⚠️ {errors.general}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        {schema.fields.map((field) => (
          <div key={field.name} className="form-group">
            <label className="form-label" htmlFor={field.name}>
              {field.label} {field.required && <span className="required">*</span>}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              maxLength={field.maxLength}
              className={`form-input ${
                clientErrors[field.name] || errors[field.name] ? 'error' : ''
              }`}
              required={field.required}
            />
            {(clientErrors[field.name] || errors[field.name]) && (
              <div className="form-error">
                ⚠️ {clientErrors[field.name] || errors[field.name]}
              </div>
            )}
          </div>
        ))}
        
        <div className="btn-group">
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                Sending OTP...
              </>
            ) : (
              'Send OTP'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Step1