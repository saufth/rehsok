// Components
import Link from 'next/link'
// Hooks
import useRefMagnetic from '../../modules/animation/hooks/useRefMagnetic'
// Styles
import { magnetStyle } from '../../styles/navigation/MagnetAnchor.module.css'

const MagnetAnchor = (
  {
    children,
    href = '/',
    target,
    transition = 4
  }
) => {
  const magnetRef = useRefMagnetic({ transition: transition })

  return (
    <Link href={href} target={target}>
      <div className={magnetStyle} ref={magnetRef}>
        {children}
      </div>
    </Link>
  )
}

export default MagnetAnchor
