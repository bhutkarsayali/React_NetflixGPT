import { signOut } from "firebase/auth";
import { NETFLIX_LOGO_URL, NETFLIX_USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOutClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full z-10">
      <div className="logo px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
        <img src={NETFLIX_LOGO_URL} alt="logo" className="w-60 h-30" />
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src={NETFLIX_USER_ICON}
              alt="usericon"
              className="w-8 h-8 user-icon cursor-pointer"
            />
            <span className="text-white ml-4 cursor-pointer">▼</span>
          </div>
          <button
            onClick={handleSignOutClick}
            type="button"
            className="flex items-center gap-2 m-2 cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5m0 14a2 2 0 002 2h3a2 2 0 002-2V5a2 2 0 00-2-2h-3a2 2 0 00-2 2v14z"
              />
            </svg>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
