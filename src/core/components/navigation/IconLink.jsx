// Components
import Anchor from './Anchor'
// Styles
import {
  dropShadowStyle,
  iconStyle,
  textStyle,
  wrapperStyle
} from '../../../styles/navigation/IconLink.module.css'

const iconsPath = '/images/icons/'
const iconsExt = '.svg'

const IconLink = (
  {
    text,
    icon,
    href = '/',
    target,
    shadow
  }
) => {
  const iconPath = `${iconsPath}${icon}${iconsExt}`

  const shadowStyle = shadow ? dropShadowStyle : ''
  const iconShadowStyle = `${iconStyle} ${shadowStyle}`
  const textShadowStyle = `${textStyle} ${shadowStyle}`

  return (
    <Anchor target={target} href={href}>
      <span className={wrapperStyle}>
        <img src={iconPath} className={iconShadowStyle} />
        <span className={textShadowStyle}>
          {text}
        </span>
      </span>
    </Anchor>
  )
}

export default IconLink
