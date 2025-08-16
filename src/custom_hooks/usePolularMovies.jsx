import { useDispatch } from "react-redux";
import { POPULAR_MOVIES_API, TMDB_API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // add json.results to movie slide by dispatching an action
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    // Fetch data from TMDB API
    const data = await fetch(POPULAR_MOVIES_API, TMDB_API_OPTIONS);
    const json = await data.json();
    // Update store with fetched data
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    //needs to be called only once so kept in useEffect with empty []
    // without [], you will see infinite API calls
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
