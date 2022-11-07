// Styles
import { typographyStyle } from '../../../styles/data-display/Heading.module.css'
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

const Heading = ({ children, space }) => {
  const spaceStyle = space ? spaceConfig[space] : ''
  const headingStyle = `${typographyStyle} ${spaceStyle}`

  return (
    <h2 className={headingStyle}>
      {children}
    </h2>
  )
}

export default Heading
