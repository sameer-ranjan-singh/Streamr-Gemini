import { useDispatch } from "react-redux";
import { BG_IMAGE } from "../../utils/constants";
import GeminiMovieSuggestion from "./components/GeminiMovieSuggestion";
import GeminiSearchBar from "./components/GeminiSearchBar";
import { clearGeminiStore } from "../../store/Slices/geminiSlice";

export const Gemini = () => {
  const dispatch = useDispatch();
  dispatch(clearGeminiStore());

  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:w-screen"
          alt="bg-theme"
          src={BG_IMAGE}
        />
      </div>
      <div>
        <GeminiSearchBar />
        <GeminiMovieSuggestion />
      </div>
    </>
  );
};

export default Gemini;
