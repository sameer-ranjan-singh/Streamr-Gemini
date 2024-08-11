import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className='bg-black text-white'>
      <div className='-mt-56 relative z-20 pl-14'>
      {
        movies && <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      }
      {
        movies && <MovieList title={"Popular"} movies ={movies.popularMovies}/>
      }
      {
        movies && <MovieList title={"Top Rated"} movies ={movies.topRatedMovies}/>
      }
      {
        movies && <MovieList title={"Upcoming"} movies ={movies.upcomingMovies}/>
      }
      </div>
   </div>
  )
}

export default SecondaryComponent