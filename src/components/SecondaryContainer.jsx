import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
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
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Trending"} movies={movies} />
          <MovieList title={"Popular"} movies={movies} />
          <MovieList title={"Upcoming Movies"} movies={movies} />
          <MovieList title={"Horror"} movies={movies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
