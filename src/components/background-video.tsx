'use client'
import { useState, useRef, type MouseEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Icons } from './icons'

interface BackgroundVideoProps {
  src: string
}

export default function BackgroundVideo ({ src }: BackgroundVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const preventContextMenu = (event: MouseEvent<HTMLVideoElement>) => event.preventDefault()

  const handleVideo = () => {
    const videoNode = videoRef.current

    if (videoNode) {
      setIsPlaying(!videoNode.paused)
      videoNode.paused ? videoNode.play() : videoNode.pause()
    }
  }

  return (
    <div className='absolute inset-0 overflow-hidden z-0'>
      <video
        className='w-full h-full object-cover relative'
        width={1920}
        height={1080}
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList='nodownload noplaybackrate'
        onContextMenu={preventContextMenu}
        ref={videoRef}
      >
        <source src={src} type='video/mp4' />
      </video>
      <Button
        className='group absolute bottom-4 xl:bottom-5 right-4 xl:right-5 z-20 bg-black hover:bg-white'
        onClick={handleVideo}
      >
        {isPlaying
          ? (
            <span className='flex items-center gap-x-3'>
              <Icons.Play className='fill-white w-4 xl:w-4 h-auto group-hover:fill-black' />
              <span className='hidden xl:block xl:text-lg text-white group-hover:text-black'>
                Reproducir video
              </span>
              <span className='sr-only xl:hidden'>Reproducir video</span>
            </span>
            )
          : (
            <span className='flex items-center gap-x-3'>
              <Icons.Pause className='fill-white w-4 xl:w-4 h-auto group-hover:fill-black' />
              <span className='hidden xl:block xl:text-lg text-white group-hover:text-black'>
                Pausar video
              </span>
              <span className='sr-only xl:hidden'>Pausar video</span>
            </span>
            )}
      </Button>
      <div className='absolute inset-0 bg-black/60 z-10' />
    </div>
  )
}
