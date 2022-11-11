// Components
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

          <div className='w-full md:w-3/5'>
            <h3 className='text-xl md:text-3xl lg:text-3xl'>
              Ponte en contacto con nosotros
            </h3>

            <form className='mt-4 md:mt-6 lg:mt-8' onSubmit={(event) => {event.preventDefault();alert('Email sent!')}} method='POST'>
              <div className='flex flex-col gap-y-4 md:gap-y-5 lg:gap-y-6 [&>div]:w-full [&>div]:md:w-md'>

                <div>
                  <label htmlFor='business-name' className='block text-xs md:text-sm lg:text-base text-white'>
                    Empresa u oraganización
                  </label>
                  <input
                    type='text'
                    name='business-name'
                    id='business-name'
                    placeholder='ej. Rehsok consultores'
                    required
                    className='mt-1 md:mt-1.5 lg:mt-2 w-full block px-2.5 py-1 rounded text-xs md:text-sm lg:text-base text-rehsok-gray border border-white focus:border-blue-pantone'
                  />
                </div>

                <div>
                  <label htmlFor='website' className='block text-xs md:text-sm lg:text-base text-white'>
                    Página web
                  </label>
                  <input
                    type='text'
                    name='website'
                    id='website'
                    placeholder='www.ejemplo.com'
                    required
                    className='mt-1 md:mt-1.5 lg:mt-2 w-full block px-2.5 py-1 text-xs md:text-sm lg:text-base rounded text-rehsok-gray border border-white focus:border-blue-pantone'
                  />
                </div>

                <div>
                  <label htmlFor='contact-name' className='block text-xs md:text-sm lg:text-base text-white'>
                    Nombre de contacto
                  </label>
                  <input
                    type='text'
                    name='contact-name'
                    id='contact-name'
                    placeholder='Nombre completo'
                    required
                    className='mt-1 md:mt-1.5 lg:mt-2 w-full block px-2.5 py-1 rounded text-xs md:text-sm lg:text-base text-rehsok-gray border border-white focus:border-blue-pantone'
                  />
                </div>

                <div>
                  <label htmlFor='rol' className='block text-xs md:text-sm lg:text-base text-white'>
                    Puesto que desempeña en la empresa u oragnización
                  </label>
                  <input
                    type='text'
                    name='rol'
                    id='rol'
                    placeholder='ej. Director de proyectos'
                    required
                    className='mt-1 md:mt-1.5 lg:mt-2 w-full block px-2.5 py-1 text-xs md:text-sm lg:text-base rounded text-rehsok-gray border border-white focus:border-blue-pantone'
                  />
                </div>

                <div>
                  <label htmlFor='phone' className='block text-xs md:text-sm lg:text-base text-white'>
                    Teléfono de contacto
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    id='phone'
                    placeholder='ej. 555-555-5555'
                    required
                    className='mt-1 md:mt-1.5 lg:mt-2 w-full block px-2.5 py-1 text-xs md:text-sm lg:text-base rounded text-rehsok-gray border border-white focus:border-blue-pantone'
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-xs md:text-sm lg:text-base text-white'>
                    Correo de contacto
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='ej. nombre@dominio.com'
                    required
                    className='mt-1 md:mt-1.5 lg:mt-2 w-full block px-2.5 py-1 text-xs md:text-sm lg:text-base rounded text-rehsok-gray border border-white focus:border-blue-pantone'
                  />
                </div>

                <div>
                  <label htmlFor='description' className='block text-xs md:text-sm lg:text-base text-white'>
                    Breve descripción, problematica o solución que necesita
                  </label>
                  <textarea
                    name='description'
                    id='description'
                    rows={3}
                    placeholder='Cuentanos más sobre como podemos ayudarte'
                    defaultValue={''}
                    className='mt-2 w-full block px-2.5 py-1 rounded text-xs md:text-sm lg:text-base text-rehsok-gray border border-white focus:border-blue-pantone'
                  />
                </div>
                
                <button
                  type='submit'
                  className='w-20 md:w-24 lg:w-28 py-2 md:py-2.5 lg:py-3 mt-2 md:mt-3 lg:mt-4 text-xs md:text-sm lg:text-base bg-rehsok-indigo hover:bg-blue-pantone rounded font-archivo-medium transition-colors'
                >
                  Enviar
                </button>

              </div>
            </form>

          </div>

          <div className='w-full md:w-2/5 flex flex-col justify-center items-center gap-y-6 md:gap-y-8 lg:gap-y-10 py-24 md:py-0 text-lg md:text-xl lg:text-2xl'>
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
          </div>

        </div>

      </Container>

      <div className='py-4 flex justify-center bg-zinc-700'>
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
