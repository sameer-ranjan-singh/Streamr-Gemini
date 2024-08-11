import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../store/Slices/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    const filterData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

};

export default useMovieTrailer;
