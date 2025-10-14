import { useEffect } from 'react'

/**
 * Custom hook for managing dark theme only
 * Always applies dark theme class to document element
 */
export const useTheme = () => {
  useEffect(() => {
    const root = window.document.documentElement
    
    // Always apply dark theme
    root.classList.remove('light')
    root.classList.add('dark')
  }, [])

  return {
    theme: 'dark',
    isDark: true,
    isLight: false
  }
}
