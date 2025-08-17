import { useSelector } from "react-redux";
import useNowPlayingMovies from "../custom_hooks/useNowPlayingMovies";
import usePopularMovies from "../custom_hooks/usePolularMovies";
import useTopRatedMovies from "../custom_hooks/useTopRatedMovies";
import useUpComingMovies from "../custom_hooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GPTSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="browse-wrapper">
      <Header />

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/**
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
              - cards * n
       */}
    </div>
  );
};

export default Browse;
