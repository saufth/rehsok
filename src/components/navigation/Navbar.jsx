// Components
import CallToAction from '../input/CallToAction'
import Container from '../../core/components/layout/Container'
import Image from 'next/image'
import Link from 'next/link'
// Hooks
import { useRef, useEffect } from 'react'
// Styles
import {
  navbarStyle,
  navStyle,
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

  const openMenu = () => {
    contextMenuRef.current.style.display = 'block'
  }

  const closeOnClick = () => {
    contextMenuRef.current.style.display = 'none'
  }

  const closeOnClickOutside = (event) => {
    const contextMenuNode = contextMenuRef.current
    if (contextMenuNode && !contextMenuNode.contains(event.target)) {
      closeOnClick()
    }
  }
  
  useEffect(() => {
    const contextMenuNode = contextMenuRef.current
    
    if (contextMenuNode) {
      document.addEventListener('mousedown', closeOnClickOutside)
      contextMenuNode.addEventListener('click', closeOnClick)
      return () => {
        document.removeEventListener('mousedown', closeOnClickOutside)
        contextMenuNode.removeEventListener('click', closeOnClick)
      }
    }
  }, [])

  return (
    <header className={navbarStyle}>
      <Container auto alignment='row-end'>

        <nav aria-label='Rehsok Directorio' className={navStyle}>
          <ul className={listStyle}>
            <li>
              <Link href='/'>
                <div className={logoStyle}>
                  <Image
                    alt='Inicio'
                    src='/images/logos/logomark-white.svg'
                    width={80}
                    height={80}
                    quality='100'
                  />
                </div>
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
            <li>
              <CallToAction small secondary />
            </li>
          </ul>
        </nav>

        <div onClick={openMenu} className={buttonBurgerStyle}>
          <div className={buttonBurgerSticksStyle}></div>
        </div>

        <nav ref={contextMenuRef} className={contextMenuStyle}>
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
