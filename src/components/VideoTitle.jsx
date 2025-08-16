
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video p-6 pl-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white mt-80">{title}</h1>
      <p className="w-1/3 text-md font-bold my-6 text-white">{overview}</p>
      <div className="flex my-6">
        <button className="shadow-lg text-lg cursor-pointer flex items-center gap-2 px-12 py-4 bg-white text-black rounded-lg hover:bg-white/70 transition duration-300">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 4l10 6-10 6V4z" />
          </svg>
          Play
        </button>

        <button className="shadow-lg text-lg cursor-pointer flex items-center gap-2 px-12 py-4 ml-2 bg-gray-800/80 text-white rounded-lg hover:bg-gray-800/60 transition duration-300">
          <svg
            className="w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-9-4a1 1 0 112 0 1 1 0 01-2 0zm1 2a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
