import { BACKGROUND_IMAGE_URL, OPENAI_API_KEY } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  if (!OPENAI_API_KEY) {
    console.error("OpenAI API key is missing!");
  }
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center relative -z-10"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
