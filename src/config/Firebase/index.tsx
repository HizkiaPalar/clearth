// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDA-KFa61JH1jU7SS-bcZ2Jf-8eQma8_Ho',
  authDomain: 'finalproject-a9f8b.firebaseapp.com',
  projectId: 'finalproject-a9f8b',
  storageBucket: 'finalproject-a9f8b.appspot.com',
  messagingSenderId: '675037503937',
  appId: '1:675037503937:web:50f11be17218faa7460f40',
  databaseURL: 'https://finalproject-a9f8b-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
