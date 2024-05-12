// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Database } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9adpgjE_Q-DwRAsz5z7zSNiBbaRHILaM",
  authDomain: "clearth-2930c.firebaseapp.com",
  projectId: "clearth-2930c",
  storageBucket: "clearth-2930c.appspot.com",
  messagingSenderId: "225365630803",
  appId: "1:225365630803:web:f8b4f4d06790b87e894ba6",
  measurementId: "G-SFD9W72T4Y",
  databaseURL : 'https://clearth-2930c-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;