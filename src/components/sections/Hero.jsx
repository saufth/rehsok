// Components
import Container from '../../core/components/layout/Container'
import Image from 'next/image'
import PlayButton from '../input/PlayButton'
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
            src='/images/logos/logomark-hero.png'
            layout='responsive'
            width={192}
            height={195}
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
          src='/images/backgrounds/hero.jpg'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>
    </section>
  )
}

export default Hero
