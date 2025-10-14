import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Custom hook for managing the custom cursor
 * Handles mouse tracking, hover states, and accessibility
 */
export const useCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [hoverType, setHoverType] = useState('default')
  const [isClicking, setIsClicking] = useState(false)
  
  const requestRef = useRef()
  const targetPosition = useRef({ x: 0, y: 0 })
  const currentPosition = useRef({ x: 0, y: 0 })

  // Smooth cursor movement using linear interpolation
  const updateCursorPosition = useCallback(() => {
    const lerp = (start, end, factor) => start + (end - start) * factor
    const lerpFactor = 0.15 // Adjust for smoothness (0.1 = smooth, 0.5 = snappy)

    currentPosition.current.x = lerp(
      currentPosition.current.x,
      targetPosition.current.x,
      lerpFactor
    )
    currentPosition.current.y = lerp(
      currentPosition.current.y,
      targetPosition.current.y,
      lerpFactor
    )

    setPosition({
      x: currentPosition.current.x,
      y: currentPosition.current.y
    })

    requestRef.current = requestAnimationFrame(updateCursorPosition)
  }, [])

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Check if device supports hover (not touch device)
    const supportsHover = window.matchMedia('(hover: hover)').matches
    
    if (prefersReducedMotion || !supportsHover) {
      // Show default cursor for accessibility or touch devices
      document.body.style.cursor = 'auto'
      return
    }

    const handleMouseMove = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    // Start animation loop
    requestRef.current = requestAnimationFrame(updateCursorPosition)

    return () => {
      // Cleanup
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
      
      // Restore default cursor
      document.body.style.cursor = 'auto'
    }
  }, [updateCursorPosition])

  // Hover state management
  const setHover = useCallback((type = 'default') => {
    setIsHovering(true)
    setHoverType(type)
  }, [])

  const removeHover = useCallback(() => {
    setIsHovering(false)
    setHoverType('default')
  }, [])

  return {
    position,
    isVisible,
    isHovering,
    hoverType,
    isClicking,
    setHover,
    removeHover
  }
}
