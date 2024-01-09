import Image from 'next/image'
import Link from 'next/link'
import BackgroundVideo from '@/components/background-video'
import { Button } from '@/components/ui/button'
import { benefits } from '@/config/organization'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'

export default function IndexPage () {
  return (
    <>
      <section>
        <div className='w-full h-screen min-h-[500xp] lg:min-h-[600px] max-h-[1000px] relative z-10'>
          <div className='container absolute inset-x-0 bottom-[0.8125rem] md:bottom-[1.375rem] z-10'>
            <div className='cols-container justify-center'>
              <div className='w-6-cols md:w-8-cols lg:w-9-cols'>
                <h1 className='f-heading-1 text-white dark:text-white'>
                  {siteConfig.description}
                </h1>
                <Button
                  className='mt-spacing-6'
                  variant='outline'
                  size='lg'
                  asChild
                >
                  <Link href='/contacto'>
                    Conoce nuestra cultura
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <BackgroundVideo src='/video/home-hero.mp4' />
        </div>
      </section>
      <div>
        <div className='container mt-spacing-1'>
          <ul className='cols-container'>
            {benefits.map((benefit) => (
              <li className='w-6-cols md:w-4-cols lg:w-1/3-cols mt-spacing-6' key={benefit.title}>
                <Link className='group' href={benefit.nav.href}>
                  <h3 className='f-heading-3 md:max-w-sm md:pr-4'>
                    {benefit.title}
                  </h3>
                  <div className='mt-spacing-3 underline underline-offset-2 group-hover:decoration-muted md:text-lg'>
                    {benefit.nav.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <section className='mt-spacing-7'>
        <div className='container'>
          <div className='border-t'>
            <div className='cols-container pt-spacing-3'>
              <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
                <h2 className='f-heading-2 font-secondary md:pr-9 lg:pr-11'>
                  Responsabilidad y seguridad
                </h2>
              </div>
              {services.description && (
                <div className='w-6-cols md:w-4-cols lg:w-6-cols mt-4 md:mt-0'>
                  <p className='f-heading-3'>
                    Nuestra razón de ser consiste en convertirnos en un aliado determinante en el éxito presente y futuro de nuestros clientes.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='full-bleed-container mt-spacing-7'>
          <Image
            src='/images/home-services.webp'
            alt='Un joven y feliz hombre de negocios está escribiendo en una computadora portátil mientras trabaja remotamente desde la cafetería'
            width={3200}
            height={2400}
            sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
            loading='lazy'
            className='w-full'
          />
        </div>
      </section>
      <section id='soluciones' className='mt-spacing-7'>
        <div className='container'>
          <div className='border-t'>
            <div className='cols-container pt-spacing-3 border-t'>
              <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
                <h2 className='f-heading-2 font-secondary md:pr-9 lg:pr-11'>
                  {services.title}
                </h2>
              </div>
              {services.description && (
                <div className='w-6-cols md:w-4-cols lg:w-6-cols mt-4 md:mt-0'>
                  <p className='f-heading-3'>
                    {services.description}
                  </p>
                </div>
              )}
              {services.image && (
                <div className='full-bleed-container mt-spacing-7'>
                  <Image
                    src={services.image.src}
                    alt={services.image.alt}
                    width={1024}
                    height={1024}
                    sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                    loading='lazy'
                    className='w-full'
                  />
                </div>
              )}
            </div>
          </div>
          <div className='cols-container mt-spacing-7'>
            {services.items.map((serviceItem, key) => (
              <article className='w-8-cols md:w-4-cols lg:w-6-cols xl:w-4-cols mt-spacing-6' key={key}>
                <div>
                  <Image
                    src={serviceItem.image.src}
                    alt={serviceItem.image.alt}
                    width={1024}
                    height={1024}
                    sizes='(max-width: 744px) 100vw, (max-width: 1280px) 50vw, 500px'
                    loading='lazy'
                  />
                </div>
                <div className='mt-2'>
                  <h3 className='text-p3 font-medium'>
                    {serviceItem.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className='mt-spacing-7'>
        <div className='container border-t'>
          <div className='cols-container pt-spacing-3'>
            <div className='w-6-cols md:w-8-cols lg:w-5-cols'>
              <div className='f-heading-2 font-secondary md:pr-9 lg:pr-11'>
                "Lo que no sabes no es lo que te mete en problemas. Es lo que sabes y das por hecho que resulta no ser."
              </div>
              <div className='mt-spacing-5 font-secondary text-sm sm:text-base'>
                Mark Twain
              </div>
            </div>
            <div className='w-8-cols lg:w-7-cols mt-spacing-7 lg:mt-0'>
              <Image
                src='/images/home-banner.webp'
                alt='Dos hombres de negocios discutiendo en una oficina moderna'
                width={3200}
                height={2400}
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
