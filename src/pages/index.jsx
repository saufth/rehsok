// Components
import PageTransition from '../components/layout/PageTransition'
import Solutions from '../components/sections/SolutionsSection'
import Purpose from '../components/sections/PurposeSection'
import Strategy from '../components/sections/StrategySection'

const Home = () => {
  return (
    <PageTransition>
      <Solutions />
      <Purpose />
      <Strategy />
    </PageTransition>
  )
}

export default Home
