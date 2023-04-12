import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA075CG5EGq7621TF9iyB_9vvIaT7LiqFI",
  authDomain: "mouseland-8099a.firebaseapp.com",
  projectId: "mouseland-8099a",
  storageBucket: "mouseland-8099a.appspot.com",
  messagingSenderId: "859312853428",
  appId: "1:859312853428:web:2ffb31e9b1f9d75a6222e1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;