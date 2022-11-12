// Styles
import {
  typographyStyle,
  centerStyle,
  secondaryStyle
} from '../../../styles/data-display/Heading.module.css'
import { 
  spaceTopXS,
  spaceTopSM,
  spaceTopMD,
  spaceTopLG,
  spaceTopXL
} from '../../../styles/spacing/Spacing.module.css'

const spaceConfig = {
  'top-xs': spaceTopXS,
  'top-sm': spaceTopSM,
  'top-md': spaceTopMD,
  'top-lg': spaceTopLG,
  'top-xl': spaceTopXL
}

const Heading = ({ children, center, space, secondary }) => {
  const centerTextStyle = center ? centerStyle : ''
  const spaceStyle = space ? spaceConfig[space] : ''
  const whiteThemeStyle = secondary ? secondaryStyle : ''
  const headingStyle = `${typographyStyle} ${centerTextStyle} ${spaceStyle} ${whiteThemeStyle}`

  return (
    <h1 className={headingStyle}>
      {children}
    </h1>
  )
}

export default Heading
