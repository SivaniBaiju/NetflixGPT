// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADNHxThVc1IgBRf0gaPQbmJMc_F4e6Dt0",
  authDomain: "netflixgpt-sivani.firebaseapp.com",
  projectId: "netflixgpt-sivani",
  storageBucket: "netflixgpt-sivani.appspot.com",
  messagingSenderId: "874614731414",
  appId: "1:874614731414:web:d1a86248c63995e8c108b7",
  measurementId: "G-TCNNT8XRLY"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();