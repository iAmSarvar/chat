import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA-V97qxSoNOOTdxSBAsCnl56VBVtc3EjM",
  authDomain: "chat-fbd3a.firebaseapp.com",
  projectId: "chat-fbd3a",
  storageBucket: "chat-fbd3a.appspot.com",
  messagingSenderId: "895242070454",
  appId: "1:895242070454:web:5e2621af57197652d0b917"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)