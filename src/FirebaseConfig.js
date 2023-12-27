import {getAuth} from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClUpS8sMcjgU0iIZE0ZxFp8PnaKIcUf98",
  authDomain: "foodpanda-clone-407709.firebaseapp.com",
  projectId: "foodpanda-clone-407709",
  storageBucket: "foodpanda-clone-407709.appspot.com",
  messagingSenderId: "715559605161",
  appId: "1:715559605161:web:2fad5addee5b77bcf3aab8"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const Authentication=getAuth(app);