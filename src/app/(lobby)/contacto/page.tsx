import ContactForm from '@/components/forms/contact-form'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Contáctanos – Impacto positivo en cada interacción comercial.',
  description: 'Somos una empresa con visión de futuro, trabajando para brindarle los mejores productos al mejor precio.'
}

export default function ContactPage () {
  return (
    <>
      <section className='px-4 mt-spacing-9'>
        <div className='max-w-4xl mx-auto sm:px-0 space-y-12 sm:space-y-16'>
          <h1 className='f-display-1'>
            Pongámonos en contacto
          </h1>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
