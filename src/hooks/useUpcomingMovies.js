import { useDispatch } from "react-redux"
import { API_OPTIONS, getUpcomingMovies_URL } from "../utils/constants"
import { addUpcomingdMovies } from "../store/Slices/movieSlice"
import { useEffect } from "react"

const useUpcomingMovies = () => {
    const dispatch = useDispatch()

    const getUpcomingMovies = async () => {
     try{
       const data = await fetch(getUpcomingMovies_URL, API_OPTIONS)
       const jsonData = await data.json() 
        dispatch(addUpcomingdMovies(jsonData))
        // console.log(jsonData.results)
     }catch(error){
       console.error(error)
     }
    }
   
    useEffect(()=> {
     getUpcomingMovies()
    },[])
}

export default useUpcomingMovies