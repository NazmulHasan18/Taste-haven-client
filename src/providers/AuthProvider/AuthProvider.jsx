/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import {
   GithubAuthProvider,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   sendPasswordResetEmail,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const googleProvider = new GoogleAuthProvider();
   const gitHubProvider = new GithubAuthProvider();
   const googleSignIn = () => {
      return signInWithPopup(auth, googleProvider);
   };

   const gitHubLogin = () => {
      return signInWithPopup(auth, gitHubProvider);
   };
   const signUpEmail = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signInEmail = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const updateUserProfile = (name, url) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: url,
      });
   };

   const forgetPassword = (email) => {
      return sendPasswordResetEmail(auth, email);
   };
   const logOut = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         setUser(user);
         setLoading(false);
      });
      return () => {
         unsubscribe();
      };
   }, []);

   const authInfo = {
      user,
      googleSignIn,
      gitHubLogin,
      logOut,
      signUpEmail,
      signInEmail,
      updateUserProfile,
      loading,
      forgetPassword,
   };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
