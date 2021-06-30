import React, { createContext, useState, useEffect, useContext } from "react";

export const FirebaseContext = createContext();

export function useFirebase() {
  return useContext(FirebaseContext);
}

const FirebaseProvider = ({ children }) => {
  const [user, setProfile] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setProfile(user);
    });
    return () => {};
  }, []);

  return (
    <FirebaseContext.Provider
      value={{ user, setProfile, firebase: window.firebase }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
