import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn1n0-4MtLb6qNdqmaEl5aEU3WmElBiwc",
  authDomain: "btland-21783.firebaseapp.com",
  projectId: "btland-21783",
  storageBucket: "btland-21783.appspot.com",
  messagingSenderId: "311118809463",
  appId: "1:311118809463:web:55c74f0e1cf280bfbbb972",
  measurementId: "G-BGLW4TJJQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db }