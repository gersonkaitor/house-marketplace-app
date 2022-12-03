
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOi4SQkTgtKd0B3HVrob7AUvP9MgPPAhY",
  authDomain: "house-marketplace-app-18857.firebaseapp.com",
  projectId: "house-marketplace-app-18857",
  storageBucket: "house-marketplace-app-18857.appspot.com",
  messagingSenderId: "670930971059",
  appId: "1:670930971059:web:7c5fc10b72a390c6ed83c6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()