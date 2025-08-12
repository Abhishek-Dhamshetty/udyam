import React from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const Success = ({ userData }) => {
  const handlePrint = () => {
    window.print()
  }

  const handleDownload = async () => {
    try {
      // Hide buttons during capture
      const buttonsElement = document.querySelector('.success-actions')
      if (buttonsElement) {
        buttonsElement.style.display = 'none'
      }

      // Get the certificate container
      const certificateElement = document.querySelector('.success-container')
      
      if (!certificateElement) {
        alert('Error: Could not find certificate content')
        return
      }

      // Create canvas from HTML
      const canvas = await html2canvas(certificateElement, {
        scale: 2, // Higher quality
        useCORS: true,
        backgroundColor: '#ffffff',
        height: certificateElement.scrollHeight,
        width: certificateElement.scrollWidth
      })

      // Show buttons again
      if (buttonsElement) {
        buttonsElement.style.display = 'flex'
      }

      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgData = canvas.toDataURL('image/png')
      
      // Calculate dimensions to fit A4
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const finalWidth = imgWidth * ratio
      const finalHeight = imgHeight * ratio

      // Center the image
      const x = (pdfWidth - finalWidth) / 2
      const y = (pdfHeight - finalHeight) / 2

      pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight)
      
      // Generate filename with current date and PAN
      const currentDate = new Date().toISOString().split('T')[0]
      const filename = `Udyam_Certificate_${userData.pan}_${currentDate}.pdf`
      
      // Download the PDF
      pdf.save(filename)

    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again or use the print option.')
    }
  }

  // Alternative JSON download function
  const handleDownloadData = () => {
    const registrationData = {
      ...userData,
      registrationDate: new Date().toISOString(),
      certificateNumber: `UD${userData.pan}${Date.now()}`,
      status: 'Approved'
    }

    const dataStr = JSON.stringify(registrationData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `Udyam_Registration_Data_${userData.pan}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleNewRegistration = () => {
    // Clear form data and redirect
    if (window.confirm('Are you sure you want to start a new registration? Current data will be lost.')) {
      window.location.href = '/'
    }
  }

  // Generate a mock certificate number
  const certificateNumber = `UDYAM-${userData.pan}-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`

  return (
    <div className="success-container" id="certificate-container">
      <div className="certificate-header">
        <div className="gov-logo">🏛️</div>
        <div className="certificate-title-section">
          <h1 className="certificate-main-title">Government of India</h1>
          <h2 className="certificate-sub-title">Ministry of Micro, Small & Medium Enterprises</h2>
          <h3 className="certificate-heading">Udyam Registration Certificate</h3>
        </div>
      </div>

      <div className="success-icon">
        ✓
      </div>
      
      <h1 className="success-title">Registration Successful!</h1>
      
      <div className="certificate-number">
        <strong>Certificate Number: {certificateNumber}</strong>
      </div>
      
      <p className="success-message">
        Congratulations! Your Udyam Registration has been completed successfully. 
        You will receive a confirmation email shortly.
      </p>
      
      <div className="user-details">
        <h3>Registration Details</h3>
        
        <div className="details-grid">
          <div className="detail-row">
            <span className="detail-label">Aadhaar Number:</span>
            <span className="detail-value">****-****-{userData.aadhaar?.slice(-4)}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">PAN Number:</span>
            <span className="detail-value">{userData.pan}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">Full Name:</span>
            <span className="detail-value">{userData.name}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{userData.email}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">Mobile:</span>
            <span className="detail-value">+91 {userData.mobile}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">PIN Code:</span>
            <span className="detail-value">{userData.pincode}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">City:</span>
            <span className="detail-value">{userData.city}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">State:</span>
            <span className="detail-value">{userData.state}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">Registration Date:</span>
            <span className="detail-value">{new Date().toLocaleDateString('en-IN')}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Status:</span>
            <span className="detail-value approved">Approved ✅</span>
          </div>
        </div>
      </div>
      
      <div className="success-actions">
        <button onClick={handlePrint} className="btn btn-secondary">
          🖨️ Print Certificate
        </button>
        
        <button onClick={handleDownload} className="btn btn-primary">
          📄 Download PDF
        </button>
        
        <button onClick={handleDownloadData} className="btn btn-secondary">
          💾 Download Data
        </button>
        
        <button onClick={handleNewRegistration} className="btn btn-outline">
          New Registration
        </button>
      </div>
      
      <div className="next-steps">
        <h3>What's Next?</h3>
        <ul>
          <li>You will receive your Udyam Registration Certificate via email within 24 hours</li>
          <li>Keep your registration number safe for future reference</li>
          <li>You can now apply for various government schemes and benefits</li>
          <li>Update your business details anytime through the portal</li>
        </ul>
      </div>

      <div className="certificate-footer">
        <p><small>This is a computer-generated certificate and does not require a physical signature.</small></p>
        <p><small>Certificate generated on: {new Date().toLocaleString('en-IN')}</small></p>
      </div>
    </div>
  )
}

export default Success