

import { useDispatch } from "react-redux"
import { API_OPTIONS, getPopularMovies_URL } from "../utils/constants"
import { addPopularMovies } from "../store/Slices/movieSlice"
import { useEffect } from "react"

const usePopularMovies = () => {
    const dispatch = useDispatch()

    const getPopularMovies = async () => {
     try{
       const data = await fetch(getPopularMovies_URL, API_OPTIONS)
       const jsonData = await data.json() 
        dispatch(addPopularMovies(jsonData.results))
        // console.log(jsonData.results)
     }catch(error){
       console.error(error)
     }
    }
   
    useEffect(()=> {
     getPopularMovies()
    },[])
}

export default usePopularMovies