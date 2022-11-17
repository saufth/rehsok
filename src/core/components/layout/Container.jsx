// Styles
import {
  layoutStyle,
  fullHeightStyle,
  gapYStyle,
  flexCenterStartStyle,
  flexCenterStyle,
  flexCenterEndStyle,
  flexRowCenterStartStyle,
  flexRowCenterStyle,
  flexRowCenterEndStyle,
  relativeStyle
} from '../../../styles/layout/Container.module.css'

const alignmentStyles = {
  start: flexCenterStartStyle,
  center: flexCenterStyle,
  end: flexCenterEndStyle,
  'row-start': flexRowCenterStartStyle,
  'row-center': flexRowCenterStyle,
  'row-end': flexRowCenterEndStyle
}

const Container = (
  {
    children,
    auto,
    fullHeight,
    alignment,
    gapY,
    relative
  }
) => {
  const autoStyle = auto ? layoutStyle : ''
  const heightStyle = fullHeight ? fullHeightStyle : ''
  const spacingStyle = gapY ? gapYStyle : ''
  const alignmentStyle = alignment ? alignmentStyles[alignment] : ''
  const relativeLayoutStyle = relative ? relativeStyle : ''
  const containerStyle = `${autoStyle} ${heightStyle} ${spacingStyle} ${alignmentStyle} ${relativeLayoutStyle}`

  return (
    <div className={containerStyle}>
      {children}
    </div>
  )
}

export default Container
