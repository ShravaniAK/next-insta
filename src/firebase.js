// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-insta-1a174.firebaseapp.com",
  projectId: "next-insta-1a174",
  storageBucket: "next-insta-1a174.appspot.com",
  messagingSenderId: "846932598371",
  appId: "1:846932598371:web:878d68ab45ac6446706256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);