import { useRef, useState } from "react";
import { BACKGROUND_IMAGE_URL, USER_PHOTO_URL } from "../utils/constants";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Disclaimer from "./Disclaimer";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  //creating reference
  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    // validate the form data, when message is null then form is valid
    const message = checkValidateData(
      fullname?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    // if (message === null) {
    //   // Sign in/ Sign up : create a new user
    // }
    if (message) return;

    // Sign in/ Sign up logic
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        fullname?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname?.current?.value,
            photoURL: USER_PHOTO_URL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // Update the store here, add as much data you want to put it on store
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    }
  };
  const toggleSignupForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="z-0 relative">
        <div
          className="min-h-screen bg-cover bg-center relative"
          style={{
            backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`, // Replace with actual poster collage URL
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Form Container */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
            <div className="max-w-md w-full bg-black/70 px-15 py-28 rounded-md text-white">
              <h2 className="text-3xl font-bold mb-6">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h2>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {!isSignInForm && (
                  <input
                    ref={fullname}
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-gray-800 rounded text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                )}
                <input
                  ref={email}
                  type="text"
                  placeholder="Email or mobile number"
                  autoComplete="username"
                  className="w-full px-4 py-3 bg-gray-800 rounded text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

                <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className="w-full px-4 py-3 bg-gray-800 rounded text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <div className="error text-red-600 text-md text-center p-1">
                  {errorMessage}
                </div>
                <button
                  onClick={handleButtonClick}
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold cursor-pointer"
                >
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox h-4 w-4" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="hover:underline">
                    Need help?
                  </a>
                </div>
              </form>

              <div className="mt-6 text-sm text-gray-400 flex items-center">
                {!isSignInForm ? (
                  <>
                    <span className="text-lg">Already a user? </span>
                    <p
                      onClick={toggleSignupForm}
                      className="text-white hover:underline cursor-pointer ml-2 font-bold text-lg"
                    >
                      Sign in now
                    </p>
                  </>
                ) : (
                  <>
                    <span className="text-lg">New to NextflixGPT? </span>
                    <p
                      onClick={toggleSignupForm}
                      className="text-white hover:underline cursor-pointer ml-2 font-bold text-lg"
                    >
                      Sign up now
                    </p>
                  </>
                )}
              </div>

              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 my-6">
                <p className="font-bold">⚠️ Disclaimer:</p>
                <p className="mt-1">
                  This is a developer demo project. It is{" "}
                  <span className="font-bold underline mx-1">
                    not affiliated with Netflix
                  </span>
                  or any other brand. No real user credentials required.
                  <span className="font-bold">
                    DO NOT REVEAL YOUR PERSONAL INFORMATION
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
