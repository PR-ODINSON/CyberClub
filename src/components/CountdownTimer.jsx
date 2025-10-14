import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * Countdown timer component for CYBERWISE event
 * Shows days, hours, minutes, and seconds until November 14, 2025
 */
const CountdownTimer = ({ targetDate = '2025-11-14T00:00:00' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
        setIsExpired(false)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsExpired(true)
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  }

  if (isExpired) {
    return (
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6 border border-primary/30">
          <h3 className="text-2xl font-heading font-bold text-primary mb-2">
            🎉 CYBERWISE is Here!
          </h3>
          <p className="text-muted-light dark:text-muted-dark">
            The workshop has begun. Join us for an amazing cybersecurity experience!
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3 
        className="text-xl lg:text-2xl font-heading font-bold text-light mb-6"
        variants={itemVariants}
      >
        Event Starts In
      </motion.h3>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            variants={itemVariants}
            className="bg-gradient-to-b from-primary/20 to-accent/20 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-primary/30 hover:border-primary/50 transition-all duration-300"
          >
            <motion.div
              className="text-3xl lg:text-4xl font-heading font-black text-primary mb-2"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              }}
            >
              {unit.value.toString().padStart(2, '0')}
            </motion.div>
            <div className="text-sm lg:text-base text-muted-light dark:text-muted-dark font-medium">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated pulse effect */}
      <motion.div
        className="mt-6 flex justify-center"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-2 h-2 bg-primary rounded-full"></div>
      </motion.div>
    </motion.div>
  )
}

export default CountdownTimer
