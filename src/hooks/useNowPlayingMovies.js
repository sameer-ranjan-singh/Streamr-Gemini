import { useDispatch } from "react-redux"
import { API_OPTIONS, getShow_URL } from "../utils/constants"
import { addNowPlayingMovies } from "../store/Slices/movieSlice"
import { useEffect } from "react"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
     try{
       const data = await fetch(getShow_URL, API_OPTIONS)
       const jsonData = await data.json() 
        dispatch(addNowPlayingMovies(jsonData))
        console.log(jsonData.results)
     }catch(error){
       console.error(error)
     }
    }
   
    useEffect(()=> {
     getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies