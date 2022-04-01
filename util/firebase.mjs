import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCeLoYwrAYmJxKD5O45YQA6m2_MekcOA28",
  authDomain: "tt-bot-v2.firebaseapp.com",
  projectId: "tt-bot-v2",
  storageBucket: "tt-bot-v2.appspot.com",
  messagingSenderId: "1013905684262",
  appId: "1:1013905684262:web:a59f62d83f64c2b7b333e7"
});

export const firestore = firebase.firestore();
export default firebase;