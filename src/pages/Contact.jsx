import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    membershipInterest: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [errors, setErrors] = useState({})

  // Form validation
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/xqayypyj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          membershipInterest: formData.membershipInterest,
          _subject: `New Contact Form Submission: ${formData.subject}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          membershipInterest: false
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - CyberClub IITRAM</title>
        <meta name="description" content="Get in touch with CyberClub IITRAM. Contact us for membership inquiries, event information, and collaboration opportunities." />
      </Helmet>
      
      <div className="min-h-screen pt-24 pb-16">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Contact Us</span>
          </h1>
            <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
            Ready to join CyberClub IITRAM? Get in touch with us to learn more 
            about membership, events, and opportunities.
          </p>
        </motion.div>
        
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-heading font-bold mb-6 gradient-text">
                    Get In Touch
                  </h2>
                  <p className="text-muted-light dark:text-muted-dark mb-8">
                    We're always excited to connect with like-minded individuals who share our passion for cybersecurity, technology, and innovation.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-light dark:text-text-dark">Email</h3>
                      <p className="text-muted-light dark:text-muted-dark">prasunchandratripathi@iitram.ac.in</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-light dark:text-text-dark">Phone</h3>
                      <p className="text-muted-light dark:text-muted-dark">+91 9818741307</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-light dark:text-text-dark">Location</h3>
                      <p className="text-muted-light dark:text-muted-dark">IITRAM, Ahmedabad</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-light dark:text-text-dark">Response Time</h3>
                      <p className="text-muted-light dark:text-muted-dark">We typically respond within 24-48 hours</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 border border-border-light dark:border-border-dark"
              >
                <h2 className="text-2xl font-heading font-bold mb-6 gradient-text">
                  Send us a Message
                </h2>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-green-500 font-medium">Message sent successfully!</p>
                    </div>
                    <p className="text-green-400 text-sm mt-1">We'll get back to you soon.</p>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-red-500 font-medium">Failed to send message</p>
                    </div>
                    <p className="text-red-400 text-sm mt-1">Please try again or contact us directly.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-background-light dark:bg-background-dark border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                        errors.name ? 'border-red-500' : 'border-border-light dark:border-border-dark'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-background-light dark:bg-background-dark border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                        errors.email ? 'border-red-500' : 'border-border-light dark:border-border-dark'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-background-light dark:bg-background-dark border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900 dark:text-white ${
                        errors.subject ? 'border-red-500' : 'border-border-light dark:border-border-dark'
                      }`}
                    >
                      <option value="" className="text-gray-900 dark:text-white bg-white dark:bg-gray-800">Select a subject</option>
                      <option value="Membership Inquiry" className="text-gray-900 dark:text-white bg-white dark:bg-gray-800">Membership Inquiry</option>
                      <option value="Event Information" className="text-gray-900 dark:text-white bg-white dark:bg-gray-800">Event Information</option>
                      <option value="Collaboration" className="text-gray-900 dark:text-white bg-white dark:bg-gray-800">Collaboration Opportunity</option>
                      <option value="General Question" className="text-gray-900 dark:text-white bg-white dark:bg-gray-800">General Question</option>
                      <option value="Technical Support" className="text-gray-900 dark:text-white bg-white dark:bg-gray-800">Technical Support</option>
                      <option value="Other" className="text-gray-900 dark:text-white bg-white dark:bg-gray-800">Other</option>
                    </select>
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-background-light dark:bg-background-dark border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                        errors.message ? 'border-red-500' : 'border-border-light dark:border-border-dark'
                      }`}
                      placeholder="Tell us more about your inquiry..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  {/* Membership Interest Checkbox */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="membershipInterest"
                      name="membershipInterest"
                      checked={formData.membershipInterest}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-primary bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded focus:ring-primary focus:ring-2"
                    />
                    <label htmlFor="membershipInterest" className="text-sm text-text-light dark:text-text-dark">
                      I'm interested in learning more about membership opportunities with CyberClub IITRAM
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
