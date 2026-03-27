// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCgGIWxcYqLjCVRu-3gHcq6c0Xk4fLv19k",
  authDomain: "tokyo-eats-e99f6.firebaseapp.com",
  projectId: "tokyo-eats-e99f6",
  storageBucket: "tokyo-eats-e99f6.firebasestorage.app",
  messagingSenderId: "113622434677",
  appId: "1:113622434677:web:4ebd61de7c867077a9493c",
  measurementId: "G-4Y1E66Z0XP"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Exports for use in your app
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
