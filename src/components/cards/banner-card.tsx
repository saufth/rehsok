import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components//ui/card'
import { Icons } from '@/components/icons'
import { type Item } from '@/types'

interface AboutBannerProps {
  banner: Item & {
    href: string
  }
}

export function Banner ({ banner }: AboutBannerProps) {
  return (
    <Card
      as='article'
      className='container px-8 py-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-y-8 sm:gap-y-12 lg:gap-x-12 space-y-0 sm:space-y-0'
    >
      <CardContent className='lg:w-1/2'>
        <div className='aspect-[308/173] overflow-hidden rounded-xl bg-primary relative'>
          <Image
            src={banner.image.src}
            alt={banner.image.alt}
            className='object-cover'
            sizes='(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw'
            fill
            loading='lazy'
          />
        </div>
      </CardContent>
      <CardHeader className='lg:w-1/2 lg:px-16'>
        <div className='space-y-6 sm:space-y-7 lg:space-y-8'>
          <div className='space-y-3 sm:space-y-4 lg:space-y-5'>
            <div className='space-y-1'>
              {banner.label && <Badge>{banner.label}</Badge>}
              <CardTitle>
                <Balancer className='text-h3 leading-snug text-card-foreground'>
                  {banner.title}
                </Balancer>
              </CardTitle>
            </div>
            <CardDescription>
              <Balancer className='text-p1 text-card-foreground'>
                {banner.description}
              </Balancer>
            </CardDescription>
          </div>
          <div>
            <Button size='full' asChild>
              <Link
                className='group flex items-center gap-x-1'
                href={banner.href}
              >
                Saber más
                <Icons.ArrowUpRight
                  className='h-3.5 sm:h-4 w-auto stroke-primary-foreground group-hover:stroke-accent-foreground transition-colors duration-500'
                />
              </Link>
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
