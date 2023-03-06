import React from "react";
import SendButton from "../widgets/SendButton";
import Search from "./Search";

const SelectedChatContent = ({ chats }) => {
  console.log("chats are ", chats);
  return (
    <div className="w-[calc(70vw-80px)] h-screen bg-gray-800 relative">
      <div className="w-full h-[70px] bg-slate-700 flex gap-[15px] items-center px-10">
        <img
          src="https://taligram.org/assets/telegram-groups/global-chat-175.jpg"
          alt=""
          className="w-[50px] h-[50px] rounded-full"
        />
        <div>
          <h2 className="self-start text-white font-bold">Global Chat</h2>
          <p className="text-sm text-gray-900 font-bold ">55 members</p>
        </div>
      </div>
      <div className="absolute flex items-center bottom-0 left-0 right-0 wi-full h-[60px] bg-gray-700">
        <Search />
        <SendButton />
      </div>
    </div>
  );
};

export default SelectedChatContent;
