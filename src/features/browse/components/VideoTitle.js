import React from 'react'

const VideoTitle = ({title, overview,release_date,original_language}) => {
  return (
    <div className='p-12 bg-purple-900'>
      <h1 className='text-5xl font-extrabold text-white '>{title}</h1>
      <p className='w-2/4 text-sm font-semibold my-4 text-gray-300'>{overview}</p>
      <div className='flex gap-4'>
        <button className ='font-bold px-4 py-1 text bg-yellow-400 hover:bg-yellow-500 border-none shadow-lg hover:text-purple-900 text-black rounded-md'>Play</button>
        <button className ='font-bold px-4 py-1  bg-white border-none shadow-lg bg-opacity-50  hover:bg-gray-300  hover:text-purple-900 text-black rounded-md'>More Info.</button>
      </div>
    </div>
  )
}

export default VideoTitle