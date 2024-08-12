import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice"
import moviesReducer from "./Slices/movieSlice";
import appConfigReducer from "./Slices/appConfigSlice"
import geminiReducer from "./Slices/geminiSlice"

const appStore = configureStore({
    reducer:{
        user : userReducer,
        movies: moviesReducer,
        appConfig : appConfigReducer,
        gemini : geminiReducer
    }
})

export default appStore