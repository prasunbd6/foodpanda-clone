import { createContext, useContext, useEffect, useState } from "react";
import {
  // eslint-disable-next-line
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Auth } from "../Firebase-Config";

//Create Context
export const CreateUserContext = () => {
  createContext();
};

//Create Use Context
export const UseUserContext = () => {
  useContext(CreateUserContext);
};

//Create Provider
export const ContextProvider = (props) => {
  const [user, setUser] = useState({});

  //Register
  function register(email, password) {
    return createUserWithEmailAndPassword(Auth, email, password);
  }

  //Login
  function login(email, password) {
    return signInWithEmailAndPassword(Auth, email, password).then(
      (userCredential) => {
        // Save the token in Local Storage
        const token = userCredential.accessToken;
        localStorage.setItem("token", token);
      }
    );
  }

  // Logout
  function logout() {
    localStorage.removeItem("token");
    return signOut(Auth);
  }

  // On Authentication State Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Google Sign In
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(Auth, provider);
    // return signInWithRedirect(Auth,provider)
  };

  const functionExport = { user, register, login, logout, googleSignIn };

  return (
    <>
      <CreateUserContext.Provider value={functionExport}>
        {props.children}
      </CreateUserContext.Provider>
    </>
  );
};
