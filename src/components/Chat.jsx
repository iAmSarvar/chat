import React from "react";

const Chat = ({ chat }) => {
  return (
    <div className="h-[80px] w-full flex items-center justify-start gap-[20px] p-3 cursor-pointer bg-gray-700">
      <img src={chat.image} className="rounded-full w-[60px] h-[60px]" alt="" />
      <div>
        <h2 className="text-white text-lg font-bold h-[30px]">
          {chat.chatName}
        </h2>
        <p className="text-gray-500 font-semibold overflow-hidden h-[25px]">
          {chat.messages.message}
        </p>
      </div>
    </div>
  );
};

export default Chat;
