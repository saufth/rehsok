// Components
import Image from 'next/image'
// Styles
import {
  containerStyle,
  logoStyle
} from '../../styles/feedback/Loading.module.css'

const Loading = () => {
  return (
    <div className={containerStyle}>
      <div className={logoStyle}>
        <Image
          alt='Rehsock Consultores'
          src='/images/logos/logomark.svg'
          width={160}
          height={160}
          priority
        />
      </div>
    </div>
  )
}

export default Loading
