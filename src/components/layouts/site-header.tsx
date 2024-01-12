'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import {
  useMotionValueEvent,
  useScroll
} from 'framer-motion'
import { cn } from '@/lib/utils'
import { contactEmail, siteConfig, siteNav } from '@/config/site'

const aboutLink = siteNav.find(({ title }) => title === 'Nuestra cultura')!
const contactLink = siteNav.find(({ title }) => title === 'Contáctanos')!

export default function SiteHeader () {
  const { scrollY } = useScroll()
  const [isOnTop, setIsOnTop] = React.useState(true)
  const [isOpen, setIsOpen] = React.useState(false)

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsOnTop(latestScrollY < 1)
  })

  return (
    <>
      <header
        className={cn(
          'w-full fixed top-0 left-0 z-30 bg-background transition-colors duration-300',
          isOnTop && 'bg-transparent'
        )}
      >
        <nav
          className='relative'
          aria-label='Emah Directory'
        >
          <div className='container py-4 lg:py-6'>
            <div
              className='w-full h-full flex justify-between items-center'
            >
              <div className='h-8 lg:h-9'>
                <Link href='/'>
                  <Icons.Logotype className='w-auto h-full fill-primary' />
                  <span className='sr-only'>{siteConfig.name} home</span>
                </Link>
              </div>
              <div className='hidden lg:flex items-center gap-x-1 lg:gap-x-3'>
                <Button variant='link' size='lg' asChild>
                  <Link className='flex items-center gap-x-1' href={aboutLink.href}>
                    {aboutLink?.title || 'not-found'}
                    <Icons.ArrowUpRight
                      className='w-4 lg:w-4.5 h-auto stroke-white dark:stroke-white'
                    />
                  </Link>
                </Button>
                <Button variant='outline' size='lg' asChild>
                  <Link
                    className='group flex items-center gap-x-1 text-primary hover:text-primary-foreground'
                    href={contactLink.href}
                  >
                    {contactLink?.title || 'not-found'}
                    <Icons.ArrowUpRight
                      className='w-4 sm:w-4.5 h-auto stroke-primary group-hover:stroke-primary-foreground'
                    />
                  </Link>
                </Button>
              </div>
              <div className='block lg:hidden'>
                {!isOpen
                  ? (
                    <Button onClick={() => setIsOpen(true)} variant='link' size='icon'>
                      Menú
                    </Button>
                    )
                  : (
                    <Button onClick={() => setIsOpen(false)} variant='link' size='icon'>
                      Cerrar
                    </Button>
                    )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className={cn('w-full h-0 bg-black fixed flex flex-col justify-between top-0 left-0 z-20 overflow-hidden transition-[height] duration-300', isOpen && 'h-[100dvh]')}>
        <nav className='container mt-spacing-9'>
          {siteConfig.mainNav.map((navItem, key) => (
            <Button className='rounded-none w-full px-0 border-b first:border-t' variant='link' size='lg' asChild key={key}>
              <Link className='flex justify-between' href={navItem.href} onClick={() => setIsOpen(false)}>
                {navItem?.title || 'not-found'}
                <Icons.ArrowRight
                  className='w-4 lg:w-4.5 h-auto stroke-white dark:stroke-white'
                />
              </Link>
            </Button>
          ))}
        </nav>
        <div className='container pb-8'>
          <div className='text-xs sm:text-sm text-muted'>
            Correo electrónico
          </div>
          <Link className='text-base xl:text-lg' href={`mailto:${contactEmail}`}>
            {contactEmail}
          </Link>
        </div>
      </div>
    </>
  )
}
