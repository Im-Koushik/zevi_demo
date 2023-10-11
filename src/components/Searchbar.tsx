import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import TrendCard from "./TrendCard";

const SearchBar = ({ isHome }: { isHome: boolean }) => {
  const [showTrendCard, setShowTrendCard] = useState(false);

  const handleFocus = () => {
    setShowTrendCard(true);
  };

  const handleBlur = () => {
    setShowTrendCard(false);
  };
  return (
    <div className="relative">
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 pl-10 text-2xl border rounded-2xl focus:outline-none"
        placeholder="Search"
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
      />
      <div className="absolute inset-y-0 right-12 flex items-center pl-3 pointer-events-none">
        <RiSearchLine className="w-9 h-9 opacity-40 absolute top-4 right-0" />
      </div>
      <div>{isHome && showTrendCard && <TrendCard />}</div>
    </div>
  );
};

export default SearchBar;
