// Components
import About from '../components/sections/About'
import Loading from '../components/feedback/Loading'
// Hooks
import { useEffect, useState } from 'react'

const AboutPage = () => {
  const [pageState, setPageState] = useState(Loading)
  
  useEffect(() => {
    setPageState(About)
  }, [])

  return pageState
}

export default AboutPage
