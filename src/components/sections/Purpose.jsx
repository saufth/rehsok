// Components
import CallToAction from '../input/CallToAction'
import Container from '../../core/components/layout/Container'
import Heading from '../../core/components/data-display/Heading'
import Image from 'next/image'
import Paragraph from '../../core/components/data-display/Paragraph'
// Styles
import {
  sectionStyle,
  logoStyle,
  headingStyle
} from '../../styles/sections/Purpose.module.css'

const Purpose = () => {
  return (
    <section id='propuesta' className={sectionStyle}>
      <Container auto alignment='center' gapY>

        <div className={logoStyle}>
          <Image
            alt='Rhesock Consultores'
            src='/images/logos/logomark.svg'
            width={160}
            height={160}
            quality='100'
            priority
          />
        </div>

        <div className={headingStyle}>
          <Heading center>
            Nuestro propósito
          </Heading>
        </div>

        <Paragraph center space='top-xs'>
          Creamos posibilidades para empresas orientadas al progreso, 
          con el objetivo de construir un legado de verdad.
        </Paragraph>

        <CallToAction space='top-lg' />

      </Container>
    </section>
  )
}

export default Purpose
