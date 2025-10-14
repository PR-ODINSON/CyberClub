import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCursor } from '../hooks/useCursor'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

/**
 * Feature card component with 3D tilt effect and animations
 */
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient, 
  delay = 0,
  index = 0,
  link = '#',
  linkText = 'Learn More'
}) => {
  const { setHover, removeHover } = useCursor()
  const prefersReducedMotion = usePrefersReducedMotion()

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: 'easeOut',
      },
    },
  }

  const iconVariants = {
    rest: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: prefersReducedMotion ? 0 : 5,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  const glowVariants = {
    rest: {
      opacity: 0,
      scale: 0.8,
    },
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className="group relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover"
      onMouseEnter={() => setHover('code')}
      onMouseLeave={removeHover}
    >
      {/* Card */}
      <motion.div
        className="card card-hover h-full relative overflow-hidden perspective-1000"
        whileHover={{
          rotateX: prefersReducedMotion ? 0 : 5,
          rotateY: prefersReducedMotion ? 0 : 5,
          scale: prefersReducedMotion ? 1 : 1.02,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
      >
        {/* Background glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 blur-xl`}
          variants={glowVariants}
          initial="rest"
          whileHover="hover"
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="mb-6"
            variants={iconVariants}
            initial="rest"
            whileHover="hover"
          >
            <div className={`
              w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} 
              flex items-center justify-center mb-4 group-hover:shadow-lg 
              group-hover:shadow-primary/25 transition-all duration-300
            `}>
              <Icon className="w-8 h-8 text-dark" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl font-heading font-bold mb-4 text-gray-900 dark:text-light group-hover:text-primary transition-colors duration-300"
            whileHover={{
              scale: prefersReducedMotion ? 1 : 1.02,
            }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-600 dark:text-muted-dark leading-relaxed"
            whileHover={{
              color: prefersReducedMotion ? undefined : '#F8FAFC',
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>

          {/* Learn More Link */}
          <motion.div
            className="flex items-center justify-end mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            <Link
              to={link}
              className="flex items-center text-primary hover:text-accent transition-colors duration-300 group/link"
              onMouseEnter={() => setHover('external')}
              onMouseLeave={removeHover}
            >
              <span className="text-sm font-medium mr-2">{linkText}</span>
              <motion.svg
                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </div>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-transparent"
          whileHover={{
            borderColor: 'rgba(15, 241, 178, 0.5)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating particles */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5 + delay,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Card number indicator */}
      <motion.div
        className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-dark font-bold text-sm z-20"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ 
          scale: 1, 
          rotate: 0,
          transition: {
            delay: delay + 0.3,
            duration: 0.5,
            ease: 'backOut',
          }
        }}
        viewport={{ once: true }}
      >
        {index + 1}
      </motion.div>
    </motion.div>
  )
}

export default FeatureCard
