import React from "react";
import MainComponent from "./components/MainComponent";
import SecondaryComponent from "./components/SecondaryComponent";
import Header from "../header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header className="z-10"/>

      <MainComponent></MainComponent>
      <SecondaryComponent></SecondaryComponent>
    </div>
  );
};

export default Browse;

