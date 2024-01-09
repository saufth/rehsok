import Image from 'next/image'
import Link from 'next/link'
import { type Metadata } from 'next'
import { Balancer } from 'react-wrap-balancer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import Video from '@/components/background-video'
import { cn } from '@/lib/utils'
import { history, culture } from '@/config/organization'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Conócenos – Más que un proveedor, somos tu aliado estratégico.',
  description: 'Nos dedicamos incansablemente a ofrecerte la agilidad y éxito que requieres para destacarte en un entorno empresarial cada vez más desafiante.'
}

export default function CulturePage () {
  return (
    <>
      <section className='w-full pt-6'>
        <div
          className='container h-full flex flex-col md:flex-row items-center justify-start gap-y-12 md:gap-y-0 md::gap-x-4'
        >
          <div className='w-fit space-y-8 md:space-y-12'>
            <div className='space-y-5 md:space-y-6 text-center md:text-left md:pr-4'>
              <h1>
                <Balancer className='text-h1'>
                  Más que un proveedor, somos tu aliado estratégico
                </Balancer>
              </h1>
              <p>
                <Balancer className='text-p1'>
                  {metadata.description}
                </Balancer>
              </p>
            </div>
            <div className='flex gap-y-4 md:gap-x-8 items-center flex-col md:flex-row'>
              <Button size='full' asChild>
                <Link
                  className='group flex items-center gap-x-1'
                  href='/contacto'
                >
                  Contactanos
                  <Icons.ArrowUpRight
                    className='w-3.5 sm:w-4 h-auto stroke-primary-foreground group-hover:stroke-accent-foreground transition-colors duration-500'
                  />
                </Link>
              </Button>
            </div>
          </div>
          <Video src='/video/about-us-hero.mp4' />
        </div>
      </section>
      <section>
        <div className='container space-y-16 md:space-y-20'>
          <div className='max-w-3xl mx-auto text-center space-y-4>
            <h2>
              <Balancer className='text-h2'>
                {culture.title}
              </Balancer>
            </h2>
            {culture.description && (
              <p>
                <Balancer className='text-p1'>
                  {culture.description}
                </Balancer>
              </p>
            )}
          </div>
          <div className='space-y-16 lg:space-y-20'>
            {culture.items.map((cultureItem, key) => (
              <article key={key}>
                <div className={cn(
                  'flex flex-col lg:flex-row lg:items-center gap-y-8 lg:gap-x-24 px-8 sm:px-14 lg:px-16',
                  (key + 1) % 2 !== 0 && 'lg:flex-row-reverse')}
                >
                  <div className='lg:w-1/2'>
                    <div className='aspect-[308/173] overflow-hidden rounded-xl bg-secondary relative'>
                      <Image
                        src={cultureItem.image}
                        alt={cultureItem.title}
                        className='object-cover'
                        sizes='(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw'
                        fill
                        loading='lazy'
                      />
                    </div>
                  </div>
                  <div className='space-y-1 md:space-y-2 lg:w-1/2 lg:px-16'>
                    {cultureItem.label && <Badge>{cultureItem.label}</Badge>}
                    <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                      <h3>
                        <Balancer className='text-h3'>
                          {cultureItem.title}
                        </Balancer>
                      </h3>
                      <div>
                        {typeof cultureItem.description === 'object'
                          ? (
                            <ul className='space-y-1 list-disc pl-4'>
                              {cultureItem.description.map((paragraph, key) => (
                                <li key={key}>
                                  <p>
                                    <Balancer className='text-p1'>
                                      {paragraph}
                                    </Balancer>
                                  </p>
                                </li>
                              ))}
                            </ul>
                            )
                          : (
                            <p>
                              <Balancer className='text-p1'>
                                {cultureItem.description}
                              </Balancer>
                            </p>
                            )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className='px-6 sm:px-8d'>
        <div className='container space-y-8 sm:space-y-10 lg:space-y-12'>
          <div className='text-center space-y-1'>
            <h2>
              <Balancer className='text-h2'>
                {history.title}
              </Balancer>
            </h2>
            {history.description && (
              <p>
                <Balancer className='text-p2'>
                  {history.description}
                </Balancer>
              </p>
            )}
          </div>
          <div className='max-w-3xl mx-auto space-y-3 sm:space-y-4 text-muted-foreground'>
            {history.items.map((historyItem, key) => (
              <p key={key}>
                <Balancer className='text-p2'>
                  {historyItem}
                </Balancer>
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
