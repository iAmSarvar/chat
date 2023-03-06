import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import Search from "./Search";

const Chats = ({ chats }) => {
  return (
    <div className="h-100 w-[30vw] bg-gray-900">
      <Search />
      {chats.map((chat) => {
        return <Chat key={chat.id} chat={chat} />;
      })}
    </div>
  );
};

export default Chats;
