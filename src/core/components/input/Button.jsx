// Styles
import {
  buttonStyle,
  buttonLargeStyle,
  buttonSmallStyle,
  buttonPrimaryStyle,
  buttonSecondaryStyle
} from '../../../styles/input/Button.module.css'
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

const Button = ({ children, onclick, small, secondary, space }) => {
  const sizeStyle = small ? buttonSmallStyle : buttonLargeStyle
  const themeStyle = secondary ? buttonSecondaryStyle : buttonPrimaryStyle
  const spaceStyle = space ? spaceConfig[space] : ''
  const buttonCustomStyle = `${buttonStyle} ${sizeStyle} ${themeStyle} ${spaceStyle}`

  return (
    <button className={buttonCustomStyle} onClick={onclick}>
      {children}
    </button>
  )
}

export default Button
