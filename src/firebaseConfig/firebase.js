
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDqCetavlKaQuY8FaGFc0tFTd1rAPDJa4",
  authDomain: "percubateristas-dfc0f.firebaseapp.com",
  projectId: "percubateristas-dfc0f",
  storageBucket: "percubateristas-dfc0f.appspot.com",
  messagingSenderId: "62434299740",
  appId: "1:62434299740:web:4a4d7d849d27a036133b99"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);