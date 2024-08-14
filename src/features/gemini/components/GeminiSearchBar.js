import { useDispatch, useSelector } from "react-redux";
import { lang } from "../../../utils/languageConstants";
import { useRef } from "react";
import { model } from "../../../utils/genAI";
import { API_OPTIONS, getMovieByName, } from "../../../utils/constants";
import { addGeminiResultMovies } from "../../../store/Slices/geminiSlice";

const GeminiSearchBar = () => {
  const storeLangKey = useSelector((store) => store.appConfig?.lang);
  const dispatch = useDispatch()
  // console.log(storeLangKey);

  const userText = useRef(null);

  //searc movie from TMDB
  const searchMovieTMDB = async (movie) => {
    const result = await fetch(getMovieByName(movie) , API_OPTIONS)
    const json = await result.json()
    // console.log(json)
    return json.results // This will return a promise ** !!
  }

  const handleGeminiSearch = async () => {
    const userInputText = userText.current.value;
    const prompt =
      "Act as a movie recommendation system and query :" +
      userInputText +
      `.Only give names of 5 movies not anything else as supporting statements like here are 5 movies, as in example given ahead. Example query result : "Bhagam Bhaag,De Dana Dan, Chup Chup Ke, Golmaal, Hera Pheri."`;
  
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    // console.log(text);
    
    if(!text){
      //Todo : handle error
    }
    const geminiMovies = text.split(",") 
    // console.log(geminiMovies);
    
    const promiseArrayTMDB = geminiMovies.map((movie)=> searchMovieTMDB(movie))
    const promiseResultsTMDB = await Promise.all(promiseArrayTMDB)
    // console.log(promiseResultsTMDB);

    dispatch(addGeminiResultMovies({movieSearched: geminiMovies , movieResults: promiseResultsTMDB}))
     
    };

  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 rounded-xl bg-black bg-opacity-70 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={userText}
          type="text"
          className="p-4 m-4 col-span-9  outline-none"
          placeholder={lang[storeLangKey].geminiSearchPlaceholder}
        />

        <button
          onClick={handleGeminiSearch}
          className="col-span-3  m-4 py-2 px-4 text-2xl font-bold text-white bg-red-700  hover:bg-red-600"
        >
          {lang[storeLangKey].search}
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
