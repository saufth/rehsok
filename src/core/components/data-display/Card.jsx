// Components
import Image from 'next/image'
// Utils
import blurDataUrl from '../../modules/feedback/utils/shimmer'
// Styles
import {
  layoutStyle,
  imageWrapper,
  imageStyle,
  headingStyle
} from '../../../styles/data-display/Card.module.css'

const imagesPath = '/images/sections/'
const imageExt = '.jpg'

const Card = ({ children, src, alt }) => {
  const imagePath = `${imagesPath}${src}${imageExt}`

  return (
    <div className={layoutStyle}>

      <div className={imageWrapper}>
        <Image
          alt={alt}
          src={imagePath}
          width={1920}
          height={1080}
          quality='100'
          placeholder='blur'
          blurDataURL={blurDataUrl(1920, 1080)}
          className={imageStyle}
        />
      </div>

      <div className={headingStyle}>
        {children}
      </div>

    </div>
  )
}

export default Card
