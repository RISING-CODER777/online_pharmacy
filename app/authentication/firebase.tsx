// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJUk-b3Bk6GapdxxkbKV2KOxiN7_CZSHI",
  authDomain: "prescription-upload.firebaseapp.com",
  projectId: "prescription-upload",
  storageBucket: "prescription-upload.appspot.com",
  messagingSenderId: "710076010543",
  appId: "1:710076010543:web:036f65b3ee99feb4f3b6da",
  measurementId: "G-FTQECES5PV"
};


// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db }
