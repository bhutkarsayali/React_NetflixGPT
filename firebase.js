// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWonLDxzYu1Az9S17vjXTdRpicZsuv2o0",
  authDomain: "netflixgpt-5fd57.firebaseapp.com",
  projectId: "netflixgpt-5fd57",
  storageBucket: "netflixgpt-5fd57.firebasestorage.app",
  messagingSenderId: "392294526000",
  appId: "1:392294526000:web:47a77b54ac88c2078311f5",
  measurementId: "G-DV82K33Y4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
