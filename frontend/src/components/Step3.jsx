import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Step3 = ({ 
  schema, 
  userData, 
  updateUserData, 
  nextStep, 
  prevStep,
  loading, 
  setLoading, 
  errors, 
  setErrors 
}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    pan: userData.pan || '',
    name: userData.name || '',
    email: userData.email || '',
    pincode: userData.pincode || '',
    city: userData.city || '',
    state: userData.state || ''
  })
  const [clientErrors, setClientErrors] = useState({})

  const validateField = (name, value) => {
    let error = ''
    
    switch (name) {
      case 'pan':
        if (!value) {
          error = 'PAN number is required'
        } else if (!/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/.test(value)) {
          error = 'Please enter a valid PAN number (e.g., ABCDE1234F)'
        }
        break
      case 'name':
        if (!value) {
          error = 'Full name is required'
        } else if (value.trim().length < 2) {
          error = 'Please enter a valid name'
        }
        break
      case 'email':
        if (!value) {
          error = 'Email address is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address'
        }
        break
      case 'pincode':
        if (!value) {
          error = 'PIN code is required'
        } else if (!/^[0-9]{6}$/.test(value)) {
          error = 'Please enter a valid 6-digit PIN code'
        }
        break
      default:
        break
    }
    
    return error
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Handle specific field formats
    if (name === 'pan') {
      // Convert to uppercase and allow only alphanumeric
      const formattedValue = value.toUpperCase().replace(/[^A-Z0-9]/g, '')
      if (formattedValue.length > 10) return
      setFormData(prev => ({ ...prev, [name]: formattedValue }))
    } else if (name === 'pincode') {
      // Only allow numbers
      if (!/^[0-9]*$/.test(value)) return
      if (value.length > 6) return
      setFormData(prev => ({ ...prev, [name]: value }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    // Clear errors on input
    if (clientErrors[name]) {
      setClientErrors(prev => ({ ...prev, [name]: '' }))
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handlePincodeBlur = async () => {
    if (formData.pincode && formData.pincode.length === 6) {
      try {
        const response = await axios.get(`/pincode/${formData.pincode}`)
        if (response.data.success) {
          setFormData(prev => ({
            ...prev,
            city: response.data.data.city,
            state: response.data.data.state
          }))
        }
      } catch (error) {
        console.log('PIN code lookup failed:', error)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Client-side validation
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      if (key !== 'city' && key !== 'state') { // city and state are auto-filled
        const error = validateField(key, formData[key])
        if (error) newErrors[key] = error
      }
    })
    
    if (Object.keys(newErrors).length > 0) {
      setClientErrors(newErrors)
      return
    }
    
    setLoading(true)
    setErrors({})
    
    try {
      const response = await axios.post('/submit-step3', {
        ...formData,
        aadhaar: userData.aadhaar
      })
      
      if (response.data.success) {
        updateUserData(formData)
        nextStep()
        navigate('/success')
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

  const handleBack = () => {
    prevStep()
    navigate('/step2')
  }

  return (
    <div className="step-container">
      <h2 className="step-title">{schema.title}</h2>
      <p className="step-description">
        Please provide your PAN details and personal information to complete the registration.
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
              onBlur={field.name === 'pincode' ? handlePincodeBlur : undefined}
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
        
        {/* Auto-filled city and state */}
        <div className="form-group">
          <label className="form-label">City</label>
          <input
            type="text"
            value={formData.city}
            readOnly
            className="form-input readonly"
            placeholder="Will be auto-filled from PIN code"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">State</label>
          <input
            type="text"
            value={formData.state}
            readOnly
            className="form-input readonly"
            placeholder="Will be auto-filled from PIN code"
          />
        </div>
        
        <div className="btn-group">
          <button 
            type="button"
            onClick={handleBack}
            className="btn btn-secondary"
            disabled={loading}
          >
            Back
          </button>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                Submitting...
              </>
            ) : (
              'Complete Registration'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Step3