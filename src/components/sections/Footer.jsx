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

      <Container auto>

        <div className='py-12 md:py-14 lg:py-16 flex flex-col md:flex-row'>

          <div className='w-full flex flex-col justify-center items-center gap-y-3 md:gap-y-4 text-lg md:text-xl lg:text-2xl'>
            <img
              src='/images/logos/logomark-white.svg'
              alt='Rehsok logo'
              className='w-20 md:w-24 lg:w-28 opacity-80'
            />
            <nav>
              <ul className='text-sm md:text-base lg:text-lg text-center'>
                <li>
                  <Link href='/'>
                    <div className='py-2'>
                      Inicio
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href='/#soluciones'>
                    <div className='py-2'>
                      Soluciones
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href='/#propuesta'>
                    <div className='py-2'>
                      Propósito
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href='/#estrategia'>
                    <div className='py-2'>
                      Estrategia
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href='/razon-de-ser'>
                    <div className='py-2'>
                      Razón de ser
                    </div>
                  </Link>
                </li>
                <li>
                  <div className='py-2'>
                    <CallToAction secondary small />
                  </div>
                </li>
              </ul>

            </nav>
          </div>

        </div>

      </Container>

      <div className='py-2 flex justify-center bg-zinc-700'>
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
