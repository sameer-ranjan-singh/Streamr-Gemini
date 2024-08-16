import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: "gemini",
    initialState:{
        showGemini : false,
        movieSearched : null,
        movieResults : null
    },
    reducers:{
      toggleShowGemini : (state) => {
        state.showGemini = !state.showGemini
      },
      addGeminiResultMovies : (state,action) => {
        const {movieSearched, movieResults} = action.payload
        state.movieSearched = movieSearched
        state.movieResults = movieResults
      },
      clearGeminiStore : (state)=> {
        state.movieSearched = null
        state.movieResults = null
      }
    }
})

export const { toggleShowGemini, addGeminiResultMovies, clearGeminiStore } = geminiSlice.actions
export default geminiSlice.reducer