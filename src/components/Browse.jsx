import useNowPlayingMovies from "../custom_hooks/useNowPlayingMovies";
import usePopularMovies from "../custom_hooks/usePolularMovies";
import useTopRatedMovies from "../custom_hooks/useTopRatedMovies";
import useUpComingMovies from "../custom_hooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();

  return (
    <div className="pb-50 bg-black">
      <Header />
      {/**
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
              - cards * n
       */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
