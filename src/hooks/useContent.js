import React, { useEffect, useState } from "react";
import { useFirebase } from "../contexts/firebase";

export default function useContent(target) {
  const [content, setContent] = useState();
  const { firebase } = useFirebase();

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { [target]: content };
}
