import React from "react";

const Backdrop = ({ setIsOpen }) => {
  return (
    <div
      className="flex fixed top-0 bottom-0 left-0 right-0 bg-black opacity-[.4] z-0"
      onClick={() => setIsOpen(false)}
    ></div>
  );
};

export default Backdrop;
