// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYeBBhKnzOiUrzv7kg9-sGiplyjstTyS0",
  authDomain: "book-app-874ad.firebaseapp.com",
  projectId: "book-app-874ad",
  storageBucket: "book-app-874ad.firebasestorage.app",
  messagingSenderId: "90217100011",
  appId: "1:90217100011:web:6b23f1058d46be2e7a84ae",
  measurementId: "G-E9R0B6XKNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app
