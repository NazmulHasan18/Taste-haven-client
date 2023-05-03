// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBcGj18OW3659cuF6Rqr1SNXNvVonbPL3Q",
   authDomain: "taste-haven-auth.firebaseapp.com",
   projectId: "taste-haven-auth",
   storageBucket: "taste-haven-auth.appspot.com",
   messagingSenderId: "857225533251",
   appId: "1:857225533251:web:4d59f16429ed0205b901f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
