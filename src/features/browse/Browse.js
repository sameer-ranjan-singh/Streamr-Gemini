import React from "react";
import MainComponent from "./components/MainComponent";
import SecondaryComponent from "./components/SecondaryComponent";
import Header from "../header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies"

const Browse = () => {
  const movies = useNowPlayingMovies()

  return (
    <div>
      <Header/>

      <MainComponent></MainComponent>
      <SecondaryComponent></SecondaryComponent>
    </div>
  );
};

export default Browse;

