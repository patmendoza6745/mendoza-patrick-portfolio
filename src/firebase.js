import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfzhzaMCLhhzghNMEjZZHj9EJDmz3VwJ0",
  authDomain: "online-portfolio-dashboard.firebaseapp.com",
  projectId: "online-portfolio-dashboard",
  storageBucket: "online-portfolio-dashboard.appspot.com",
  messagingSenderId: "177818188029",
  appId: "1:177818188029:web:a947902605026a0e906694"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);