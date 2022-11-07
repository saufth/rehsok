// Hooks
import { useState, useEffect } from 'react'

const initialState = {
  x: 0,
  y: 0
}

const useRefMousePosition = (ref, from = 'screen') => {
  const [mousePosition, setMousePosition] = useState(initialState)

  const handleMousePosition = (event) => {
    const mousePositionState = {
      x: event[`${from}X`],
      y: event[`${from}Y`]
    }
    setMousePosition(mousePositionState)
  }

  useEffect(() => {
    const node = ref.current

    if (node) {
      node.addEventListener('mousemove', handleMousePosition)

      return () => {
        node.removeEventListener('mousemove', handleMousePosition)
      }
    }
  }, [])

  return mousePosition
}

export default useRefMousePosition
