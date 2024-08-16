import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, getMovieTrailer_URL } from "../utils/constants";
import { addTrailerVideo } from "../store/Slices/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store)=>store.movies.movieTrailer )

  const getMovieTrailer = async () => {
    const data = await fetch( getMovieTrailer_URL(movieId), API_OPTIONS );
    const jsonData = await data.json();
    // console.log(jsonData);
    const filterData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo &&  getMovieTrailer();
  }, []);

};

export default useMovieTrailer;
