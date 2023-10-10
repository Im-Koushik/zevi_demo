import React from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 pl-10 text-2xl border rounded-2xl focus:outline-none"
        placeholder="Search"
        required
      />
      <div className="absolute inset-y-0 right-12 flex items-center pl-3 pointer-events-none">
        <RiSearchLine className="w-9 h-9 opacity-40" />
      </div>
    </div>
  );
};

export default SearchBar;
