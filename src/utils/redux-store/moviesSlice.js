import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailorVideo: null,
    popularMovies: null,
    upComingMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      // whatever is coming inside action.payload, will put/update inside nowPlayingMovies
      state.nowPlayingMovies = action.payload;
    },
    addTrailorVideo: (state, action) => {
      state.trailorVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      // whatever is coming inside action.payload, will put/update inside popularMovies
      state.popularMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      // whatever is coming inside action.payload, will put/update inside upComingMovies
      state.upComingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      // whatever is coming inside action.payload, will put/update inside topRatedMovies
      state.topRatedMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailorVideo,
  addPopularMovies,
  addUpComingMovies,
  addTopRatedMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
