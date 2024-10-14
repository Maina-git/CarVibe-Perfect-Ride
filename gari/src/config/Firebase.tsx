import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBx-7enwz20-geHC3L5xucKMZ2v9c3E6i4",
  authDomain: "carvibe-1f5fb.firebaseapp.com",
  projectId: "carvibe-1f5fb",
  storageBucket: "carvibe-1f5fb.appspot.com",
  messagingSenderId: "184407252546",
  appId: "1:184407252546:web:b5fc580137a8420d9f57db",
  measurementId: "G-04SDFPNZ6Y"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export  const storage= getStorage(app);
export const analytics = getAnalytics(app);