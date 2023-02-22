import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmgaKp73qFFGJ-2E2SJkj-rpCB7NK6NjE",
  authDomain: "first-auth-5be64.firebaseapp.com",
  projectId: "first-auth-5be64",
  storageBucket: "first-auth-5be64.appspot.com",
  messagingSenderId: "679905267358",
  appId: "1:679905267358:web:1e80dcd754060ebd46f58f",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
