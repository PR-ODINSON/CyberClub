import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCalendar, FiClock } from 'react-icons/fi'
import { useEffect } from 'react'

/**
 * Registration modal component for CYBERWISE event
 * Currently shows placeholder message until Google Form is integrated
 */
const RegisterModal = ({ isOpen, onClose }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              className="bg-dark-200/95 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 max-w-md w-full mx-4 relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-light/60 hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                aria-label="Close modal"
              >
                <FiX className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCalendar className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h2 id="modal-title" className="text-2xl font-heading font-bold text-light mb-4">
                  CYBERWISE Registration
                </h2>

                {/* Event Details */}
                <div className="bg-primary/10 rounded-xl p-4 mb-6 border border-primary/20">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    2-Day Workshop on Cybersecurity
                  </h3>
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-light dark:text-muted-dark">
                    <div className="flex items-center space-x-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>14th - 15th Nov 2025</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiClock className="w-4 h-4" />
                      <span>IITRAM Campus</span>
                    </div>
                  </div>
                </div>

                {/* Placeholder Message */}
                <div id="modal-description" className="space-y-4">
                  <p className="text-lg text-light leading-relaxed">
                    Registrations for CYBERWISE will open soon.
                  </p>
                  <p className="text-muted-light dark:text-muted-dark">
                    Stay tuned for updates! We'll announce the registration process through our official channels.
                  </p>
                  
                  {/* TODO: Replace with Google Form embed */}
                  {/* 
                    TODO: Insert Google Form embed here when available
                    <iframe 
                      src="[GOOGLE_FORM_URL]" 
                      width="100%" 
                      height="400"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                    >
                      Loading...
                    </iframe>
                  */}
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  className="mt-8 btn-primary px-8 py-3 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Got it!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default RegisterModal
