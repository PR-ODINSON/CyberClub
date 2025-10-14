import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { scrollToTop } from '../hooks/useScrollToTop'
import { useCursor } from '../hooks/useCursor'

/**
 * Scroll to top button component
 * Shows when user scrolls down and provides smooth scroll to top functionality
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { setHover, removeHover } = useCursor()

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleScrollToTop = () => {
    scrollToTop()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={handleScrollToTop}
          onMouseEnter={() => setHover('scroll')}
          onMouseLeave={removeHover}
          className="fixed bottom-8 right-8 z-40 p-3 bg-primary/90 backdrop-blur-sm text-dark rounded-full shadow-lg hover:bg-primary hover:scale-110 focus:scale-110 active:scale-95 transition-all duration-300 border border-primary/20"
          whileHover={{ 
            boxShadow: '0 10px 30px rgba(15, 241, 178, 0.3)',
            y: -2 
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
