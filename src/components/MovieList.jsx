import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-20 shadow-lg ">
      <h1 className="text-3xl pt-6 pb-2 text-white text-white font-semibold tracking-wide truncate drop-shadow-lg leading-tight">
        {title}
      </h1>
      <div className="flex overflow-x-scroll scroll-smooth fancy-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}

          {/* <MovieCard posterPath={movies[0]?.poster_path} /> */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
