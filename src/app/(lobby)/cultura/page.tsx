import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { siteNav } from '@/config/site'
import { type Metadata } from 'next'
import { culture, history } from '@/config/organization'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Conócenos – Más que un proveedor, somos tu aliado estratégico.',
  description: 'Nos dedicamos incansablemente a ofrecerte la agilidad y éxito que requieres para destacarte en un entorno empresarial cada vez más desafiante.'
}

const contactLink = siteNav.find(({ title }) => title === 'Contáctanos')!

export default function CulturePage () {
  return (
    <>
      <section className='mt-spacing-7'>
        <div className='container'>
          <div className='pt-spacing-9'>
            <div className='cols-container pt-spacing-3'>
              <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
                <h1 className='f-display-2 md:pr-9 lg:pr-11'>
                  Nosotros
                </h1>
              </div>
              <div className='w-6-cols md:w-4-cols lg:w-6-cols mt-4 md:mt-0'>
                <p className='f-subhead-1'>
                  El éxito a corto, mediano y largo plazo de cualquier empresa, no depende de un solo aspecto, sino de la sincronización de muchos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='full-bleed-container mt-spacing-7'>
          <Image
            src='/images/about-hero.webp'
            alt='Un joven y feliz hombre de negocios está escribiendo en una computadora portátil mientras trabaja remotamente desde la cafetería'
            width={3200}
            height={2400}
            sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
            loading='lazy'
            className='w-full'
          />
        </div>
      </section>
      <section className='mt-spacing-7'>
        <div className='container border-t'>
          <div className='cols-container mt-spacing-3'>
            <div className='w-6-cols sm:w-4-cols lg:w-6-cols relative'>
              <div className='xl:w-8-cols sm:pr-9 xl:pr-0'>
                <h3 className='f-heading-1'>
                  Nuestro proposito
                </h3>
                <p className='mt-4 f-body-1'>
                  Creamos posibilidades para empresas orientadas a desarrollar un legado de progreso generacional.
                </p>
              </div>
              <div className='mt-spacing-4'>
                <Button variant='outline' size='lg' asChild>
                  <Link
                    className='text-primary hover:text-primary-foreground'
                    href={contactLink.href}
                  >
                    Ponte en contacto con nosotros
                  </Link>
                </Button>
              </div>
            </div>
            <div className='w-6-cols sm:w-4-cols lg:w-6-cols mt-10 sm:mt-0'>
              <Image
                src='/images/about-purpose.webp'
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
      </section>
      <section className='mt-spacing-7'>
        <div className='container'>
          <div className='border-t'>
            <div className='cols-container pt-spacing-3'>
              <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
                <h2 className='f-heading-1 font-serif md:pr-9 lg:pr-11'>
                  {culture.title}
                </h2>
              </div>
              {culture.description && (
                <div className='w-6-cols md:w-4-cols lg:w-6-cols mt-4 md:mt-0'>
                  <p className='f-subhead-1'>
                    {culture.description}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className='cols-container mt-spacing-7'>
            {culture.items.map((cultureItem, key) => (
              <article className='cols-container items-center 2xl:items-start w-full 2xl:w-6-cols mt-spacing-7 !ml-0 even:flex-row-reverse 2xl:even:flex-row' key={key}>
                <div className='w-8-cols md:w-4-cols lg:w-6-cols'>
                  <Image
                    src={cultureItem.image.src}
                    alt={cultureItem.image.alt}
                    width={1024}
                    height={1024}
                    sizes='(max-width: 744px) 100vw, (max-width: 1280px) 50vw, 500px'
                    loading='lazy'
                  />
                </div>
                <div className='mt-2 lg:mt-0 h-fit space-y-1.5 w-8-cols md:w-4-cols lg:w-6-cols lg:px-12 2xl:px-0'>
                  <h3 className='f-subhead-2'>
                    {cultureItem.title}
                  </h3>
                  {typeof cultureItem.description === 'string'
                    ? (
                      <p className='text-muted-foreground f-body-1'>{cultureItem.description}</p>
                      )
                    : (
                        cultureItem.description.map((descriptionItem) => (
                          <p className='text-muted-foreground f-body-1' key={descriptionItem}>{descriptionItem}</p>
                        ))
                      )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className='mt-spacing-7'>
        <div className='container'>
          <div className='border-t'>
            <div className='cols-container pt-spacing-3'>
              <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
                <h2 className='f-heading-1 font-serif md:pr-9 lg:pr-11'>
                  {history.title}
                </h2>
              </div>
              {history.description && (
                <div className='w-6-cols md:w-4-cols lg:w-6-cols mt-4 md:mt-0'>
                  <p className='f-subhead-1'>
                    {history.description}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className='mt-spacing-6'>
            {history.items.map((historyItem, key) => (
              <p className='f-subhead-2 mt-spacing-3' key={key}>
                {historyItem}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
