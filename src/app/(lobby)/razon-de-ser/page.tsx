import { type Metadata } from 'next'
import { history } from '@/config/organization'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Conócenos – Más que un proveedor, somos tu aliado estratégico.',
  description: 'Nos dedicamos incansablemente a ofrecerte la agilidad y éxito que requieres para destacarte en un entorno empresarial cada vez más desafiante.'
}

export default function RazonDeSerPage () {
  return (
    <>
      {/* <section className='mt-spacing-7'>
        <div className='container'>
          <div className='pt-spacing-9'>
            <div className='cols-container pt-spacing-3'>
              <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
                <h1 className='f-display-2 md:pr-9 lg:pr-11'>
                  Razón de ser
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
      </section> */}
      <section className='mt-spacing-9'>
        <div className='container'>
          <div className='border-t'>
            <div className='cols-container pt-spacing-3'>
              <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
                <h1 className='f-heading-1 font-serif md:pr-9 lg:pr-11'>
                  {history.title}
                </h1>
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
