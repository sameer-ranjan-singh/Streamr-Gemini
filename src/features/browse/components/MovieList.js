import React from "react";
import MovieCard from "./MovieCard";
import CardShimmer from "../../shimmer/CardShimmer";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-10 ">
      <h1 className="my-2 font-bold text-xl">{title + " >>"} </h1>
      <div className="flex custom-scrollbar">
        <div className="flex">
          {movies.length != 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))
          ) : (
            movies.map((movie) => (
              <CardShimmer key={Math.random()} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
