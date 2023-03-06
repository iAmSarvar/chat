import React, { useEffect } from "react";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const Chats = () => {
  useEffect(() => {
    const docRef = doc(db, "users");
    const docSnap = getDoc(docRef);
    console.log(docSnap.data());
  }, []);

  return <div className="h-100 w-[30vw] bg-gray-900">{}</div>;
};

export default Chats;
