// Components
import CallToAction from '../input/CallToAction'
import Container from '../../core/components/layout/Container'
import Link from 'next/link'
// Styles
import {
  footerStyle,
  logomarkStyle,
  listStyle,
  logonameStyle
} from '../../styles/sections/Footer.module.css'

const Footer = () => {
  return (
    <footer className={footerStyle} data-version='v1'>

      <Container auto alignment='center' gapY>

        <img
          src='/images/logos/logomark-white.svg'
          alt='Rehsok Consultores'
          className={logomarkStyle}
        />

        <nav aria-label='Rehsok Directorio' role='navigation'>
          <ul className={listStyle}>
            <li>
              <Link href='/'>
                Inicio
              </Link>
            </li>
            <li>
              <Link href='/#soluciones'>
                Soluciones
              </Link>
            </li>
            <li>
              <Link href='/#propuesta'>
                Propósito
              </Link>
            </li>
            <li>
              <Link href='/#estrategia'>
                Estrategia
              </Link>
            </li>
            <li>
              <Link href='/razon-de-ser'>
                Razón de ser
              </Link>
            </li>
          </ul>
        </nav>

        <CallToAction secondary small />

      </Container>

      <div className={logonameStyle}>
        <Link href='/'>
          Rehsok Consultores ®
        </Link>
      </div>

    </footer>
  )
}

export default Footer
