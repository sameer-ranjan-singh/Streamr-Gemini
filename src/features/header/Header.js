import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../../utils/constants";
import { SUPPORTED_LANGUAGES } from "../../utils/languageConstants";
import { changeLanguage } from "../../store/Slices/appConfigSlice";
import { toggleGeminiSearch } from "../../store/Slices/geminiSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);
  const showGemini = useSelector((store) => store.gemini.showGemini);

  const handleAccessClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGemniBtnClick = (e) => {
    dispatch(toggleGeminiSearch());
    // navigate("/askGemini")
  };

  return (
    <div className="absolute pl-28 py-4 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center">
      <div className="">
        <img className="w-48" alt="netflix logo" src={LOGO} />
      </div>
      <div className="flex">
        {showGemini && (
          <select
            className="h-12 mx-2 px-2 bg-gray-800 text-gray-200"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((language) => (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>
        )}

        <button
          className="px-3 h-12 rounded-xl font-semibold bg-blue-700 text-white"
          onClick={handleGemniBtnClick}
        >
          {showGemini ? "Home" : "Ask Gemini"}
        </button>
        {userInfo ? (
          <div className="flex px-4 ">
            <img
              src={userInfo.photoURL}
              alt="profile logo"
              className="h-12 w-12 rounded-3xl"
            />
            <button
              onClick={handleAccessClick}
              className="h-12 w-16 font-bold text-red-600 border border-black"
            >
              Logout
            </button>
          </div>
        ) : (
          <h1 className="p-2 text-white">No User</h1>
        )}
      </div>
    </div>
  );
};

export default Header;
