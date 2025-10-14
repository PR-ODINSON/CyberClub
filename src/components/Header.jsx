import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'
import { useCursor } from '../hooks/useCursor'
import Logo from './Logo'
import clsx from 'clsx'

/**
 * Main navigation header with responsive menu
 * Features smooth animations and accessibility support
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useTheme() // Initialize dark theme
  const { setHover, removeHover } = useCursor()
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Patrons', path: '/patrons' },
    { name: 'Contact', path: '/contact' },
  ]

  const headerVariants = {
    top: {
      backgroundColor: 'rgba(5, 6, 10, 0)',
      backdropFilter: 'blur(0px)',
      borderColor: 'rgba(15, 241, 178, 0)',
    },
    scrolled: {
      backgroundColor: 'rgba(5, 6, 10, 0.9)',
      backdropFilter: 'blur(20px)',
      borderColor: 'rgba(15, 241, 178, 0.2)',
    },
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <>
      <motion.header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'border-b border-transparent'
        )}
        variants={headerVariants}
        animate={isScrolled ? 'scrolled' : 'top'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <nav className="container-width section-padding py-4">
          <div className="flex items-center justify-between">
            {/* Logo and brand */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              onMouseEnter={() => setHover('security')}
              onMouseLeave={removeHover}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Logo className="w-10 h-10" animated={false} />
              </motion.div>
              <motion.span
                className="text-xl font-heading font-bold text-primary group-hover:text-glow transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                CyberClub IITRAM
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={clsx(
                    'relative font-medium transition-all duration-300 hover:text-primary',
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-light/80 hover:text-primary'
                  )}
                  onMouseEnter={() => setHover('code')}
                  onMouseLeave={removeHover}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    {item.name}
                  </motion.span>
                  
                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeTab"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu */}
            <div className="flex items-center">
              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-dark-300/50 border border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHover('code')}
                onMouseLeave={removeHover}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiX className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiMenu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-dark-200/95 backdrop-blur-xl border-l border-primary/20 z-50 lg:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-primary/20">
                  <div className="flex items-center space-x-3">
                    <Logo className="w-8 h-8" animated={false} />
                    <span className="text-lg font-heading font-bold text-primary">
                      CyberClub IITRAM
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-light/60 hover:text-primary transition-colors"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 py-8">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      custom={i}
                    >
                      <Link
                        to={item.path}
                        className={clsx(
                          'flex items-center px-6 py-4 text-lg font-medium transition-all duration-300',
                          location.pathname === item.path
                            ? 'text-primary bg-primary/10 border-r-2 border-primary'
                            : 'text-light/80 hover:text-primary hover:bg-primary/5'
                        )}
                        onMouseEnter={() => setHover('code')}
                        onMouseLeave={removeHover}
                      >
                        <motion.span
                          whileHover={{ x: 4 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Menu Footer */}
                <div className="p-6 border-t border-primary/20">
                  <p className="text-sm text-muted-dark text-center">
                    Guardians of the Campus Network
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
