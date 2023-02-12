import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//firebase config

const firebaseConfig = {
  apiKey: "AIzaSyD4FlxhqeHthLZ3FEvngo1iwvfr1aKPaHk",
  authDomain: "sylani-online-discount-store.firebaseapp.com",
  projectId: "sylani-online-discount-store",
  storageBucket: "sylani-online-discount-store.appspot.com",
  messagingSenderId: "731023942098",
  appId: "1:731023942098:web:07673dc8f7f3ef5d92e80b",
  measurementId: "G-L94QXV72KJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;