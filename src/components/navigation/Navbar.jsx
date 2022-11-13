// Hooks
import { useContext } from 'react'
// Utils
import { AppContext } from '../../app/context/AppProvider'
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
  buttonBurgerSticksStyle
} from '../../styles/navigation/Navbar.module.css'

const Navbar = () => {
  const [_appState, setAppState] = useContext(AppContext)

  const contextMenuRef = useRef()

  const openContact = () => {
    setAppState({
      contact: true
    })
  }

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

        <nav className='w-48 py-4 absolute right-[6%] hidden overflow-hidden bg-white rounded-md shadow-xl' ref={contextMenuRef}>
          <ul className='text-sm md:text-base lg:text-lg text-center text-rehsok-gray'>
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
