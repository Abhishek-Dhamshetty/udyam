import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import axios from 'axios'
import config from './config'
import Header from './components/Header'
import ProgressTracker from './components/ProgressTracker'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Success from './components/Success'
import './App.css'

// Configure axios defaults with environment-specific URL
axios.defaults.baseURL = config.API_BASE_URL

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formSchema, setFormSchema] = useState(null)
  const [userData, setUserData] = useState({
    aadhaar: '',
    mobile: '',
    otp: '',
    pan: '',
    name: '',
    email: '',
    pincode: '',
    city: '',
    state: ''
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    fetchFormSchema()
  }, [])

  const fetchFormSchema = async () => {
    try {
      const response = await axios.get('/form-schema')
      setFormSchema(response.data)
    } catch (error) {
      console.error('Failed to fetch form schema:', error)
    }
  }

  const updateUserData = (newData) => {
    setUserData(prev => ({ ...prev, ...newData }))
  }

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4))
    setErrors({})
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
    setErrors({})
  }

  if (!formSchema) {
    return (
      <div className="app-loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <div className="container">
            <h1 className="main-title">Udyam Registration Portal</h1>
            <p className="main-subtitle">Register your MSME business in simple steps</p>
            
            <ProgressTracker currentStep={currentStep} />
            
            <div className="form-container">
              <Routes>
                <Route 
                  path="/" 
                  element={<Navigate to="/step1" replace />} 
                />
                <Route 
                  path="/step1" 
                  element={
                    <Step1
                      schema={formSchema.step1}
                      userData={userData}
                      updateUserData={updateUserData}
                      nextStep={nextStep}
                      loading={loading}
                      setLoading={setLoading}
                      errors={errors}
                      setErrors={setErrors}
                    />
                  } 
                />
                <Route 
                  path="/step2" 
                  element={
                    currentStep >= 2 ? (
                      <Step2
                        schema={formSchema.step2}
                        userData={userData}
                        updateUserData={updateUserData}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        loading={loading}
                        setLoading={setLoading}
                        errors={errors}
                        setErrors={setErrors}
                      />
                    ) : (
                      <Navigate to="/step1" replace />
                    )
                  } 
                />
                <Route 
                  path="/step3" 
                  element={
                    currentStep >= 3 ? (
                      <Step3
                        schema={formSchema.step3}
                        userData={userData}
                        updateUserData={updateUserData}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        loading={loading}
                        setLoading={setLoading}
                        errors={errors}
                        setErrors={setErrors}
                      />
                    ) : (
                      <Navigate to="/step1" replace />
                    )
                  } 
                />
                <Route 
                  path="/success" 
                  element={
                    currentStep >= 4 ? (
                      <Success userData={userData} />
                    ) : (
                      <Navigate to="/step1" replace />
                    )
                  } 
                />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
