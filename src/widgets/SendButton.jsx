import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const SendButton = () => {
  return (
    <button className="border-none bg-none ml-3 mr-10">
      <AiOutlineSend className="text-2xl text-white" />
    </button>
  );
};

export default SendButton;
