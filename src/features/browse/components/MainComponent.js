import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

function MainComponent() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies) 
  if(!movies) return <h1 className='text-center'>{movies}</h1>  
  // if(movies == null) return ;  ---> both are known as early return 

  const mainMovie = movies.results[0];
  // console.log(mainMovie)

  const {original_title, overview,release_date, original_language,id} = mainMovie

  return (
    <div>
      <VideoTitle title ={original_title} overview= {overview} date ={release_date} language={original_language}/>
      <VideoBackground movieId ={id}></VideoBackground>
    </div>
  )
}

export default MainComponent
