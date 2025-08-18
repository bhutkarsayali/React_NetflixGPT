import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS, TOPRATED_MOVIES_API } from "../utils/constants";
import { addTopRatedMovies } from "../utils/redux-store/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  // add json.results to movie slide by dispatching an action
  const dispatch = useDispatch();
  
  // Memoization, if nowPlaying Movies already that the data then dont fetch it again, it will save unnecessary API calls
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    // Fetch data from TMDB API
    const data = await fetch(TOPRATED_MOVIES_API, TMDB_API_OPTIONS);
    const json = await data.json();
    // Update store with fetched data
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    //needs to be called only once so kept in useEffect with empty []
    // without [], you will see infinite API calls
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
