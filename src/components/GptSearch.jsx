import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      {/**
        GptSearchBar
        GptMovieSuggestions
       */}
      <GptSearchBar />
      <GptMovieSuggestions/>
    </div>
  );
};

export default GptSearch;
