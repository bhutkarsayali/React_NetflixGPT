import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailorVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      // whatever is coming inside action.payload, will put/update inside nowPlayingMovies
      state.nowPlayingMovies = action.payload;
    },
    addTrailorVideo: (state, action) => {
      state.trailorVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailorVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
