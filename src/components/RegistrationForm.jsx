import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RegistrationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      // Send data to Google Apps Script
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)

      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL
      
      if (!scriptUrl || scriptUrl === 'undefined') {
        console.error('Google Script URL is not configured. Environment variable:', import.meta.env.VITE_GOOGLE_SCRIPT_URL)
        setError('Form submission is not configured. Please contact support.')
        setIsSubmitting(false)
        return
      }

      // Use fetch with error handling for no-cors requests
      try {
        await fetch(
          scriptUrl,
          {
            method: 'POST',
            mode: 'no-cors', // Google Apps Script requires no-cors for web apps
            body: formDataToSend,
          }
        )
        
        // With no-cors mode, we can't read the response, so we assume success
        setIsSubmitting(false)
        setIsSubmitted(true)
      } catch (fetchError) {
        // Even with no-cors, network errors can occur
        console.error('Fetch error:', fetchError)
        throw fetchError
      }
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '' })
        onClose()
      }, 2000)
    } catch (err) {
      console.error('Error submitting form:', err)
      setIsSubmitting(false)
      setError('Failed to submit. Please try again.')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                className="glass-blur rounded-3xl p-8 md:p-10 border-2 border-neon-cyan/50 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass-blur border border-neon-cyan/50 flex items-center justify-center hover:border-neon-cyan transition-colors"
                  aria-label="Close"
                >
                  <svg
                    className="w-5 h-5 text-neon-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {!isSubmitted ? (
                  <>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-2 text-gradient neon-text text-center">
                      Get Early Access
                    </h2>
                    <p className="text-gray-300 text-center mb-8">
                      Be the first to know when Engagify launches!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-300 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl glass-blur border border-gray-700 focus:border-neon-cyan focus:outline-none text-white bg-black/30 transition-colors"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-300 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl glass-blur border border-gray-700 focus:border-neon-cyan focus:outline-none text-white bg-black/30 transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm"
                        >
                          {error}
                        </motion.div>
                      )}

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-4 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple rounded-xl font-bold text-white shadow-lg neon-border disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Notify Me at Launch'}
                      </motion.button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-neon-cyan mb-2">
                      Success!
                    </h3>
                    <p className="text-gray-300">
                      We'll notify you when Engagify launches.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default RegistrationForm

