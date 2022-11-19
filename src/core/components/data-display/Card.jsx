// Components
import Image from 'next/image'
// Utils
import blurDataUrl from '../../modules/feedback/utils/shimmer'
// Styles
import {
  layoutStyle,
  imageStyle,
  headingStyle
} from '../../../styles/data-display/Card.module.css'

const imagesPath = '/images/sections/'
const imageExt = '.jpg'

const Card = ({ children, src, alt }) => {
  const imagePath = `${imagesPath}${src}${imageExt}`

  return (
    <div className={layoutStyle}>

      <div className={imageStyle}>
        <Image
          alt={alt}
          src={imagePath}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          quality='100'
          placeholder='blur'
          blurDataURL={blurDataUrl}
        />
      </div>

      <div className={headingStyle}>
        {children}
      </div>

    </div>
  )
}

export default Card
