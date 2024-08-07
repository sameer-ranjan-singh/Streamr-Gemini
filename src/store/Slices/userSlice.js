import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: null,
<<<<<<< HEAD
    reducers: {
        addUser: (state,action)=> {
=======
    // initialState:{
    //     userData :null
    // },
    reducers: {
        addUser: (state,action)=> {
            // state.userData = action.payload
>>>>>>> 1a85e2b1692649326374e2cb5a0a7b759a8017a7
            return action.payload

        },
        removeUser: (state,action)=> {
            return null
        }
    }
})
export const {addUser,removeUser} = userSlice.actions 

export default userSlice.reducer