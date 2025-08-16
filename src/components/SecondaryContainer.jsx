import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  // const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    movies && (
      <div className="bg-black">
        {/**
      Movielist - Popular
        - MovieCards * n
      Movielist - Now Playing
      Movielist - Trending
      Movielist - Horror
   */}
        <div className="-mt-72 relative Z-20 shadow-lg shadow-white p-5">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
