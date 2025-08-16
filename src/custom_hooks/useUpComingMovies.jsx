import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants";
import { addUpComingMovies } from "../utils/redux-store/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  // add json.results to movie slide by dispatching an action
  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
    // Fetch data from TMDB API
    const data = await fetch(UPCOMING_MOVIES_API, TMDB_API_OPTIONS);
    const json = await data.json();
    // Update store with fetched data
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    //needs to be called only once so kept in useEffect with empty []
    // without [], you will see infinite API calls
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
