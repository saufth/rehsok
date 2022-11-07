// Hooks
import { useState, useEffect, useRef } from 'react'

const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const isMounted = useRef(false)

  const handleWindowResize = () => {
    const { width, height } = ref.current.getBoundingClientRect()
    setDimensions({ width, height })
  }

  useEffect(() => {
    if (!isMounted.current) {
      handleWindowResize()
      isMounted.current = true
    }

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [ref])

  return dimensions
}

export default useDimensions
