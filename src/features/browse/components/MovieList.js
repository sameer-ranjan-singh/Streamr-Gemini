import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-14">
      <h1 className="my-2 font-bold text-sm md:text-lg bg-red-600 w-fit px-1 ">{title + " >>"} </h1>
      <div className="flex custom-scrollbar ">
        <div className="flex">
          {movies ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))
          ) : (
           <h1 >No Movie Found on this Platform</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
