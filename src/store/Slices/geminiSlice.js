import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: "gemini",
    initialState:{
        showGemini : false,
        movieSearched : null,
        movieResults : null
    },
    reducers:{
      toggleGeminiSearch : (state) => {
        state.showGemini = !state.showGemini
      },
      addGeminiResultMovies : (state,action) => {
        const {movieSearched, movieResults} = action.payload
        state.movieSearched = movieSearched
        state.movieResults = movieResults
      }
    }
})

export const { toggleGeminiSearch, addGeminiResultMovies } = geminiSlice.actions
export default geminiSlice.reducer