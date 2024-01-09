import localFont from 'next/font/local'

export const fontPrimary = localFont({
  src: [
    {
      path: '../../public/fonts/primary/archivo-thin.woff2',
      weight: '100'
    },
    {
      path: '../../public/fonts/primary/archivo-regular.woff2',
      weight: '400'
    },
    {
      path: '../../public/fonts/primary/archivo-medium.woff2',
      weight: '500'
    },
    {
      path: '../../public/fonts/primary/archivo-bold.woff2',
      weight: '700'
    }
  ],
  display: 'swap',
  variable: '--font-primary'
})

export const fontSecondary = localFont({
  src: '../../public/fonts/secondary/signifier-light.woff2',
  display: 'swap',
  variable: '--font-secondary'
})
