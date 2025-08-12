import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Step2 = ({ 
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
    otp: userData.otp || ''
  })
  const [clientErrors, setClientErrors] = useState({})
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [timeLeft])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const validateField = (name, value) => {
    let error = ''
    
    if (name === 'otp') {
      if (!value) {
        error = 'OTP is required'
      } else if (!/^[0-9]{6}$/.test(value)) {
        error = 'Please enter a valid 6-digit OTP'
      }
    }
    
    return error
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Only allow numbers for OTP
    if (name === 'otp' && !/^[0-9]*$/.test(value)) {
      return
    }
    
    // Limit length
    if (name === 'otp' && value.length > 6) return
    
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear errors on input
    if (clientErrors[name]) {
      setClientErrors(prev => ({ ...prev, [name]: '' }))
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleResendOTP = async () => {
    if (!canResend) return
    
    setLoading(true)
    try {
      const response = await axios.post('/submit-step1', {
        aadhaar: userData.aadhaar,
        mobile: userData.mobile
      })
      
      if (response.data.success) {
        setTimeLeft(300)
        setCanResend(false)
        
        // Show mock OTP in development
        if (response.data.mockOTP) {
          alert(`Mock OTP for testing: ${response.data.mockOTP}`)
        }
      }
    } catch (error) {
      setErrors({ 
        general: 'Failed to resend OTP. Please try again.' 
      })
    } finally {
      setLoading(false)
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
      const response = await axios.post('/submit-step2', {
        aadhaar: userData.aadhaar,
        otp: formData.otp
      })
      
      if (response.data.success) {
        updateUserData(formData)
        nextStep()
        navigate('/step3')
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
    navigate('/step1')
  }

  return (
    <div className="step-container">
      <h2 className="step-title">{schema.title}</h2>
      <p className="step-description">
        We've sent a 6-digit OTP to your mobile number ending with 
        <strong> ***{userData.mobile?.slice(-3)}</strong>
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
        
        <div className="otp-info">
          {timeLeft > 0 ? (
            <p className="timer">
              ⏰ OTP expires in: <strong>{formatTime(timeLeft)}</strong>
            </p>
          ) : (
            <p className="expired">⚠️ OTP has expired</p>
          )}
          
          <button
            type="button"
            onClick={handleResendOTP}
            className={`btn btn-secondary ${!canResend ? 'disabled' : ''}`}
            disabled={!canResend || loading}
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                Resending...
              </>
            ) : (
              'Resend OTP'
            )}
          </button>
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
            disabled={loading || timeLeft === 0}
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                Verifying...
              </>
            ) : (
              'Verify OTP'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Step2