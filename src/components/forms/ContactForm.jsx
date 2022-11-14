// Hooks
import { useContext, useRef } from 'react'
// Context
import { AppContext } from '../../app/context/AppProvider'
// Services
import emailjs from '@emailjs/browser'
// Styles
import {
  layoutStyle,
  hiddenStyle
} from '../../styles/forms/ContactForm.module.css'

const ContactForm = () => {
  const formRef = useRef()

  const [appState, setAppState] = useContext(AppContext)

  const statusStyle = appState.contact ? '' : hiddenStyle
  const layoutCustomStyle = `${layoutStyle} ${statusStyle}`

  const sendEmail = (event) => {
    event.preventDefault()

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
    ).then(() => {
      alert('Hemos recibido tu mensaje')
      setAppState({
        contact: false
      })
    }, () => {
      alert('Lo sentimos, hubo un problema al intentar enviar el mensaje')
    })
  }

  const closeContact = () => {
    setAppState({
      contact: false
    })
  }

  return (
    <div className={layoutCustomStyle}>
      <div className='w-[90%] md:w-3xl h-md pt-8 pl-8 pr-4 bg-white rounded shadow-xl'>

        <div className='w-full h-[364px] pr-4 overflow-y-scroll overflow-x-hidden'>
          <h3 className='text-xl md:text-3xl lg:text-3xl text-rehsok-gray'>
            Ponte en contacto con nosotros
          </h3>

          <form ref={formRef} onSubmit={sendEmail} className='mt-4 md:mt-6 lg:mt-8'>
            <div className='flex flex-col gap-y-4 md:gap-y-5 lg:gap-y-6'>

              <div>
                <label htmlFor='business_name' className='block text-xs md:text-sm lg:text-base text-rehsok-gray'>
                  Empresa u oraganización
                </label>
                <input
                  type='text'
                  name='business_name'
                  id='business_name'
                  placeholder='ej. Rehsok Consultores'
                  required
                  className='mt-1 md:mt-1.5 lg:mt-2 w-full block px-2.5 py-1 rounded text-xs md:text-sm lg:text-base text-rehsok-gray border border-zinc-300 focus:border-blue-pantone shadow-md'
                />
              </div>

              <div>
                <label htmlFor='website' className='block text-xs md:text-sm lg:text-base text-rehsok-gray'>
                  Página web
                </label>
                <input
                  type='text'
                  name='website'
                  id='website'
                  placeholder='www.ejemplo.com'
                  required
                  className='mt-1 md:mt-1.5 lg:mt-2 w-full block px-2.5 py-1 text-xs md:text-sm lg:text-base rounded text-rehsok-gray border border-zinc-300 focus:border-blue-pantone shadow-md'
                />
              </div>

              <div>
                <label htmlFor='contact_name' className='block text-xs md:text-sm lg:text-base text-rehsok-gray'>
                  Nombre de contacto
                </label>
                <input
                  type='text'
                  name='contact_name'
                  id='contact_name'
                  placeholder='Nombre completo'
                  required
                  className='mt-1 md:mt-1.5 lg:mt-2 w-full block px-2.5 py-1 rounded text-xs md:text-sm lg:text-base text-rehsok-gray border border-zinc-300 focus:border-blue-pantone shadow-md'
                />
              </div>

              <div>
                <label htmlFor='role' className='block text-xs md:text-sm lg:text-base text-rehsok-gray'>
                  Puesto que desempeña
                </label>
                <input
                  type='text'
                  name='role'
                  id='role'
                  placeholder='ej. Director de Administrativo'
                  required
                  className='mt-1 md:mt-1.5 lg:mt-2 w-full block px-2.5 py-1 text-xs md:text-sm lg:text-base rounded text-rehsok-gray border border-zinc-300 focus:border-blue-pantone shadow-md'
                />
              </div>

              <div>
                <label htmlFor='phone' className='block text-xs md:text-sm lg:text-base text-rehsok-gray'>
                  Teléfono de contacto
                </label>
                <input
                  type='tel'
                  name='phone'
                  id='phone'
                  placeholder='ej. 555-555-5555'
                  required
                  className='mt-1 md:mt-1.5 lg:mt-2 w-full block px-2.5 py-1 text-xs md:text-sm lg:text-base rounded text-rehsok-gray border border-zinc-300 focus:border-blue-pantone shadow-md'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-xs md:text-sm lg:text-base text-rehsok-gray'>
                  Correo de contacto
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='ej. nombre@dominio.com'
                  required
                  className='mt-1 md:mt-1.5 lg:mt-2 w-full block px-2.5 py-1 text-xs md:text-sm lg:text-base rounded text-rehsok-gray border border-zinc-300 focus:border-blue-pantone shadow-md'
                />
              </div>

              <div>
                <label htmlFor='description' className='block text-xs md:text-sm lg:text-base text-rehsok-gray'>
                  Descripción de la problematica o solución que necesita
                </label>
                <textarea
                  name='description'
                  id='description'
                  rows={3}
                  placeholder='Cuentanos ¿Cómo podemos ayudarte?'
                  defaultValue={''}
                  className='mt-2 w-full block px-2.5 py-1 rounded text-xs md:text-sm lg:text-base text-rehsok-gray border border-zinc-300 focus:border-blue-pantone shadow-md'
                />
              </div>
              
              <button
                type='submit'
                className='w-20 md:w-24 lg:w-28 py-2 md:py-2.5 lg:py-3 mt-2 md:mt-3 lg:mt-4 text-xs md:text-sm lg:text-base text-white bg-rehsok-indigo hover:bg-blue-pantone rounded font-archivo-medium transition-colors'
              >
                Enviar
              </button>

            </div>
          </form>

        </div>

        <div className='w-full h-12 flex justify-end items-center text-rehsok-gray'>
          <button className='font-archivo-medium text-xs md:text-sm lg:text-base text-indigo-500' onClick={closeContact}>
            Cancelar
          </button>
        </div>

      </div>
    </div>
  )
}

export default ContactForm
