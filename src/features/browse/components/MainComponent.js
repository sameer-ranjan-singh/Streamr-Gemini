import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { addTrailerId } from "../../../store/Slices/movieSlice";

function MainComponent() {
  const dispatch = useDispatch()
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return ;

  const mainMovie = movies[0];

  const { original_title, overview, release_date, original_language, id } = mainMovie;
  
  dispatch(addTrailerId(id))
  
  return (
    <div className="pt-[10%] md:pt-0 bg-black">
      <VideoTitle
        title={original_title}
        overview={overview}
        date={release_date}
        language={original_language}
      />
      <VideoBackground/>
    </div>
  );
}

export default MainComponent;
