import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import dotenv from "dotenv";

dotenv.config();

const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
});

export const firestore = firebase.firestore();
export default firebase;