import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTrailorVideo } from "../utils/redux-store/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // Memoization, if nowPlaying Movies already that the data then dont fetch it again, it will save unnecessary API calls
  const trailorVideo = useSelector((store) => store.movies.trailorVideo);

  // fetch trailer video API call and updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
      TMDB_API_OPTIONS
    );
    const json = await data.json();

    // check API response for videos data on TMDB by movie id and filter trailer's data among them
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const officialTrailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailorVideo(officialTrailer));
  };

  useEffect(() => {
    !trailorVideo && getMovieVideos();
  }, []);
};
export default useMovieTrailer;
