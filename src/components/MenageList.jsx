import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import MenageListItem from "./MenageListItem";
import ToggleButton from "../widgets/ToggleButton";

const MenageList = () => {
  const list = [
    {
      color: "bg-lime-600",
      title: "New Group",
      icon: <HiUserGroup />,
    },
    {
      color: "bg-orange-400",
      title: "Saved Messages",
      icon: <BsFillBookmarkFill />,
    },
    {
      color: "bg-purple-500",
      title: "Settings",
      icon: <AiOutlineSetting />,
    },
    {
      color: "bg-emerald-600",
      title: "Night Mode",
      icon: <BsFillMoonFill />,
      children: <ToggleButton />,
    },
  ];
  return (
    <ul className="flex flex-col">
      {list.map((item, index) => {
        return (
          <MenageListItem
            key={index}
            icon={item.icon}
            title={item.title}
            color={item.color}
            children={item.children}
          />
        );
      })}
    </ul>
  );
};

export default MenageList;
