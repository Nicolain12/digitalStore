import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoyz3KXZ7z9zHuGOHouKSitgEUxC2q-tg",
  authDomain: "gainsgear-d9235.firebaseapp.com",
  projectId: "gainsgear-d9235",
  storageBucket: "gainsgear-d9235.appspot.com",
  messagingSenderId: "187151448162",
  appId: "1:187151448162:web:1caa1e80cf18c630f7f93b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)