// Hooks
import { useContext, useRef } from 'react'
// Context
import { AppContext } from '../../app/context/AppProvider'
// Services
import emailjs from '@emailjs/browser'
// Styles
import {
  layoutStyle,
  containerStyle,
  formWrapperStyle,
  headingStyle,
  formStyle,
  labelStyle,
  inputStyle,
  submitStyle,
  submitButtonStyle,
  toolbarStyle,
  cancelStyle,
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
      <div className={containerStyle}>

        <div className={formWrapperStyle}>
          <h1 className={headingStyle}>
            Ponte en contacto con nosotros
          </h1>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className={formStyle}
          >

            <div>
              <label htmlFor='business_name' className={labelStyle}>
                Empresa u oraganización
              </label>
              <input
                type='text'
                name='business_name'
                id='business_name'
                placeholder='ej. Rehsok Consultores'
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label htmlFor='website' className={labelStyle}>
                Página web
              </label>
              <input
                type='text'
                name='website'
                id='website'
                placeholder='www.ejemplo.com'
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label htmlFor='contact_name' className={labelStyle}>
                Nombre de contacto
              </label>
              <input
                type='text'
                name='contact_name'
                id='contact_name'
                placeholder='Nombre completo'
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label htmlFor='role' className={labelStyle}>
                Puesto que desempeña
              </label>
              <input
                type='text'
                name='role'
                id='role'
                placeholder='ej. Director de Administrativo'
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label htmlFor='phone' className={labelStyle}>
                Teléfono de contacto
              </label>
              <input
                type='tel'
                name='phone'
                id='phone'
                placeholder='ej. 555-555-5555'
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label htmlFor='email' className={labelStyle}>
                Correo de contacto
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='ej. nombre@dominio.com'
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label htmlFor='description' className={labelStyle}>
                Descripción de la problematica o solución que necesita
              </label>
              <textarea
                name='description'
                id='description'
                rows={3}
                placeholder='Cuentanos ¿Cómo podemos ayudarte?'
                defaultValue={''}
                className={inputStyle}
              />
            </div>
            
            <div className={submitStyle}>
              <button className={submitButtonStyle} type='submit'>
                Enviar
              </button>
            </div>

          </form>

        </div>

        <div className={toolbarStyle}>
          <button onClick={closeContact} className={cancelStyle}>
            Cancelar
          </button>
        </div>

      </div>
    </div>
  )
}

export default ContactForm
