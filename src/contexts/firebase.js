import React, { createContext, useState, useEffect, useContext } from "react";

export const FirebaseContext = createContext();

export function useFirebase() {
  return useContext(FirebaseContext);
}

const FirebaseProvider = ({ children }) => {
  const [user, setProfile] = useState({});

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        setProfile(user);
      } else {
        setProfile({});
      }
    });
    return () => listener();
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
