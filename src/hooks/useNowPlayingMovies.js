import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS, getNowPlayingMovies_URL } from "../utils/constants"
import { addNowPlayingMovies } from "../store/Slices/movieSlice"
import { useEffect } from "react"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
     try{
       const data = await fetch(getNowPlayingMovies_URL, API_OPTIONS)
       const jsonData = await data.json() 
        dispatch(addNowPlayingMovies(jsonData.results))
        // console.log(jsonData.results)
     }catch(error){
       console.error(error)
     }
    }
   
    useEffect(()=> {
      !nowPlayingMovies && getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies