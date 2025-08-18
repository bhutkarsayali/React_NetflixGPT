import { useDispatch, useSelector } from "react-redux";
import { NOW_PLAYING_MOVIES_API, TMDB_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/redux-store/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // add json.results to movie slide by dispatching an action
  const dispatch = useDispatch();

  // Memoization, if nowPlaying Movies already that the data then dont fetch it again, it will save unnecessary API calls
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    // Fetch data from TMDB API
    const data = await fetch(NOW_PLAYING_MOVIES_API, TMDB_API_OPTIONS);
    const json = await data.json();
    // Update store with fetched data
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    //needs to be called only once so kept in useEffect with empty []
    // without [], you will see infinite API calls
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;
