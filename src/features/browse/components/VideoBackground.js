import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerFromStore = useSelector((store)=> store.movies?.movieTrailer) 
  useMovieTrailer(movieId)

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerFromStore?.key}
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        // allowfullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
