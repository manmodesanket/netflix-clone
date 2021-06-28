import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./contexts/firebase";
import * as FIREBASE_CONSTANTS from "./constants/firebase";

const firebaseConfig = {
  apiKey: FIREBASE_CONSTANTS.FIREBASE_API_KEY,
  authDomain: FIREBASE_CONSTANTS.FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_CONSTANTS.FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_CONSTANTS.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_CONSTANTS.FIREBASE_MESSAGING_ID,
  appId: FIREBASE_CONSTANTS.FIREBASE_API_ID,
};

const firebaseInit = window.firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
