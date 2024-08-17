import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className='bg-black text-white pb-10'>
      <div className='-mt-2 m-3 md:-mt-56 relative z-20  md:pl-14 '>
      {
        movies.nowPlayingMovies && <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      }
      {
        movies.popularMovies && <MovieList title={"Popular"} movies ={movies.popularMovies}/>
      }
      {
        movies.topRatedMovies && <MovieList title={"Top Rated"} movies ={movies.topRatedMovies}/>
      }
      {
        movies.upcomingMovies && <MovieList title={"Upcoming"} movies ={movies.upcomingMovies}/>
      }
      </div>
   </div>
  )
}

export default SecondaryComponent