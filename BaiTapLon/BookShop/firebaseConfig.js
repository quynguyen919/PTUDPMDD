import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAfH9WHWnwMCpYVjjVb4C-QVjowLUT56Fo",
  authDomain: "ptudpmdd.firebaseapp.com",
  projectId: "ptudpmdd",
  storageBucket: "ptudpmdd.appspot.com",
  messagingSenderId: "573687357918",
  appId: "1:573687357918:web:b5df5c84a1a54018e77d4f",
  measurementId: "G-LQDRSM7HER"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);