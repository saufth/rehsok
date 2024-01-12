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
import { siteConfig, siteNav } from '@/config/site'

const aboutLink = siteNav.find(({ title }) => title === 'Nuestra cultura')!
const contactLink = siteNav.find(({ title }) => title === 'Contáctanos')!

export default function SiteHeader () {
  const { scrollY } = useScroll()
  const [isOnTop, setIsOnTop] = React.useState(true)

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
                <Button variant='link' size='icon'>
                  Menú
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
