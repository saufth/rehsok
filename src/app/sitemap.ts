import { absoluteUrl } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { type MetadataRoute } from 'next'

export default function Sitemap () : MetadataRoute.Sitemap {
  const mainNav = siteConfig.mainNav.map((navItem) => ({
    url: absoluteUrl(navItem.href),
    lastModified: new Date().toISOString()
  }))

  return [
    ...mainNav
  ]
}
