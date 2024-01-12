import localFont from 'next/font/local'

export const fontSans = localFont({
  src: [
    {
      path: '../../public/fonts/archivo-thin.woff2',
      weight: '100'
    },
    {
      path: '../../public/fonts/archivo-light.woff2',
      weight: '300'
    },
    {
      path: '../../public/fonts/archivo-regular.woff2',
      weight: '400'
    },
    {
      path: '../../public/fonts/archivo-medium.woff2',
      weight: '500'
    },
    {
      path: '../../public/fonts/archivo-bold.woff2',
      weight: '700'
    }
  ],
  display: 'swap',
  variable: '--font-sans'
})

export const fontSerif = localFont({
  src: '../../public/fonts/signifier-light.woff2',
  display: 'swap',
  variable: '--font-serif'
})
