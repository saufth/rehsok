// Components
import CallToAction from '../input/CallToAction'
import Container from '../../core/components/layout/Container'
import Link from 'next/link'
// Styles
import {
  footerStyle,
  messageStyle,
  registeredMarkStyle
} from '../../styles/sections/Footer.module.css'

const Footer = () => {
  return (
    <footer id='contactanos' className={footerStyle}>

      <Container auto gapY>

        <div className='flex flex-col md:flex-row'>

          <div className='w-full flex flex-col justify-center items-center gap-y-6 md:gap-y-8 lg:gap-y-10 text-lg md:text-xl lg:text-2xl'>
            <img
              src='/images/logos/logomark-white.svg'
              alt='Rehsok logo'
              className='w-20 md:w-24 lg:w-28 opacity-80'
            />
            <Link href='mailto:contacto@rehsok.com'>
              <div className='flex gap-x-2 md:gap-x-2 lg:gap-x-3'>
                <img
                  className='w-5 md:w-5 lg:w-6'
                  src='/images/social/email.svg'
                />
                contacto@rehsok.com
              </div>
            </Link>
            <CallToAction secondary small />
          </div>

        </div>

      </Container>

      <div className='py-4 flex justify-center bg-zinc-700'>
        <Link href='/'>
          <span className={messageStyle}>
            Rehsok Consultores ®
          </span>
        </Link>
      </div>

    </footer>
  )
}

export default Footer
