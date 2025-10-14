import { motion, AnimatePresence } from 'framer-motion'
import { useCursor } from '../../hooks/useCursor'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { FiCode, FiLock, FiExternalLink, FiPlay, FiMail } from 'react-icons/fi'

/**
 * Custom cursor component with neon ring and hover states
 * Respects accessibility preferences and touch devices
 */
const CustomCursor = () => {
  const { position, isVisible, isHovering, hoverType, isClicking } = useCursor()
  const prefersReducedMotion = usePrefersReducedMotion()

  // Don't render cursor if user prefers reduced motion or on touch devices
  if (prefersReducedMotion || !window.matchMedia('(hover: hover)').matches) {
    return null
  }

  const getHoverIcon = () => {
    switch (hoverType) {
      case 'code':
        return <FiCode className="w-4 h-4" />
      case 'security':
        return <FiLock className="w-4 h-4" />
      case 'external':
        return <FiExternalLink className="w-4 h-4" />
      case 'play':
        return <FiPlay className="w-4 h-4" />
      case 'contact':
        return <FiMail className="w-4 h-4" />
      default:
        return null
    }
  }

  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(15, 241, 178, 0.1)',
      borderColor: 'rgba(15, 241, 178, 0.6)',
      width: 20,
      height: 20,
    },
    hover: {
      scale: 1.5,
      backgroundColor: 'rgba(124, 58, 237, 0.2)',
      borderColor: 'rgba(124, 58, 237, 0.8)',
      width: 40,
      height: 40,
    },
    click: {
      scale: 0.8,
      backgroundColor: 'rgba(15, 241, 178, 0.3)',
      borderColor: 'rgba(15, 241, 178, 1)',
    }
  }

  const dotVariants = {
    default: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 0,
      opacity: 0,
    },
    click: {
      scale: 1.2,
      opacity: 1,
    }
  }

  const iconVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference">
          {/* Main cursor ring */}
          <motion.div
            className="absolute border-2 rounded-full"
            style={{
              left: position.x,
              top: position.y,
              transform: 'translate(-50%, -50%)',
            }}
            variants={cursorVariants}
            animate={isClicking ? 'click' : isHovering ? 'hover' : 'default'}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 28,
              mass: 0.5,
            }}
          >
            {/* Center dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full"
              style={{ transform: 'translate(-50%, -50%)' }}
              variants={dotVariants}
              animate={isClicking ? 'click' : isHovering ? 'hover' : 'default'}
            />

            {/* Hover icon */}
            <AnimatePresence>
              {isHovering && getHoverIcon() && (
                <motion.div
                  className="absolute top-1/2 left-1/2 text-accent"
                  style={{ transform: 'translate(-50%, -50%)' }}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {getHoverIcon()}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Click ripple effect */}
          <AnimatePresence>
            {isClicking && (
              <motion.div
                className="absolute border border-primary rounded-full"
                style={{
                  left: position.x,
                  top: position.y,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{
                  width: 20,
                  height: 20,
                  opacity: 0.8,
                }}
                animate={{
                  width: 80,
                  height: 80,
                  opacity: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                }}
              />
            )}
          </AnimatePresence>

          {/* Trailing particles for extra flair */}
          <motion.div
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: position.x,
              top: position.y,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      )}
    </AnimatePresence>
  )
}

export default CustomCursor
