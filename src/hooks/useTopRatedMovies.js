import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS, getTopRatedMovies_URL } from "../utils/constants"
import { addTopRatedMovies } from "../store/Slices/movieSlice"
import { useEffect } from "react"

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
  const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies)


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
      !topRatedMovies && getTopRatedMovies()
    },[])
}

export default useTopRatedMovies