import React, { useRef, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import { motion } from "framer-motion";
import Drawer from "./Drawer";
import Backdrop from "../widgets/Backdrop";
import { UserAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { logOut } = UserAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[80px] h-100 bg-gray-800 flex flex-col justify-between items-center">
      {isOpen && <Backdrop setIsOpen={setIsOpen} />}
      <Drawer setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="flex flex-col items-center w-100 gap-[2px]">
        <div className="w-[80px] pt-5 flex flex-col items-center justify-center py-3 hover:bg-gray-900">
          <AiOutlineMenu
            onClick={() => setIsOpen(true)}
            className="text-4xl text-white cursor-pointer"
          />
        </div>
        <div className="w-[80px] flex flex-col items-center justify-center py-3 bg-gray-900 hover:bg-gray-900">
          <AiOutlineMessage className="text-4xl text-white cursor-pointer" />
          <p className="text-white text-sm">Chats</p>
        </div>
      </div>

      <div className="w-[80px] flex flex-col items-center justify-center py-3 hover:bg-gray-900">
        <AiOutlineLogout
          onClick={() => logOut()}
          title="Log Out"
          className="text-4xl text-white cursor-pointer"
        />
        <p className="text-white text-sm">Log out</p>
      </div>
    </div>
  );
};

export default Sidebar;
