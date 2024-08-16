import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS, getUpcomingMovies_URL } from "../utils/constants"
import { addUpcomingdMovies } from "../store/Slices/movieSlice"
import { useEffect } from "react"

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
  const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies)

    const getUpcomingMovies = async () => {
     try{
       const data = await fetch(getUpcomingMovies_URL, API_OPTIONS)
       const jsonData = await data.json() 
        dispatch(addUpcomingdMovies(jsonData.results))
        // console.log(jsonData.results)
     }catch(error){
       console.error(error)
     }
    }
   
    useEffect(()=> {
     !upcomingMovies &&  getUpcomingMovies()
    },[])
}

export default useUpcomingMovies