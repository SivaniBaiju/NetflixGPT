// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrTXvfcQdgu1ZCyZgeFHb3oCeoqXMcCvs",
  authDomain: "netflixgpt-sivanib.firebaseapp.com",
  projectId: "netflixgpt-sivanib",
  storageBucket: "netflixgpt-sivanib.appspot.com",
  messagingSenderId: "424607163890",
  appId: "1:424607163890:web:3b6e8985d435b5e7f5376b",
  measurementId: "G-2TRBBJZ1HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
