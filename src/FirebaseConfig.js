
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



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