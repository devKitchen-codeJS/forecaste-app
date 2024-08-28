// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_APP_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_APP_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDMxqTbsa12MRR4PMBvdn4jTB-7gTf5OFc",
  authDomain: "forecast-focus-df15d.firebaseapp.com",
  projectId: "forecast-focus-df15d",
  storageBucket: "forecast-focus-df15d.appspot.com",
  messagingSenderId: "728304121488",
  appId: "1:728304121488:web:89d6534973d9e1a88f4a15",
  measurementId: "G-00V42GMYKT",
};
console.log("api", process.env.NEXT_PUBLIC_APP_API_KEY);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
