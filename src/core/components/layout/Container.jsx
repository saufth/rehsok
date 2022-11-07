// Styles
import {
  layoutStyle,
  fullHeightStyle,
  gapYStyle,
  flexCenterStartStyle,
  flexCenterStyle,
  flexCenterEndStyle
} from '../../../styles/layout/Container.module.css'

const alignmentStyles = {
  start: flexCenterStartStyle,
  center: flexCenterStyle,
  end: flexCenterEndStyle
}

const Container = (
  {
    children,
    auto,
    fullHeight,
    alignment,
    gapY
  }
) => {
  const autoStyle = auto ? layoutStyle : ''
  const heightStyle = fullHeight ? fullHeightStyle : ''
  const spacingStyle = gapY ? gapYStyle : ''
  const alignmentStyle = alignment ? alignmentStyles[alignment] : ''
  const containerStyle = `${autoStyle} ${heightStyle} ${spacingStyle} ${alignmentStyle}`

  return (
    <div className={containerStyle}>
      {children}
    </div>
  )
}

export default Container
