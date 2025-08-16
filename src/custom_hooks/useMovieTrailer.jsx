import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTrailorVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // fetch trailer video API call and updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    // check API response for videos data on TMDB by movie id and filter trailer's data among them
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const officialTrailer = filterData.length ? filterData[0] : json.results[0];
    console.log("trailer", officialTrailer);
    dispatch(addTrailorVideo(officialTrailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
