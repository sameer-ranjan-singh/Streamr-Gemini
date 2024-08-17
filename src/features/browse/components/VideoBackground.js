import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../../hooks/useMovieTrailer";

const VideoBackground = () => {
  useMovieTrailer()
  const trailerFromStore = useSelector((store)=> store.movies?.movieTrailer) 

  return (
    <div>
      <iframe
       className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerFromStore?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
