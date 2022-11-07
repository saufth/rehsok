// Styles
import {
  typographyStyle,
  centerStyle
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

const Heading = ({ children, center, space }) => {
  const centerTextStyle = center ? centerStyle : ''
  const spaceStyle = space ? spaceConfig[space] : ''
  const headingStyle = `${typographyStyle} ${centerTextStyle} ${spaceStyle}`

  return (
    <h1 className={headingStyle}>
      {children}
    </h1>
  )
}

export default Heading
