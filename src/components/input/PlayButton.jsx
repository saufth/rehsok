// Components
import { useEffect, useRef } from 'react'
// Styles
import {
  wrapperStyle,
  cercleStyle,
  iconStyle,
  textStyle
} from '../../styles/input/PlayButton.module.css'

const PlayButton = () => {
  const videoRef = useRef()
  const playVideoRef = useRef()
  const videoWrapperRef = useRef()

  const handlePlayVideo = () => {
    const videoNode = videoRef.current

    if (videoNode.requestFullscreen)
      videoNode.requestFullscreen()
		else if (videoNode.mozRequestFullScreen)
			videoNode.mozRequestFullScreen()
		else if (videoNode.webkitRequestFullscreen)
			videoNode.webkitRequestFullscreen()
		else if (videoNode.msRequestFullscreen)
			videoNode.msRequestFullscreen()

    videoNode.play()
    videoWrapperRef.current.classList.remove('hidden')
	}
  
  const handleFullScreenChange = () => {
    const videoNode = videoRef.current
    const isFullscreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen

    if (!isFullscreen) {
      videoNode.pause()
      videoWrapperRef.current.classList.add('hidden')
    }
  }

  const handleVideoEnded = () => {
    const videoNode = videoRef.current

    if (videoNode.exitFullscreen) 
        videoNode.exitFullscreen()
    else if (videoNode.webkitExitFullscreen)
        videoNode.webkitExitFullscreen()
    else if (videoNode.mozCancelFullScreen)
        videoNode.mozCancelFullScreen()
    else if (videoNode.msExitFullscreen)
        videoNode.msExitFullscreen()
  }
  
  useEffect(() => {
    const playVideoNode = playVideoRef.current
    const videoNode = videoRef.current

    playVideoNode.addEventListener('click', handlePlayVideo)
    videoNode.addEventListener('fullscreenchange', handleFullScreenChange)
    videoNode.addEventListener('ended', handleVideoEnded)
    
    if (playVideoNode) {
      return () => {
        playVideoNode.removeEventListener('click', handlePlayVideo)
        videoNode.removeEventListener('fullscreenchange', handleFullScreenChange)
        videoNode.removeEventListener('ended', handleVideoEnded)
      }
    }
  }, [])

  return (
    <>
      <button ref={playVideoRef}>
        <span className={wrapperStyle}>
          <span className={cercleStyle}>
            <img
              className={iconStyle}
              src='/images/icons/play.svg'
              alt='Play video'
            />
          </span>
          <span className={textStyle}>VER VIDEO</span>
        </span>
      </button>
      <div className='w-screen h-screen z-50 absolute top-0 left-0 bg-black hidden' ref={videoWrapperRef}>
        <video
          controls
          disablePictureInPicture
          controlsList='nodownload noplaybackrate'
          onContextMenu={(event) => event.preventDefault()}
          ref={videoRef}
        >
          <source src="/video/presentation.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default PlayButton
