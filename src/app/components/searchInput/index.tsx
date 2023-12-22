"use client";

import React, { useEffect, useState } from "react";
import { FaEraser } from "react-icons/fa";

interface ISearchInput {
  getString: (text: string) => void;
}

const SearchInput: React.FC<ISearchInput> = ({ getString }) => {
  const [searchText, setSearchText] = useState("");
  const [enteredText, setEnteredText] = useState("")

  const handleSearchInput = (text: string) => {
    setSearchText(text);
  };

  const clearSearch = () => {
    getString('');
    setSearchText('');
    setEnteredText('')
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getString(searchText);
      setEnteredText(searchText)
    }
  };

  return (
    <div className="flex">
      {enteredText && (
        <div className="flex items-center bg-[#3C3C43] p-2 rounded-md mr-4">
          <p className="mr-2 px-2">{enteredText}</p>
          <span className="cursor-pointer" onClick={clearSearch}>
            <FaEraser />
          </span>
        </div>
      )}
      <div className="rounded-md w-full sm:w-auto">
        <input
          type="text"
          onChange={(e) => handleSearchInput(e.target.value)}
          onKeyPress={handleKeyPress}
          value={searchText}
          placeholder="Nº do cliente"
          className="border-0 bg-[#3C3C43] p-2 rounded-md text-[#FFFFFF] w-full"
        />
      </div>
    </div>
  );
};

export default SearchInput;