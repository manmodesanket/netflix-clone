import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import FirebaseProvider from "./contexts/firebase";
import { initFirebase } from "./firebase";

initFirebase();

ReactDOM.render(
  <>
    <FirebaseProvider>
      <GlobalStyles />
      <App />
    </FirebaseProvider>
  </>,
  document.getElementById("root")
);
