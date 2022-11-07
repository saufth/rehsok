// Components
import CallToAction from '../input/CallToAction'
import Container from '../../core/components/layout/Container'
import Link from 'next/link'
// Styles
import {
  navbarStyle,
  navigationStyle,
  logoStyle,
  listStyle,
  buttonBurgerStyle,
  buttonBurgerSticksStyle
} from '../../styles/navigation/Navbar.module.css'

const Navbar = () => {
  return (
    <header className={navbarStyle}>
      <Container auto>
        <nav className={navigationStyle}>

          <Link href='/'>
            <img
              className={logoStyle}
              src='/images/logos/logomark-white.svg'
              alt='Inicio'
            />
          </Link>

          <ul className={listStyle}>
            <li>
              <Link href='/#soluciones'>
                Soluciones
              </Link>
            </li>
            <li>
              <Link href='/#propuesta'>
                Proposito
              </Link>
            </li>
            <li>
              <Link href='/#estrategia'>
                Estrategia
              </Link>
            </li>
            <li>
              <PageTransition>
                <Link href='/historia'>
                  Historia
                </Link>
              </PageTransition>
            </li>
            <li>
              <CallToAction small secondary />
            </li>
          </ul>

          <button className={buttonBurgerStyle} onClick={() => alert('Menu opened!')} >
            <div className={buttonBurgerSticksStyle}></div>
          </button>

        </nav>
      </Container>
    </header>
  )
}

export default Navbar
