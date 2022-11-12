// Components
import Container from '../../core/components/layout/Container'
import PlayButton from '../input/PlayButton'
// Styles
import {
  heroStyle,
  logomarkStyle,
  titleStyle,
  logoNameStyle,
  logoDescriptionStyle,
  logoSloganStyle,
  playButtonStyle
} from '../../styles/sections/Hero.module.css'

const Hero = () => {

  return (
    <section className={heroStyle}>
      <Container alignment='center' fullHeight>

        <img
          className={logomarkStyle}
          src='/images/logos/logomark-hero.png'
          alt='Rehsok logo'
        />

        <h1 className={titleStyle}>
          <span className={logoNameStyle}>REHSOK</span>
          <span className={logoDescriptionStyle}>CONSULTORES</span>
          <span className={logoSloganStyle}>CREAMOS POSIBILIDADES</span>
        </h1>

        <div className={playButtonStyle}>
          <PlayButton/>
        </div>

      </Container>
    </section>
  )
}

export default Hero
