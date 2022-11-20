// Components
import Container from '../../core/components/layout/Container'
import Image from 'next/image'
import PlayButton from '../input/PlayButton'
// Media
import backgroundHero from '../../../public/images/backgrounds/hero.jpg'
import logomarkHero from '../../../public/images/logos/logomark-hero.png'
// Styles
import {
  heroStyle,
  logomarkStyle,
  titleStyle,
  logoNameStyle,
  logoDescriptionStyle,
  logoSloganStyle,
  playButtonStyle,
  backgroundStyle
} from '../../styles/sections/Hero.module.css'

const Hero = () => {

  return (
    <section className={heroStyle}>

      <Container alignment='center' fullHeight>
        <div className={logomarkStyle}>
          <Image
            alt='Rehsok Consultores'
            src={logomarkHero}
            width={192}
            height={195}
            quality='100'
          />
        </div>

        <h1 className={titleStyle}>
          <span className={logoNameStyle}>REHSOK</span>
          <span className={logoDescriptionStyle}>CONSULTORES</span>
          <span className={logoSloganStyle}>CREAMOS POSIBILIDADES</span>
        </h1>

        <div className={playButtonStyle}>
          <PlayButton/>
        </div>
      </Container>

      <div className={backgroundStyle}>
        <Image
          alt='Rehsock background'
          src={backgroundHero}
          quality='100'
          placeholder='blur'
          fill
          sizes='(min-width: 1024) 1920px, 1366px'
        />
      </div>

    </section>
  )
}

export default Hero
