import { absoluteUrl } from '@/lib/utils'
import { type MetadataRoute } from 'next'

export default function Robots () : MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: absoluteUrl('/sitemap.xml')
  }
}
