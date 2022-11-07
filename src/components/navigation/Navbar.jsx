// Components
import Anchor from '../../core/components/navigation/Anchor'
import CallToAction from '../input/CallToAction'
import Container from '../../core/components/layout/Container'
import MagnetAnchor from './MagnetAnchor'
// Styles
import {
  group,
  navbarStyle,
  navigationStyle,
  logoStyle,
  listStyle,
  itemStyle,
  buttonBurgerStyle,
  buttonBurgerSticksStyle
} from '../../styles/navigation/Navbar.module.css'

const listGroupStyle = `${listStyle} ${group}`

const Navbar = () => {
  return (
    <header className={navbarStyle}>
      <Container auto>
        <nav className={navigationStyle}>
            <Anchor href='#'>
              <img
                className={logoStyle}
                src='/images/logos/logomark-white.svg'
                alt='Inicio'
              />
            </Anchor>

            <ul className={listGroupStyle}>
              <li>
                <MagnetAnchor href='#solutions'>
                  <span className={itemStyle}>
                    Soluciones
                  </span>
                </MagnetAnchor>
              </li>
              <li>
                <MagnetAnchor href='#purpose'>
                  <span className={itemStyle}>
                    Proposito
                  </span>
                </MagnetAnchor>
              </li>
              <li>
                <MagnetAnchor href='#strategy'>
                  <span className={itemStyle}>
                    Estrategia
                  </span>
                </MagnetAnchor>
              </li>
              <li>
                <MagnetAnchor href='#story'>
                  <span className={itemStyle}>
                    Historia
                  </span>
                </MagnetAnchor>
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
