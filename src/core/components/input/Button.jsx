// Styles
import Link from 'next/link'
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

const Button = ({ children, small, secondary, space }) => {
  const sizeStyle = small ? buttonSmallStyle : buttonLargeStyle
  const themeStyle = secondary ? buttonSecondaryStyle : buttonPrimaryStyle
  const spaceStyle = space ? spaceConfig[space] : ''
  const buttonCustomStyle = `${buttonStyle} ${sizeStyle} ${themeStyle} ${spaceStyle}`

  return (
    <Link href='/nosotros#contactanos'>
      <div className={buttonCustomStyle}>
        {children}
      </div>
    </Link>
  )
}

export default Button
