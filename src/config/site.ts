import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type MainNavItem } from '@/types'

interface SiteConfig {
  name: string,
  description: string,
  slogan?: string,
  url: URL | string,
  author: Author,
  mainNav: MainNavItem[]
}

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const siteNav = [
  {
    title: 'Nuestra cultura',
    href: '/cultura'
  },
  {
    title: 'Nuestra historia',
    href: '/nuestra-historia'
  },
  {
    title: 'Contáctanos',
    href: '/contacto'
  }
]

export const domain = 'rehsok.com'
export const contactEmail = `contacto@${domain}`

export const siteConfig: SiteConfig = {
  name: 'Rehsok',
  description: 'Creamos posibilidades para empresas orientadas a desarrollar un legado de progreso generacional.',
  slogan: 'Creamos posibilidades',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Página principal',
      href: '/'
    },
    ...siteNav
  ]
}
