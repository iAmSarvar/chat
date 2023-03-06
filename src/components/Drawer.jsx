import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import HorizontalLine from "../widgets/HorizontalLine";
import MenageList from "./MenageList";

const Drawer = ({ setIsOpen, isOpen }) => {
  const { user } = UserAuth();
  const style = {
    left: isOpen ? 0 : "-300px",
    zIndex: 100,
  };
  return (
    <motion.div
      className="flex flex-col w-[300px] h-screen absolute left-0 top-0 bottom-0 bg-slate-800 text-white z-50"
      animate={style}
      exit={style}
      transition={{ ease: "anticipate", duration: 0.5 }}
    >
      <motion.button
        className="text-4xl absolute top-0 right-0 p-3"
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(false)}
      >
        {/* <AiOutlineClose className="text-white text-md" /> */}
      </motion.button>

      <div className="w-100 h-max p-5">
        <img
          className="w-[50px] h-[50px] object-cover rounded-full cursor-pointer"
          src="https://wallpapercave.com/wp/wp7009789.png"
          alt=""
        />
        <h2 className="text-md my-3">{user.email}</h2>
      </div>
      <HorizontalLine />
      <MenageList />
      <div className="absolute bottom-0 flex flex-col justify-start p-5">
        <p className="text-md text-gray-400">Created by Sarvar Sultanov</p>
        <p className="text-sm text-gray-500">Version 1.0.0</p>
      </div>
    </motion.div>
  );
};

export default Drawer;
