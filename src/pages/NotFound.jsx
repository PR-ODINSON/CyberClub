import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiHome, FiArrowLeft } from 'react-icons/fi'
import { useCursor } from '../hooks/useCursor'

const NotFound = () => {
  const { setHover, removeHover } = useCursor()

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-[0.02]" />
      </div>

      <div className="text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* 404 Number */}
          <motion.div
            className="text-8xl lg:text-9xl font-heading font-black gradient-text mb-8"
            animate={{
              textShadow: [
                '0 0 20px rgba(15, 241, 178, 0.5)',
                '0 0 40px rgba(15, 241, 178, 0.8)',
                '0 0 20px rgba(15, 241, 178, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            404
          </motion.div>

          {/* Error Message */}
          <motion.h1
            className="text-3xl lg:text-4xl font-heading font-bold text-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Access Denied
          </motion.h1>

          <motion.p
            className="text-xl text-muted-dark mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The page you're looking for has been secured or doesn't exist in our network.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/"
              className="btn-primary inline-flex items-center space-x-2"
              onMouseEnter={() => setHover('security')}
              onMouseLeave={removeHover}
            >
              <FiHome className="w-5 h-5" />
              <span>Return to Base</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="btn-secondary inline-flex items-center space-x-2"
              onMouseEnter={() => setHover('code')}
              onMouseLeave={removeHover}
            >
              <FiArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Glitch Effect */}
          <motion.div
            className="mt-12 text-primary/60 font-mono text-sm"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            [ERROR_CODE: ZP_404_UNAUTHORIZED_ACCESS]
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/20 text-2xl"
              style={{
                left: `${10 + (i * 15)}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            >
              {i % 3 === 0 ? '🔒' : i % 3 === 1 ? '⚠️' : '🛡️'}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotFound
