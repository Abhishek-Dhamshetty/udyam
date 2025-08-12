import React from 'react'

const ProgressTracker = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Aadhaar Verification' },
    { number: 2, label: 'OTP Verification' },
    { number: 3, label: 'PAN & Details' },
    { number: 4, label: 'Complete' }
  ]

  return (
    <div className="progress-tracker">
      {steps.map((step, index) => (
        <div 
          key={step.number}
          className={`progress-step ${
            currentStep === step.number ? 'active' : 
            currentStep > step.number ? 'completed' : ''
          }`}
        >
          <div className="progress-step-circle">
            {currentStep > step.number ? '✓' : step.number}
          </div>
          <div className="progress-step-label">
            {step.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgressTracker