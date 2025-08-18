import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;

  if (!movieNames) return null;

  return (
    <div className="absolute w-full m-auto top-[450px] md:top-[350px]">
      <div className="p-4 bg-black/70 text-white shadow-lg shadow-white font-bold">
        <div className="pb-[200px]">
          {movieNames.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
          {/* <MovieList title={movieNames[0]} movies={movieResults[0]} /> */}
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
