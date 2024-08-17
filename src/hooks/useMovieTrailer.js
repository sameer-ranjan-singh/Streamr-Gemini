import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, getMovieTrailer_URL } from "../utils/constants";
import { addTrailerVideo } from "../store/Slices/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const storeTrailerId = useSelector((store)=>store.movies?.trailerId )

  const getMovieTrailer = async () => {
    const data = await fetch( getMovieTrailer_URL(storeTrailerId), API_OPTIONS );
    const jsonData = await data.json();
    const filterData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, [storeTrailerId]);

};

export default useMovieTrailer;
