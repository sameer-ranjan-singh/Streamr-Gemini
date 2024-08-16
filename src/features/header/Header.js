import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../../utils/constants";
import { SUPPORTED_LANGUAGES } from "../../utils/languageConstants";
import { changeLanguage } from "../../store/Slices/appConfigSlice";
import {
  clearGeminiStore,
  toggleShowGemini,
} from "../../store/Slices/geminiSlice";
import { addUser, removeUser } from "../../store/Slices/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);
  const showGemini = useSelector((store) => store.gemini.showGemini);

  const handleSignOut = () => {
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
    dispatch(clearGeminiStore());
    dispatch(toggleShowGemini());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); //unsubscribe to onAuthStateChanged callback  when the component unmount
  }, []);
  return (
    <div className="absolute  px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center">
      <img className="w-24  md:w-44  md:mx-0" alt="netflix logo" src={LOGO} />
      <div className="flex  w-1/2 justify-end items-center">
        {showGemini && (
          <select
            className="h-6 md:h-10 mr-2  text-sm md:text-base bg-gray-800 text-gray-200"
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
          className="px-2 md:px-3 h-7 md:h-9 text-sm md:text-lg md:rounded-md hover:bg-blue-800 hover:text-white font-bold bg-yellow-500 text-black"
          onClick={handleGemniBtnClick}
        >
          {showGemini ? "Browse" : "Gen-AI"}
        </button>
        {userInfo && (
          <div className="flex pl-4 ">
            <button
              onClick={handleSignOut}
              className="text-sm md:text-lg p-1 font-bold text-red-600 border border-red-600 hover:bg-red-600 hover:text-white"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
