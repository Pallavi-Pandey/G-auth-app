import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDH7E6JsAWt4XHAWo4fF-K-d6LhM6JdRNQ",
  authDomain: "loginwith-e6a23.firebaseapp.com",
  projectId: "loginwith-e6a23",
  storageBucket: "loginwith-e6a23.appspot.com",
  messagingSenderId: "33465189365",
  appId: "1:33465189365:web:b27e4b839c950169e556bc",
  measurementId: "G-R0JEYS40FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};
