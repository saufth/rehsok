// Components
import Solutions from '../components/sections/Solutions'
import Purpose from '../components/sections/Purpose'
import Strategy from '../components/sections/Strategy'
import Hero from '../components/sections/Hero'
import Loading from '../components/feedback/Loading'
// Hooks
import { useEffect, useState } from 'react'

const Sections = (
  <>
    <Hero />
    <Solutions />
    <Purpose />
    <Strategy />
  </>
)

const HomePage = () => {
  const [pageState, setPageState] = useState(Loading)
  
  useEffect(() => {
    setPageState(Sections)
  }, [])

  return pageState
}

export default HomePage
