import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDK2lNuTDN4o5JuAY_RsT8m2pS_fsBuAI4",
  authDomain: "symposium-admin.firebaseapp.com",
  projectId: "symposium-admin",
  storageBucket: "symposium-admin.firebasestorage.app",
  messagingSenderId: "674492591472",
  appId: "1:674492591472:web:116b1f331350bdd31833b5"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);