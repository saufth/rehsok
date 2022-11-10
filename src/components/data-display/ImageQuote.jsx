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
  imageWrapperStyle
} from '../../styles/data-display/ImageQuote.module.css'

const ImageQuote = ({ heading, descriptions, src, reverse }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(/images/sections/${src}.jpg)`
  }

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
        <p className={headingStyle}>
          {heading}
        </p>
        <div className={descriptionCustomStyle}>
          {descriptions.map((description, index) => {
            return (
              <p className={textStyle} key={index}>
                {description}
              </p>
            )
          })}
        </div>
      </div>

      <div className={imageContainerCustomStyle}>
        <div className={imageWrapperStyle} style={backgroundImageStyle}></div>
      </div>

    </div>
  )
}

export default ImageQuote
