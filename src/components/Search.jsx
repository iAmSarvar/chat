import React from "react";

const Search = () => {
  return (
    <form className="w-full h-[70px] p-3">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-[40px] rounded-lg px-5 text-white text-lg bg-slate-600 outline-none border-none"
      />
    </form>
  );
};

export default Search;
