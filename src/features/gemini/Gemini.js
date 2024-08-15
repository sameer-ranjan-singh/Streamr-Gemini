import { BG_IMAGE } from "../../utils/constants";
import GeminiMovieSuggestion from "./components/GeminiMovieSuggestion";
import GeminiSearchBar from "./components/GeminiSearchBar";

export const Gemini = () => {
  return (
    <div className="">
      <div className="fixed -z-10">
        <img className="" alt="bg-theme" src={BG_IMAGE} />
      </div>
      <GeminiSearchBar/>
      <GeminiMovieSuggestion/>
    </div>
  );
};

export default Gemini;
