import ContactForm from '@/components/forms/contact-form'
import Balancer from 'react-wrap-balancer'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Contáctanos – Impacto positivo en cada interacción comercial.',
  description: 'Somos una empresa con visión de futuro, trabajando para brindarle los mejores productos al mejor precio.'
}

export default function ContactPage () {
  return (
    <>
      <section className='px pt-8 sm:pt-24 2xl:pb-28'>
        <div className='container sm:px-0 space-y-12 sm:space-y-16'>
          <div className='space-y-10 sm:space-y-12'>
            <h2>
              <Balancer className='text-h2 font-primary text-center w-full'>
                Pongámonos en contacto
              </Balancer>
            </h2>
          </div>
          <div className='w-full flex justify-center'>
            <div className='w-3xl'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
