import { BACKGROUND_IMAGE_URL } from "../utils/constants";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="">
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
            <div className="max-w-md w-full bg-black/75 px-15 py-28 rounded-md text-white">
              <h2 className="text-3xl font-bold mb-6">Sign In</h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Email or mobile number"
                  className="w-full px-4 py-3 bg-gray-800 rounded text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-gray-800 rounded text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold"
                >
                  Sign In
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

              <div className="mt-6 text-sm text-gray-400">
                <span>New to Netflix? </span>
                <a href="#" className="text-white hover:underline">
                  Sign up now
                </a>
              </div>

              <p className="mt-6 text-xs text-gray-500">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
