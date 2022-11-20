// Components
import Image from 'next/image'
// Utils
import blurDataUrl from '../../core/modules/feedback/utils/shimmer'
// Styles
import {
  layoutStyle,
  layoutReverseStyle,
  contentStyle,
  contentReverseStyle,
  headingStyle,
  descriptionStyle,
  descriptionReverseStyle,
  textStyle,
  imageContainerStyle,
  imageContainerReverseStyle,
  imageWrapperStyle,
  imageStyle
} from '../../styles/data-display/ImageQuote.module.css'

const ImageQuote = ({ heading, descriptions, src, reverse }) => {
  const imageSrc = `/images/sections/${src}.jpg`

  let layoutReverse = ''
  let contentReverse = ''
  let descriptionReverse = ''
  let imageContainerReverse = ''

  if (reverse) {
    layoutReverse = layoutReverseStyle
    contentReverse = contentReverseStyle
    descriptionReverse = descriptionReverseStyle
    imageContainerReverse = imageContainerReverseStyle
  }
  
  const layoutCustomStyle = `${layoutStyle} ${layoutReverse}`
  const contentCustomStyle = `${contentStyle} ${contentReverse}`
  const descriptionCustomStyle = `${descriptionStyle} ${descriptionReverse}`
  const imageContainerCustomStyle = `${imageContainerStyle} ${imageContainerReverse}`

  return (
    <div className={layoutCustomStyle}>

      <div className={contentCustomStyle}>
        <h2 className={headingStyle}>
          {heading}
        </h2>
        <div className={descriptionCustomStyle}>
          {descriptions.map((description, index) => (
            <p className={textStyle} key={index}>
              {description}
            </p>
          ))}
        </div>
      </div>

      <div className={imageContainerCustomStyle}>
        <div className={imageWrapperStyle}>
          <Image
            alt={heading}
            src={imageSrc}
            width={1920}
            height={1080}
            quality='100'
            placeholder='blur'
            blurDataURL={blurDataUrl}
            className={imageStyle}
          />
        </div>
      </div>

    </div>
  )
}

export default ImageQuote
