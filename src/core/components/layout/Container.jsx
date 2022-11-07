import {
  autoStyle,
  fullHeightStyle,
  gapYStyle,
  perspectiveStyle,
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
    gapY,
    perspective
  }
) => {
  const spacingStyle = auto ? autoStyle : ''
  const heightStyle = fullHeight ? fullHeightStyle : ''
  const paddingStyle = gapY ? gapYStyle : ''
  const alignmentStyle = alignment ? alignmentStyles[alignment] : ''
  const layoutStyle = perspective ? perspectiveStyle : ''
  const containerStyle = `${spacingStyle} ${heightStyle} ${paddingStyle} ${alignmentStyle} ${layoutStyle}`

  return (
    <div className={containerStyle}>
      {children}
    </div>
  )
}

export default Container
