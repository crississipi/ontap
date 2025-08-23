import React from 'react'
import Image from 'next/image'

const VideoTutorial = () => {
  return (
    <div className='h-auto w-full flex flex-col items-center gap-10 py-20 relative'>
        <Image
            height={1000}
            width={1000}
            alt='ontap creatives cards'
            src='/images/video-tutorial-bg.png'
            className='h-full w-full object-cover object-center absolute top-1/2 left-1/2 -translate-1/2'
        />
        <h2 className='w-4/5 text-center text-3xl md:text-5xl z-20 text-white font-bold md:w-1/2 md:leading-12'>Watch the Video Tutorial on How to Use OnTap Business Card</h2>
        <div className='w-full h-80 bg-gray-400 z-20 md:w-1/2 md:h-120 md:rounded-md'>

        </div>
    </div>
  )
}

export default VideoTutorial