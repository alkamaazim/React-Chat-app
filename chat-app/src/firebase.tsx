// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhC7HuVDnQrXlpoKnJuZ7XOU1vi0oV6-0",
  authDomain: "chatroom-8f15a.firebaseapp.com",
  projectId: "chatroom-8f15a",
  storageBucket: "chatroom-8f15a.appspot.com",
  messagingSenderId: "194837302230",
  appId: "1:194837302230:web:2d6569eaf797b4dda2f277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
