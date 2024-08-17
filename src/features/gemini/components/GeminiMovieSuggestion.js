import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../../browse/components/MovieList";
import VideoBackground from "../../browse/components/VideoBackground";

const GeminiMovieSuggestion = () => {
  const { movieSearched, movieResults } = useSelector((store) => store.gemini);

  return (
    <div className="m-3  md:m-10 p-3 bg-opacity-90 bg-black text-white shadow-lg">
     {movieResults ? (
      <div className="m-4">
        <VideoBackground/>
      </div>):(null)}
      <div className="overflow-x-auto mx-4 ">
        {movieSearched ? (
          movieSearched.map((nameOfMovie, index) => (
            <div className="custom-scrollbary ">
              <MovieList
                key={nameOfMovie}
                title={nameOfMovie}
                movies={movieResults[index]}
              />
            </div>
          ))
        ) : (
          <h1 className="text-center text-gray-300 font-bold text-2xl">
            Search for your favourite Movie
          </h1>
        )}
      </div>
    </div>
  );
};

export default GeminiMovieSuggestion;
