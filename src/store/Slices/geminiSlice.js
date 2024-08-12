import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: "gemini",
    initialState:{
        showGemini : false
    },
    reducers:{
      toggleGeminiSearch : (state,action) => {
        state.showGemini = !state.showGemini
      }  
    }
})

export const {toggleGeminiSearch} = geminiSlice.actions
export default geminiSlice.reducer