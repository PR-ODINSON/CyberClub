import { motion } from 'framer-motion'

/**
 * Stylized zero with padlock/circuit motif logo
 * Inline SVG component with animation support
 */
const Logo = ({ className = "w-12 h-12", animated = true }) => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  }

  const lockVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        ease: 'backOut',
      },
    },
  }

  const circuitVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 0.6,
      transition: {
        delay: 1.5,
        duration: 1,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={animated ? "hidden" : "visible"}
      animate="visible"
    >
      {/* Outer zero ring */}
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        stroke="url(#primaryGradient)"
        strokeWidth="4"
        fill="none"
        variants={animated ? pathVariants : {}}
      />
      
      {/* Inner zero ring */}
      <motion.circle
        cx="50"
        cy="50"
        r="25"
        stroke="url(#accentGradient)"
        strokeWidth="2"
        fill="none"
        variants={animated ? pathVariants : {}}
        transition={{ delay: 0.5 }}
      />

      {/* Circuit pattern */}
      <motion.g
        variants={animated ? circuitVariants : {}}
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary/60"
      >
        {/* Horizontal lines */}
        <path d="M15 30 L35 30" />
        <path d="M65 30 L85 30" />
        <path d="M15 70 L35 70" />
        <path d="M65 70 L85 70" />
        
        {/* Vertical lines */}
        <path d="M30 15 L30 35" />
        <path d="M70 15 L70 35" />
        <path d="M30 65 L30 85" />
        <path d="M70 65 L70 85" />
        
        {/* Circuit nodes */}
        <circle cx="30" cy="30" r="2" fill="currentColor" />
        <circle cx="70" cy="30" r="2" fill="currentColor" />
        <circle cx="30" cy="70" r="2" fill="currentColor" />
        <circle cx="70" cy="70" r="2" fill="currentColor" />
      </motion.g>

      {/* Central padlock */}
      <motion.g
        variants={animated ? lockVariants : {}}
        className="text-primary"
        fill="currentColor"
      >
        {/* Lock body */}
        <rect
          x="42"
          y="48"
          width="16"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Lock shackle */}
        <path
          d="M46 48 L46 42 C46 38 48 36 50 36 C52 36 54 38 54 42 L54 48"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Keyhole */}
        <circle cx="50" cy="53" r="2" fill="currentColor" />
        <rect x="49" y="53" width="2" height="4" fill="currentColor" />
      </motion.g>

      {/* Glowing effect */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#glowGradient)"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        variants={animated ? pathVariants : {}}
        animate={animated ? {
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0FF1B2" />
          <stop offset="100%" stopColor="#00D9A5" />
        </linearGradient>
        
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
        
        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0FF1B2" stopOpacity="0" />
          <stop offset="70%" stopColor="#0FF1B2" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0FF1B2" stopOpacity="0.8" />
        </radialGradient>
      </defs>
    </motion.svg>
  )
}

export default Logo
