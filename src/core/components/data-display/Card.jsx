// Styles
import {
  layoutStyle,
  imageStyle,
  headingStyle
} from '../../../styles/data-display/Card.module.css'

const imagesPath = '/images/sections/'
const imageExt = '.jpg'

const Card = ({ children, imageSrc }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imagesPath}${imageSrc}${imageExt})`
  }

  return (
    <div className={layoutStyle}>

      <div className={imageStyle} style={backgroundImageStyle}></div>

      <div className={headingStyle}>
        {children}
      </div>

    </div>
  )
}

export default Card
