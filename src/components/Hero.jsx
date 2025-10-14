import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiShield, FiCode } from 'react-icons/fi'
import { useCursor } from '../hooks/useCursor'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

/**
 * Hero section with animated gradient background and typewriter effect
 */
const Hero = () => {
  const { setHover, removeHover } = useCursor()
  const prefersReducedMotion = usePrefersReducedMotion()
  const containerRef = useRef(null)
  const [typewriterText, setTypewriterText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const fullText = ''
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Typewriter effect
  useEffect(() => {
    if (prefersReducedMotion) {
      setTypewriterText(fullText)
      return
    }

    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [currentIndex, prefersReducedMotion])

  const heroVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: prefersReducedMotion ? 0 : y }}
      >
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-dark/90 to-dark" />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-conic from-primary/10 via-accent/10 to-primary/10"
          animate={{
            rotate: prefersReducedMotion ? 0 : 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-[0.03]" />
        
        {/* Glitch overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 2,
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: prefersReducedMotion ? 1 : opacity }}
      >
        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-8xl font-heading font-black mb-6"
          variants={childVariants}
        >
          <span className="block text-dark dark:text-light mb-2">THE</span>
          <span className="block gradient-text text-glow">CyberClub IITRAM</span>
        </motion.h1>


        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto mb-12 leading-relaxed"
          variants={childVariants}
        >
          Elite cybersecurity club dedicated to ethical hacking, digital forensics, 
          and protecting the future of technology. Join us in the fight against cyber threats.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center items-center"
          variants={childVariants}
        >
          <Link
            to="/events"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-3"
            onMouseEnter={() => setHover('code')}
            onMouseLeave={removeHover}
          >
            <FiCode className="w-5 h-5" />
            <span>Attend Workshop</span>
          </Link>
        </motion.div>

      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 20}%`,
              fontSize: `${1 + (i % 3) * 0.5}rem`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{
              delay: i * 0.5,
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {i % 3 === 0 ? '🔒' : i % 3 === 1 ? '⚡' : '🛡️'}
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Hero
