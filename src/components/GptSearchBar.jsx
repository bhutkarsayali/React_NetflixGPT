const GptSearchBar = () => {
  return (
    <div className="absolute w-full m-auto top-[150px]">
      <form
        className="p-6 w-2/3 m-auto bg-black/70"
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
            type="text"
            placeholder="What would you like to watch today? Search movies, shows, genres..."
            className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2"
          />

          {/* Search Button */}
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:bg-purple-700 text-white text-lg font-semibold cursor-pointer px-4 py-1 rounded-full transition duration-200">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
