import React from 'react'
import { useSelector } from 'react-redux'

function MainComponent() {
  const movies = useSelector((store) => store.movies) 
  if(!movies) return ; 
  // if(movies ==null) return ;  --->both are known as early return 

  const mainMovie = movies[0];

  return (
    <div>MainComponent</div>
  )
}

export default MainComponent