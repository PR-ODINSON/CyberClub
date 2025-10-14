import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Custom hook to scroll to top on route changes
 * Provides smooth scrolling behavior when navigating between pages
 */
export const useScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top smoothly when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [location.pathname])
}

/**
 * Utility function for smooth scrolling to any element
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top (default: 80px for header)
 */
export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

/**
 * Utility function to scroll to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
