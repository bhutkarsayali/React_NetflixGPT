# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Netflix GPT

- Created app using vite
- Setup react testing library and jest
- configured tailwindcss
- Header
- Routing of App
- Loginform
- SignUp form
- Form Validations
- useRef Hook
- Firebase setup
- Deploying app to production
- Create Signup user account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Signout
- Update profile API call
- Bugfix: Sign up user displayname and profile picture update
- Bugfix: if the user is not logged in redirect- /browse to login page and vice versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constant files
- Register for TMDB API and create an app and get access token
- Get data from TMDB now playing movies list API
- Custom Hook for Now Playing movies
- create MovieSlice
- Update store with movies data
- Plannig for mainComtainer and secondoryContainer
- fetch data for Traileer video
- Update store with Trailer video data
- Embedded the youtube video and make it autoplay and mute
- Tailwind classes to make mainContainer and look awesome
- Build secondaryComponent
- Build MovieList
- Build MovieCard
- TMDB Image CDN URL
- Made the browse page amazing with tailwindcss
- UsepopularMovies custom hook
- GPT Search Page
- GPT Search Bar
- (FEATURE) Multi-Language Feature in our App
- Integrate GPT APISs
- Get search OPenAi API key
- GPT search API call
- Fetched gptMovieSuggestions from TMDB
- created gptSlice, addded data
- Reused MovieList Component to make movie suggestion container 
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our site responsive

# Using firebase

# FEATURES

- Login / Signup
  - Sign In / Sign up Form
  - redirect to browse page
- Browse (after authentication)
  - Header - Main movie - Trailer in background - Title and ddescription - MovieSuggestions - MovieLists \* N
    NetFlixGPT - Search bar - Movie Suggestions

# Firebase cli and deploy

-create a firebase project
-firebase install
-add configuration
-npm install -g firebase tools
-firebase login
-firebase init
-firebase deploy

# Firebase project URL

https://console.firebase.google.com/project/netflixgpt-5fd57/overview
https://netflixgpt-5fd57.web.app/
https://netflixgpt-5fd57.firebaseapp.com/
