import React from "react";
import MainComponent from "./components/MainComponent";
import SecondaryComponent from "./components/SecondaryComponent";
import Header from "../header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import Gemini from "../gemini/Gemini";

const Browse = () => {
  const showGemini = useSelector((store)=> store.gemini.showGemini)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header/>
      {showGemini ? (
        <Gemini/>
      ):(
      <>
        <MainComponent></MainComponent>
        <SecondaryComponent></SecondaryComponent>
      </>
      )}
    </div>
  );
};

export default Browse;

