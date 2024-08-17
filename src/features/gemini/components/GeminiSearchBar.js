import { useDispatch, useSelector } from "react-redux";
import { lang } from "../../../utils/languageConstants";
import { useRef, useState } from "react";
import { model } from "../../../utils/genAI";
import { API_OPTIONS, getMovieByName } from "../../../utils/constants";
import { addGeminiResultMovies } from "../../../store/Slices/geminiSlice";
import Loading from "../../shimmer/Loading";

const GeminiSearchBar = () => {
  const storeLangKey = useSelector((store) => store.appConfig?.lang);
  const dispatch = useDispatch();
  // const movieResults = useSelector((store)=> store.gemini.movieResults)
  const userText = useRef(null);
  const [loading , setLoading] = useState(false)
  //searc movie from TMDB
  const searchMovieTMDB = async (movie) => {
    const result = await fetch(getMovieByName(movie), API_OPTIONS);
    const json = await result.json();
    return json.results; // This will return a promise !
  };

  const handleGeminiSearch = async () => {
    setLoading(true)
    const userInputText = userText.current.value;
    const prompt =
      "Act as a movie recommendation system and query :" +
      userInputText +
      `.Only give names of 5 movies not anything else as supporting statements like here are 5 movies, as in example given ahead. Example query result : "Bhagam Bhaag,De Dana Dan, Chup Chup Ke, Golmaal, Hera Pheri."`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    if (!text) {
      return <h1>No response found from generative-ai</h1>;
    }
    const geminiMovies = text.split(",");
    console.log(geminiMovies);

    const promiseArrayTMDB = geminiMovies.map((movie) =>
      searchMovieTMDB(movie)
    );
    const promiseResultsTMDB = await Promise.all(promiseArrayTMDB);
    console.log(promiseResultsTMDB);

    dispatch(
      addGeminiResultMovies({
        movieSearched: geminiMovies,
        movieResults: promiseResultsTMDB,
      })
    );
    setLoading(false)
  };

  return (
    <div className="md:pt-[10%] pt-[40%] flex justify-center ">
      <form
        className="w-full md:w-1/2 bg-black bg-opacity-90 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={userText}
          type="text"
          className="py-2 pl-4 ml-2 my-2 col-span-9  outline-none font-semibold text-sm md:text-lg rounded-md capitalize"
          placeholder={lang[storeLangKey].geminiSearchPlaceholder}
        />

        <button
          onClick={handleGeminiSearch}
          className="col-span-3  m-2 capitalize rounded-md text-sm md:text-lg font-bold text-white bg-red-700  hover:bg-red-600"
        >
          {loading === false ? lang[storeLangKey].search : <Loading/> }
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
