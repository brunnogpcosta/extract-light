"use client";

import React, { useState } from "react";

interface ISearchInput{
    searchString: string
}

const SearchInput: React.FC<ISearchInput> = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchInput = (text: string) => {
    setTimeout(() => {
      setSearchText(text);
    }, 1000);
  };

  return (
    <div className="rounded-md w-full sm:w-auto">
      <input
        type="text"
        onChange={(e) => handleSearchInput(e.target.value)}
        placeholder="Nº do cliente"
        className="border-0 bg-[#3C3C43] p-2 rounded-md text-[#FFFFFF] w-full"
      />
    </div>
  );
};

export default SearchInput;
