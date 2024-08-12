import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name:"appConfig",
    initialState:{
        lang :"english"
    },
    reducers :{
        changeLanguage: (state,action)=> {
            state.lang = action.payload
        }
    }
})
export const {changeLanguage} = appConfigSlice.actions
export default appConfigSlice.reducer