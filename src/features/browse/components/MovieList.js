import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-10">
      <h1 className="my-2 font-bold text-xl">{title + " >>"} </h1>
      <div className="flex custom-scrollbar">
        <div className="flex">
          {movies ? (
            movies.results.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))
          ) : (
            <h1>No movie List Found !!</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
