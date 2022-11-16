// Components
import CallToAction from '../input/CallToAction'
import Container from '../../core/components/layout/Container'
import Link from 'next/link'
// Hooks
import { useRef, useEffect } from 'react'
// Styles
import {
  navbarStyle,
  navigationStyle,
  logoStyle,
  listStyle,
  buttonBurgerStyle,
  buttonBurgerSticksStyle,
  contextMenuStyle,
  contextMenuListStyle,
  contextMenuItemStyle
} from '../../styles/navigation/Navbar.module.css'

const Navbar = () => {

  const contextMenuRef = useRef()

  const handleOpenMenu = () => {
    contextMenuRef.current?.classList.remove('hidden')
  }

  const handleCloseOnClick = () => {
    contextMenuRef.current?.classList.add('hidden')
  }

  const handleCloseOnClickOutside = (event) => {
    const contextMenuNode = contextMenuRef.current
    if (contextMenuNode && !contextMenuNode.contains(event.target)) {
      contextMenuNode.classList.add('hidden')
    }
  }
  
  useEffect(() => {
    const contextMenuNode = contextMenuRef.current
    
    if (contextMenuNode) {
      document.addEventListener('mousedown', handleCloseOnClickOutside)
      contextMenuNode.addEventListener('click', handleCloseOnClick)
      return () => {
        document.removeEventListener('mousedown', handleCloseOnClickOutside)
        contextMenuNode.removeEventListener('click', handleCloseOnClick)
      }
    }
  }, [])

  return (
    <header className={navbarStyle}>
      <Container auto>
        <nav className={navigationStyle} aria-label='Rehsok Directorio' role='navigation'>

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
              <li>
                <CallToAction small secondary />
              </li>
            </ul>

            <button className={buttonBurgerStyle} onClick={handleOpenMenu} >
              <div className={buttonBurgerSticksStyle}></div>
            </button>

        </nav>

        <nav className={contextMenuStyle} ref={contextMenuRef}>
          <ul className={contextMenuListStyle}>
            <li>
              <Link href='/'>
                <div className={contextMenuItemStyle}>
                  Inicio
                </div>
              </Link>
            </li>
            <li>
              <Link href='/#soluciones'>
                <div className={contextMenuItemStyle}>
                  Soluciones
                </div>
              </Link>
            </li>
            <li>
              <Link href='/#propuesta'>
                <div className={contextMenuItemStyle}>
                  Propósito
                </div>
              </Link>
            </li>
            <li>
              <Link href='/#estrategia'>
                <div className={contextMenuItemStyle}>
                  Estrategia
                </div>
              </Link>
            </li>
            <li>
              <Link href='/razon-de-ser'>
                <div className={contextMenuItemStyle}>
                  Razón de ser
                </div>
              </Link>
            </li>
            <li>
              <div className={contextMenuItemStyle}>
                <CallToAction small />
              </div>
            </li>
          </ul>
        </nav>

      </Container>
    </header>
  )
}

export default Navbar
