// Components
import NextLink from 'next/link'

const Link = ({ children, href = '/', target }) => {
  return (
    <NextLink href={href} target={target}>
      {children}
    </NextLink>
  )
}

export default Link
