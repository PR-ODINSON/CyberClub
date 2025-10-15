import { motion } from 'framer-motion'

/**
 * CyberClub IITRAM Logo Component
 * Uses the new logo image with animation support
 */
const Logo = ({ className = "w-12 h-12", animated = true }) => {
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const glowVariants = {
    animate: {
      filter: [
        'drop-shadow(0 0 5px rgba(15, 241, 178, 0.3))',
        'drop-shadow(0 0 15px rgba(15, 241, 178, 0.6))',
        'drop-shadow(0 0 5px rgba(15, 241, 178, 0.3))',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      className={`${className} flex items-center justify-center`}
      initial={animated ? "hidden" : "visible"}
      animate="visible"
      variants={animated ? imageVariants : {}}
    >
      <motion.img
        src="/Logo_without_name.jpg"
        alt="CyberClub IITRAM Logo"
        className="w-full h-full object-contain rounded-lg"
        variants={animated ? glowVariants : {}}
        animate={animated ? "animate" : ""}
        loading="lazy"
      />
    </motion.div>
  )
}

export default Logo
