const shimmer =
  `<svg
    version='1.1'
    width='24'
    height='24'
    xmlns='http://www.w3.org/2000/svg'
    xmlns:xlink='http://www.w3.org/1999/xlink'
  >
    <defs>
      <linearGradient id='g'>
        <stop stop-color='#333' offset='20%' />
        <stop stop-color='#222' offset='50%' />
        <stop stop-color='#333' offset='70%' />
      </linearGradient>
    </defs>
    <rect width='24' height='24' fill='#163A62' />
    <rect id='r' width='24' height='24' fill='url(#g)' />
    <animate
      xlink:href='#r'
      attributeName='x'
      from='-24'
      to='24'
      dur='1s'
      repeatCount='indefinite'
    />
  </svg>`

const toBase64 = () =>
  typeof window === 'undefined'
    ? Buffer.from(shimmer).toString('base64')
    : window.btoa(shimmer)

const blurDataUrl = `data:image/svg+xml;base64,${toBase64()}`

export default blurDataUrl
