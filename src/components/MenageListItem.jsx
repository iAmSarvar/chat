import React from "react";
import ToggleButton from "../widgets/ToggleButton";

const MenageListItem = ({ color, icon, title, children }) => {
  return (
    <li className=" flex items-center justify-between cursor-pointer px-8 hover:bg-gray-700 py-2">
      <div className="flex gap-[20px] items-center">
        <button className={`${color} p-2 rounded-md`}>{icon}</button>
        <p className="font-bold">{title}</p>
      </div>
      {children ? children : <></>}
    </li>
  );
};

export default MenageListItem;
