// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5cc03.firebaseapp.com",
  projectId: "mern-estate-5cc03",
  storageBucket: "mern-estate-5cc03.firebasestorage.app",
  messagingSenderId: "560064948725",
  appId: "1:560064948725:web:19aab1635ccea2d60ed8bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);