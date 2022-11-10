// Components
import CallToAction from '../input/CallToAction'
import Container from '../../core/components/layout/Container'
import Link from 'next/link'
// Styles
import {
  footerStyle,
  headingStyle,
  messageStyle,
  registeredMarkStyle
} from '../../styles/sections/Footer.module.css'

const Footer = () => {
  return (
    <footer id='contactanos' className={footerStyle}>

      <Container auto gapY>

        <div className='flex flex-col md:flex-row'>

          <div className='w-full md:w-3/5'>
            <h2 className={headingStyle}>
              ¡Pongamonos en marcha!..
            </h2>

            <CallToAction secondary space='top-xs' />

          </div>

          <div className='w-full md:w-2/5 mt-24 md:mt-0 flex flex-col justify-center gap-y-6 text-lg md:text-xl lg:text-2xl'>
            <div className='flex gap-x-2 md:gap-x-3'>
              <img
                className='w-5 md:w-5 lg:w-6'
                src='/images/social/email.svg'
              />
              <Link href='mailto:contacto@rehsok.com'>
                contacto@rehsok.com
              </Link>
            </div>
          </div>

        </div>

      </Container>

      <div className='flex justify-center py-4 bg-zinc-700'>
        <Link href='#'>
          <span className={messageStyle}>
            REHSOK<span className={registeredMarkStyle}>®</span>
          </span>
        </Link>
      </div>

    </footer>
  )
}

export default Footer
