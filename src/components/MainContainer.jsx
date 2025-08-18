import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // early return: initial state is null so we will return from here if we dont have movies
  if (movies === null) return;
  //Take 1st result from array to show as bg trailer
  const mainMovie = movies[0];

  const { id, original_title, overview } = mainMovie;

  return (
    <div className="main-container pt-[30%] md:pt-0 bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
