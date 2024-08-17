import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        trailerId : null,
        movieTrailer : null,
        nowPlayingMovies: null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
    },
    reducers :{
        addNowPlayingMovies : (state,action)=> {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo : (state, action) => {
            state.movieTrailer = action.payload
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingdMovies : (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTrailerId : (state,action)=> {
            state.trailerId = action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingdMovies,addTrailerId} = moviesSlice.actions
export default moviesSlice.reducer