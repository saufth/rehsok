// Components
import Image from 'next/image'
// Hooks
import { useEffect, useRef } from 'react'
// Styles
import {
  wrapperStyle,
  cercleStyle,
  iconStyle,
  textStyle,
  videoContainerStyle
} from '../../styles/input/PlayButton.module.css'

const PlayButton = () => {
  const videoRef = useRef()
  const playVideoRef = useRef()
  const videoContainerRef = useRef()

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
    videoContainerRef.current.style.display = 'block'
	}
  
  const handleFullScreenChange = () => {
    const videoNode = videoRef.current
    const isFullscreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen

    if (!isFullscreen) {
      videoNode.pause()
      videoContainerRef.current.style.display = 'none'
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
            <div className={iconStyle}>
              <Image
                alt='Play video'
                src='/images/icons/play.svg'
                layout='responsive'
                width={12}
                height={12}
              />
            </div>
          </span>
          <span className={textStyle}>VER VIDEO</span>
        </span>
      </button>

      <div ref={videoContainerRef} className={videoContainerStyle}>
        <video
          ref={videoRef}
          controls
          disablePictureInPicture
          controlsList='nodownload noplaybackrate'
          onContextMenu={(event) => event.preventDefault()}
        >
          <source src='/video/presentation.mp4' type='video/mp4' />
        </video>
      </div>

    </>
  )
}

export default PlayButton
