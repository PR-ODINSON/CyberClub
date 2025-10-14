import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Logo from './Logo'

/**
 * Full-screen animated loader that shows on initial app load
 * Features rotating rings around the logo and smooth transition to main app
 */
const AnimatedLoader = ({ onLoadingComplete }) => {
  const [loadingStage, setLoadingStage] = useState('loading') // loading -> morphing -> complete
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setLoadingStage('morphing'), 500)
          return 100
        }
        return prev + Math.random() * 15 + 5 // Random progress increments
      })
    }, 150)

    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    if (loadingStage === 'morphing') {
      // Complete the loading after morph animation
      const timer = setTimeout(() => {
        setLoadingStage('complete')
        onLoadingComplete?.()
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [loadingStage, onLoadingComplete])

  const containerVariants = {
    loading: {
      opacity: 1,
      scale: 1,
    },
    morphing: {
      opacity: 1,
      scale: 0.8,
      y: -100,
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    },
    complete: {
      opacity: 0,
      scale: 0.5,
      y: -200,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  const ringVariants = {
    loading: {
      rotate: 0,
      scale: 1,
    },
    morphing: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  }

  const textVariants = {
    loading: {
      opacity: 1,
      y: 0,
    },
    morphing: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  }

  return (
    <AnimatePresence>
      {loadingStage !== 'complete' && (
        <motion.div
          className="fixed inset-0 bg-dark z-[10000] flex items-center justify-center"
          variants={containerVariants}
          animate={loadingStage}
          exit="complete"
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />
          
          {/* Scanning line effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{
                y: ['0vh', '100vh'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo with rotating rings */}
            <div className="relative mb-8">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 w-32 h-32 border-2 border-primary/30 rounded-full"
                variants={ringVariants}
                animate={loadingStage}
                style={{
                  transform: 'translate(-50%, -50%)',
                  left: '50%',
                  top: '50%',
                }}
                transition={{
                  rotate: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }
                }}
              />
              
              {/* Middle ring */}
              <motion.div
                className="absolute inset-0 w-24 h-24 border-2 border-accent/50 rounded-full"
                variants={ringVariants}
                animate={loadingStage}
                style={{
                  transform: 'translate(-50%, -50%)',
                  left: '50%',
                  top: '50%',
                }}
                transition={{
                  rotate: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                    direction: 'reverse',
                  }
                }}
              />
              
              {/* Inner ring */}
              <motion.div
                className="absolute inset-0 w-16 h-16 border-2 border-primary rounded-full"
                variants={ringVariants}
                animate={loadingStage}
                style={{
                  transform: 'translate(-50%, -50%)',
                  left: '50%',
                  top: '50%',
                }}
                transition={{
                  rotate: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }
                }}
              />

              {/* Logo in center */}
              <motion.div
                className="relative z-10 w-20 h-20 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  filter: [
                    'drop-shadow(0 0 10px rgba(15, 241, 178, 0.5))',
                    'drop-shadow(0 0 20px rgba(15, 241, 178, 0.8))',
                    'drop-shadow(0 0 10px rgba(15, 241, 178, 0.5))',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Logo className="w-full h-full" />
              </motion.div>
            </div>

            {/* Loading text and progress */}
            <motion.div
              className="text-center"
              variants={textVariants}
              animate={loadingStage}
            >
              <motion.h2
                className="text-2xl font-heading font-bold text-primary mb-4"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                CyberClub IITRAM
              </motion.h2>
              
              <motion.p
                className="text-muted-dark mb-6"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
                Initializing secure connection...
              </motion.p>

              {/* Progress bar */}
              <div className="w-64 h-1 bg-dark-300 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                />
              </div>
              
              <motion.p
                className="text-xs text-muted-dark/60 mt-2"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {Math.round(progress)}% complete
              </motion.p>
            </motion.div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AnimatedLoader
