// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyChTAO-fj5eQrR8e7o3HhiKdU1y-ttx8Wk",
  authDomain: "chat-eb75e.firebaseapp.com",
  projectId: "chat-eb75e",
  storageBucket: "chat-eb75e.appspot.com",
  messagingSenderId: "527531486203",
  appId: "1:527531486203:web:8254c3a32957aabbdb395e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)