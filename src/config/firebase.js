import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDlqPlBdTfEMDFq4w5r0hrCKOuiXzdvmpk",
  authDomain: "adversarius-c34e2.firebaseapp.com",
  projectId: "adversarius-c34e2",
  storageBucket: "adversarius-c34e2.appspot.com",
  messagingSenderId: "475678392490",
  appId: "1:475678392490:web:2eb915007255a3bebd10d3",
  measurementId: "G-K6EKG4GLTH"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app)

export default db;