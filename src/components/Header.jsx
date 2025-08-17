import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO_URL, NETFLIX_USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/redux-store/userSlice";
import { useLocation } from "react-router-dom";
import { toggleGptSearchView } from "../utils/redux-store/gptSlice";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const location = useLocation();
  const [isZoomedOut, setIsZoomedOut] = useState(false);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    // Zoom out on "/about" page (change as needed)
    setIsZoomedOut(location.pathname === "/browse");
  }, [location]);

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    // This block securely handles Firebase Auth state changes.
    // No credentials are manually captured or transmitted externally.
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // User is sign in
        // Update the store here, add as much data you want to put it on store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // redirect user to browse page after updating the store
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        // redirect user to main page after sign out
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unSubscribe();
  }, []);

  const handleSignOutClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    //Toggle GPT search
    dispatch(toggleGptSearchView());
  };

  return (
    <div
      className={`transition-transform duration-500 ease-in-out ${
        isZoomedOut ? "shrunk" : ""
      } absolute w-full z-10 header`}
    >
      <div
        className={`transition-transform duration-500 ease-in-out ${
          isZoomedOut ? "small" : ""
        } logo px-1 py-2 bg-gradient-to-b from-black flex justify-between items-center`}
      >
        <img
          src={NETFLIX_LOGO_URL}
          alt="NEXTFLIXGPT Logo"
          className="w-80 h-50 animate-none transition-transform duration-30 hover:scale-105 [clip-path:inset(10%_10%_10%_10%)]"
        />
        
        {showGptSearch && <LanguageSelector />}

        {user && (
          <div className="flex items-center">
            <button
              onClick={handleGptSearchClick}
              className="cursor-pointer relative inline-flex items-center justify-center px-6 py-3 mx-20 overflow-hidden font-medium text-white transition duration-500 ease-out bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg shadow-lg group hover:from-red-500 hover:via-pink-500 hover:to-purple-600"
            >
              <span className="relative">GPT Search 🔍</span>
            </button>

            <div className="flex items-center">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User avatar"
                  className="w-8 h-8 user-icon cursor-pointer"
                />
              ) : (
                <img
                  src={NETFLIX_USER_ICON}
                  alt="usericon"
                  className="w-8 h-8 user-icon cursor-pointer"
                />
              )}

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
        )}
      </div>
    </div>
  );
};

export default Header;
