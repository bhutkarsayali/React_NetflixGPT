import { BACKGROUND_IMAGE_URL, OPENAI_API_KEY } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  if (!OPENAI_API_KEY) {
    console.error("OpenAI API key is missing!");
  }
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center -z-10 fixed top-0 left-0 w-full h-[100vh] object-cover"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
