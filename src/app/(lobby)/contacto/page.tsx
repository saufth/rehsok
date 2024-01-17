import { type Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/forms/contact-form'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: `Contáctanos – ${siteConfig.slogan}.`,
  description: siteConfig.description
}

export default function ContactPage () {
  return (
    <>
      <div className='w-full h-[68px] lg:h-[84px] fixed top-0 left-0 bg-black z-20' />
      <div className='mt-spacing-9'>
        <div className='container border-t'>
          <div className='mt-spacing-3'>
            <h1 className='f-heading-1 font-serif md:pr-9 lg:pr-11'>
              Ponte en contacto con nosotros
            </h1>
          </div>
          <div className='cols-container mt-spacing-6'>
            <div className='w-full lg:w-5-cols relative mt-12 lg:mt-0 order-2 lg:order-1'>
              <ContactForm />
            </div>
            <div className='w-full lg:w-7-cols order-1 lg:order-2'>
              <Image
                src='/images/contact-hero.webp'
                alt='Dos hombres de negocios discutiendo en una oficina moderna'
                width={2840}
                height={2840}
                sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                loading='lazy'
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
