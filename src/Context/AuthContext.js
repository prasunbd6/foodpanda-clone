import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import { Authentication } from "../FirebaseConfig";

//Create Context
export const UserAuthContext =createContext("");


//Create Use Context
export function useUserAuthContext() {
 return useContext(UserAuthContext);
}

//Create Provider
export function UserAuthContextProvider (props) {
  const [user, setUser] = useState();

  //Register
  function register(email, password) {
    return createUserWithEmailAndPassword(Authentication, email, password);
  }

  //Login
  function Login(email, password) {
    return signInWithEmailAndPassword(Authentication, email, password).then(
      (userCredential) => {
        // Save the token in Local Storage
        const token = userCredential.accessToken;
        localStorage.setItem("token", token);
      }
    );
  }

  // Logout
  function Logout() {
    localStorage.removeItem("token");
    return signOut(Authentication);
  }

  // On Authentication State Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Authentication, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Google Sign In
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(Authentication, provider);
  };

  const functionExport = { user, register, Login, Logout, googleSignIn };

  return (
    <>
      <UserAuthContext.Provider value={functionExport}>
        {props.children}
      </UserAuthContext.Provider>
    </>
  );
};
