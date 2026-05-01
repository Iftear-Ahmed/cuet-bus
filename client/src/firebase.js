import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cuet-bus-tahsin.firebaseapp.com",
  projectId: "cuet-bus-tahsin",
  storageBucket: "cuet-bus-tahsin.firebasestorage.app",
  messagingSenderId: "401657248050",
  appId: "1:401657248050:web:da1ff5a53cab089da1ff2b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
