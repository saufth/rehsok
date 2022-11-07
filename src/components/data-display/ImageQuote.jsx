// Components
import Image from 'next/Image'
import Button from '../../core/components/input/Button'
// Styles
import {
  layoutStyle,
  layoutReverseStyle,
  contentStyle,
  contentReverseStyle,
  headingStyle,
  headingReverseStyle,
  firstTextStyle,
  secondTextStyle,
  imageContainerStyle,
  imageContainerReverseStyle,
  imageWrapperStyle,
  imageStyle
} from '../../styles/data-display/ImageQuote.module.css'

const ImageQuote = ({ heading, description, src, reverse }) => {
  const imagePath = `/images/sections/purpose/${src}.jpg` 

  let layoutReverse = ''
  let contentReverse = ''
  let headingReverse = ''
  let imageContainerReverse = ''

  if (reverse) {
    layoutReverse = layoutReverseStyle
    contentReverse = contentReverseStyle
    headingReverse = headingReverseStyle
    imageContainerReverse = imageContainerReverseStyle
  }
  
  const layoutCustomStyle = `${layoutStyle} ${layoutReverse}`

  const contentCustomStyle = `${contentStyle} ${contentReverse}`

  const headingCustomStyle = `${headingStyle} ${headingReverse}`
  
  const imageContainerCustomStyle = `${imageContainerStyle} ${imageContainerReverse}`

  return (
    <div className={layoutCustomStyle}>

      <div className={contentCustomStyle}>

        <h2 className={headingCustomStyle}>
          <span className={firstTextStyle}>{firstText}</span>
          <br/>
          <span className={secondTextStyle}>{secondText}</span>
        </h2>

        <Button onclick={() => alert('Now in contact!')}>
          CONTACTANOS
        </Button>

      </div>

      <div className={imageContainerCustomStyle}>
        <div className={imageWrapperStyle}>
          <Image
            className={imageStyle}
            src={imagePath}
            alt={heading}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
      </div>

    </div>
  )
}

export default ImageQuote
