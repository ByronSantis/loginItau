import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBf5_mXzCwOeC83ImWQVAjxaYfGxwPjSLY",
  authDomain: "chatmapp-cab8f.firebaseapp.com",
  projectId: "chatmapp-cab8f",
  storageBucket: "chatmapp-cab8f.appspot.com",
  messagingSenderId: "759087914750",
  appId: "1:759087914750:web:7b85d81a231e3e595b0faf",
  measurementId: "G-6BY0BTZ8BF"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

const analytics = getAnalytics(app);
