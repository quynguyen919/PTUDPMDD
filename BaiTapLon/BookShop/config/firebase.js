// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpsFhcJGWqDot9SSmAPdHNFsvQ8BgBiZc",
  authDomain: "testrn-937cc.firebaseapp.com",
  projectId: "testrn-937cc",
  storageBucket: "testrn-937cc.appspot.com",
  messagingSenderId: "673150470123",
  appId: "1:673150470123:web:c97d65b26b2d2777e97bae",
  measurementId: "G-7PDEY3WH8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);