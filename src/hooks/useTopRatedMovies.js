import { useDispatch } from "react-redux"
import { API_OPTIONS, getTopRatedMovies_URL } from "../utils/constants"
import { addTopRatedMovies } from "../store/Slices/movieSlice"
import { useEffect } from "react"

const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const getTopRatedMovies = async () => {
     try{
       const data = await fetch(getTopRatedMovies_URL, API_OPTIONS)
       const jsonData = await data.json() 
        dispatch(addTopRatedMovies(jsonData.results))
        // console.log(jsonData.results)
     }catch(error){
       console.error(error)
     }
    }
   
    useEffect(()=> {
     getTopRatedMovies()
    },[])
}

export default useTopRatedMovies