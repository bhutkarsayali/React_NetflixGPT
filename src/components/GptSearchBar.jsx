import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/redux-store/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  // when I click on search I want data from search input box ==> useRef to get data from input box
  const searchText = useRef();

  const dispatch = useDispatch();

  const searchMovieInTMDB = async (movie) => {
    //API call
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    // when I click on search I want data from search input box
    // console.log("searchText : ", searchText.current.value);

    /**!SECTION
     *  Make an API call to openai GPT API and get Movie Results
        const gptQuery =
          "Act as a Movie Recommendation System and suggest some movies for the query " +
          searchText.current.value +
          " only give me names of 5 movies, , comma separated like the example result given ahead. Example Result :  Gadar, Sholay, Don, GolMaal, Koi Mil Gaya";

        const gptResponse = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: gptQuery,
            },
          ],
        });
        if(!gptResponse.choices) {//TODO: Write Error Handling}
        console.log(gptResponse.choices[0].message.content);
    */

    /**
     * * Open AI service is not subscribed so not allowing to use their APIs for free,
     * so using below dummy data as its placeholder
     * gptResponse.choices[0].message.content gives below string of movies=>
     * "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jane Bhi Do Yarro, Padosan"
     * */

    const gptMovies =
      "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Choti Si baat, Padosan, 3 idiots";
    const dummyMovieChoisesFromGPT = gptMovies.split(",");

    // Now for each movie, I will search TMDB API
    const promiseArray = dummyMovieChoisesFromGPT.map((movie) =>
      searchMovieInTMDB(movie)
    );
    /**  as above function is async operation, JS will call map immediately for 5 results but async operation will take time to resolve
     * And this will return Promise for all 5 results like below,
     * for each movie there will be new promise
     * and promise will take some time to resolve
     * [Promise, Promise, Promise, Promise, Promise, ]
     * it will take some time to get json.results
     * So now how to get data out of promise array
     * In below tmdbResults we have to get the results from all 5 promises
     * use Promise.all() that takes array of promises
     * so wait for Promise.all to resolve and my program will wait for Promise.all to finish
     * and Promise.all will only finish once my all 5 promises are resolved
     */
    const tmdbResults = await Promise.all(promiseArray);
    // console.log("tmdbResults => ", tmdbResults);

    // Push all the tmdbResults movies data to the redux store to show to user
    // Sending multiple data in action.payload as addGptMovieResult({movieNames: dummyMovieChoisesFromGPT, movieResults: tmdbResults})
    dispatch(
      addGptMovieResult({
        movieNames: dummyMovieChoisesFromGPT,
        movieResults: tmdbResults,
      })
    );
  };
  return (
    <div className="absolute w-full m-auto top-[250px] md:top-[150px]">
      <form
        className="p-6 w-full md:w-2/3 m-auto bg-black/70"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex items-center w-full px-2 py-2 bg-white border border-gray-300 rounded-full shadow-sm">
          {/* Search Icon */}
          <svg
            className="w-5 h-5 text-gray-500 mx-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
            />
          </svg>

          {/* Input Field */}
          <input
            ref={searchText}
            type="text"
            placeholder={
              lang[langKey]?.gptSearchPlaceholder || "Search Here..."
            }
            className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2"
          />

          {/* Search Button */}
          <button
            onClick={handleGptSearchClick}
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:bg-purple-700 text-white text-lg font-semibold cursor-pointer px-4 py-1 rounded-full transition duration-200"
          >
            {lang[langKey]?.search || "Search..."}
          </button>
        </div>
        <p className="p-5 text-white font-semibold text-md">
          OpenAI account is not subscribed, so Use Sample search string: "funny
          indian retro movies"
        </p>
      </form>
    </div>
  );
};

export default GptSearchBar;
