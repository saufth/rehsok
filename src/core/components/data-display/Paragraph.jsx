// Styles
import { 
  textColorStyle,
  textLargeStyle,
  textSmallStyle,
  textCenterStyle
 } from '../../../styles/data-display/Paragraph.module.css'
import { 
  spaceTopXS,
  spaceTopSM,
  spaceTopMD,
  spaceTopLG,
  spaceTopXL,
  spaceTop2XL
} from '../../../styles/spacing/Spacing.module.css'

const spaceConfig = {
  'top-xs': spaceTopXS,
  'top-sm': spaceTopSM,
  'top-md': spaceTopMD,
  'top-lg': spaceTopLG,
  'top-xl': spaceTopXL,
  'top-2xl': spaceTop2XL
}

const Paragraph = ({ children, small, center, space }) => {
  const sizeStyle = small ? textSmallStyle : textLargeStyle
  const centerStyle = center ? textCenterStyle : ''
  const spaceStyle = space ? spaceConfig[space] : ''
  const paragraphStyle = `${textColorStyle} ${sizeStyle} ${centerStyle} ${spaceStyle}`

  return (
    <p className={paragraphStyle}>
      {children}
    </p>
  )
}

export default Paragraph
