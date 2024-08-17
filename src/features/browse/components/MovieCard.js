import React, { useEffect } from 'react'
import { IMG_CDN_URL } from '../../../utils/constants'
import { useDispatch,  } from 'react-redux'
import { addTrailerId } from '../../../store/Slices/movieSlice'

const MovieCard = ({poster_path, id}) => {
  const dispatch = useDispatch()
  
  const handlePosterClick = () => {
    dispatch(addTrailerId(id))
  }

  if(!poster_path) return null

  return (
    <div className='mr-4 w-24 md:w-40' onClick={handlePosterClick}>
      <img
      className='hover:w-[90px] md:hover:w-[156px] active:w-24 md:active:w-[156px] rounded-2xl'
      alt='movie-poster'
      src={IMG_CDN_URL + poster_path}
    />
    </div>
 )
}

export default MovieCard