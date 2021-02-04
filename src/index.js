import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCaPCyB_Q-6uLQ4hpXMAu7oCpp-i2WZ9tw",
  authDomain: "andrewchat-2beda.firebaseapp.com",
  projectId: "andrewchat-2beda",
  storageBucket: "andrewchat-2beda.appspot.com",
  messagingSenderId: "275111053123",
  appId: "1:275111053123:web:39ba8d305ec24435a951f6",
  measurementId: "G-EBJ3TYH1SF",
});

export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById("root")
);
