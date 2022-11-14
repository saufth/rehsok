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

const navigationConfig = [
  {
    content: 'Inicio',
    url: '/'
  },
  {
    content: 'Soluciones',
    url: '/#soluciones'
  },
  {
    content: 'Propósito',
    url: '/#propuesta'
  },
  {
    content: 'Estrategia',
    url: '/#estrategia'
  },
  {
    content: 'Razón de ser',
    url: '/razon-de-ser'
  },
]

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
            {navigationConfig.map(({content, url}, key) => (
              <li key={key}>
                <Link href={url}>
                  {content}
                </Link>
              </li>
            ))}
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
