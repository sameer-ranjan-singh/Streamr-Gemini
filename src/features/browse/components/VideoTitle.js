import React from 'react'

const VideoTitle = ({title, overview,release_date,original_language}) => {
  return (
    // <div className='p-12 h-full opacity-55 bg-purple-900 absolute'>
    // <div className='w-screen aspect-video px-24 pt-[20%] absolute text-white bg-gradient-to-r from-black '>
    <div className='h-full w-screen aspect-video px-24 pt-[15%] absolute text-white bg-gradient-to-r from-black '>
      <h1 className='text-5xl font-extrabold '>{title}</h1>
      <p className='w-1/4 text-sm font-semibold my-4 '>{overview}</p>
      <div className='flex gap-4'> 
        <button className ='font-bold px-8 py-2 text bg-yellow-400 hover:bg-yellow-500 border-none shadow-lg hover:text-purple-900 text-black rounded-md'>Play</button>
        <button className ='font-bold px-8 py-2  bg-white border-none shadow-lg bg-opacity-50  hover:bg-gray-300  hover:text-purple-900 text-black rounded-md'>More Info.</button>
      </div>
    </div>
  )
}

export default VideoTitle