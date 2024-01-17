import { type Metadata } from 'next'
import Image from 'next/image'
import { culture } from '@/config/organization'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: `Cultura – ${siteConfig.slogan}.`,
  description: siteConfig.description
}

export default function CulturaPage () {
  return (
    <>
      <div className='w-full h-[68px] lg:h-[84px] fixed top-0 left-0 bg-black z-20' />
      <section>
        <div className='container'>
          <div className='pt-spacing-7'>
            <div className='cols-container pt-spacing-3'>
              <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
                <h1 className='f-display-2 md:pr-9 lg:pr-11 font-serif'>
                  Nuestra cultura
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className='full-bleed-container mt-spacing-7'>
          <Image
            src='/images/cultura-hero.webp'
            alt='Un joven y feliz hombre de negocios está escribiendo en una computadora portátil mientras trabaja remotamente desde la cafetería'
            width={3200}
            height={2400}
            sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
            loading='lazy'
            className='w-full'
          />
        </div>
        <div className='container mt-spacing-7'>
          <div className='border-t'>
            <div className='cols-container pt-spacing-3'>
              {/* <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
                <h2 className='f-heading-1 font-serif md:pr-9 lg:pr-11'>
                  {culture.title}
                </h2>
              </div> */}
              {culture.description && (
                <div className='w-6-cols md:w-8-cols lg:w-12-cols mt-4 md:mt-0'>
                  <p className='f-subhead-1'>
                    {culture.description}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className='cols-container'>
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
    </>
  )
}
