// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMxqTbsa12MRR4PMBvdn4jTB-7gTf5OFc",
  authDomain: "forecast-focus-df15d.firebaseapp.com",
  projectId: "forecast-focus-df15d",
  storageBucket: "forecast-focus-df15d.appspot.com",
  messagingSenderId: "728304121488",
  appId: "1:728304121488:web:89d6534973d9e1a88f4a15",
  measurementId: "G-00V42GMYKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
