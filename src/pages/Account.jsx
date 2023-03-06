import Chats from "../components/Chats";
import SelectedChatContent from "../components/SelectedChatContent";
import Sidebar from "../components/Sidebar";
import { UserAuth } from "../context/AuthContext";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";

const Account = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "chats"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setChats([{ id: doc.id, ...doc.data() }]);
        console.log(doc.data());
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <Chats chats={chats} />
      <SelectedChatContent chats={chats} />
    </div>
  );
};

export default Account;
