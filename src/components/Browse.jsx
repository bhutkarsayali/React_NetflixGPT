import React, { useEffect } from "react";
import Header from "./Header";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const Browse = () => {
  // add json.results to movie slide by dispatching an action
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    // Fetch data from TMDB API
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    console.log(json.results);

    // Update store with fetched data
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    //needs to be called only once so kept in useEffect with empty []
    // without [], you will see infinite API calls
    getNowPlayingMovies();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
