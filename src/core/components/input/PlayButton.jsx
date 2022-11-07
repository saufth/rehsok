// Styles
import {
  wrapperStyle,
  cercleStyle,
  iconStyle,
  textStyle
} from '../../../styles/input/PlayButton.module.css'

const PlayButton = () => {
  return (
    <button onClick={() => alert('Playing video!')}>
      <span className={wrapperStyle}>
        <span className={cercleStyle}>
          <img
            className={iconStyle}
            src='/images/icons/play.svg'
            alt='Play video'
          />
        </span>
        <span className={textStyle}>Ver video</span>
      </span>
    </button>
  )
}

export default PlayButton
