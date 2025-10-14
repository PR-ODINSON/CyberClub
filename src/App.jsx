import { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { useTheme } from './hooks/useTheme'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'
import { useScrollToTop } from './hooks/useScrollToTop'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/Cursor/CustomCursor'
import AnimatedLoader from './components/AnimatedLoader'
import ScrollToTop from './components/ScrollToTop'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Team = lazy(() => import('./pages/Team'))
const Events = lazy(() => import('./pages/Events'))
const CyberWise = lazy(() => import('./pages/CyberWise'))
const Patrons = lazy(() => import('./pages/Patrons'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const CodeOfConduct = lazy(() => import('./pages/CodeOfConduct'))
const NotFound = lazy(() => import('./pages/NotFound'))

/**
 * Page transition wrapper component
 */
const PageTransition = ({ children }) => {
  const location = useLocation()
  const prefersReducedMotion = usePrefersReducedMotion()

  const pageVariants = {
    initial: {
      opacity: 0,
      x: prefersReducedMotion ? 0 : 20,
      scale: prefersReducedMotion ? 1 : 0.98,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: prefersReducedMotion ? 0 : -20,
      scale: prefersReducedMotion ? 1 : 0.98,
    },
  }

  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: prefersReducedMotion ? 0.1 : 0.5,
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

/**
 * Loading fallback component
 */
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="loader-ring mx-auto mb-4"></div>
      <p className="text-muted-light dark:text-muted-dark">Loading...</p>
    </div>
  </div>
)

/**
 * Main App component with routing and global state
 */
const AppContent = () => {
  const { isDark } = useTheme()
  const location = useLocation()
  
  // Scroll to top on route changes
  useScrollToTop()

  // Check if current page is home page
  const isHomePage = location.pathname === '/'

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : 'light'}`}>
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main id="main-content" className="relative">
        <PageTransition>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/cyberwise" element={<CyberWise />} />
              <Route path="/patrons" element={<Patrons />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/code-of-conduct" element={<CodeOfConduct />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </main>
      
      {/* Footer - Only show on home page */}
      {isHomePage && <Footer />}
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-accent/5 animate-pulse-glow" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-[0.02]" />
        
        {/* Scanning line effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            animate={{
              y: ['0vh', '100vh'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </div>
    </div>
  )
}

/**
 * Root App component with initial loading state
 */
const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <AnimatedLoader onLoadingComplete={() => setIsLoading(false)} />
  }

  return (
    <HelmetProvider>
      <Router future={{ v7_startTransition: true }}>
        <AppContent />
      </Router>
    </HelmetProvider>
  )
}

export default App
