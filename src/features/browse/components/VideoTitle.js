import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const trailerFromStore = useSelector((store)=> store.movies?.movieTrailer) 
  return (
    <div className="h-full w-screen aspect-video pl-3 md:pl-14 pt-[32%] md:pt-[15%] absolute text-white ">
      <h1 className=" text-md font-bold md:text-5xl md:font-extrabold text-white text-opacity-70">
        {trailerFromStore ? trailerFromStore.name : title}
      </h1>
      <p className="hidden md:inline-block w-1/4 text-sm font-semibold my-4 ">
        {overview}
      </p>
      <div className="flex gap-2 md:gap-4 my-2">
        <button className="font-bold px-4 py-1 text-sm md:font-extrabold md:px-8 md:py-2  bg-yellow-400 hover:bg-yellow-500 border-none shadow-lg hover:text-purple-900 text-black rounded-md">
          Play
        </button>
        <button className="hidden md:inline-block font-bold px-4 py-1 text-sm md:font-extrabold  md:px-8 md:py-2  bg-white border-none shadow-lg bg-opacity-50  hover:bg-gray-300  hover:text-purple-900 text-black rounded-md">
          More Info.
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
