"use client";

import { createContext, useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";

export const ClientNumberSearchContext = createContext("");

interface IWrapperPage {
  pages: React.ReactNode;
}

const WrapperPage: React.FC<IWrapperPage> = ({ pages }) => {
  const [searchTextInput, setSearchTextInput] = useState("");

  return (
    <ClientNumberSearchContext.Provider value={searchTextInput}>
      <Header setSearchInput={(text) => setSearchTextInput(text)} />
      <div className="flex sm:flex-row flex-col">
        <Menu />
        {pages}
      </div>
    </ClientNumberSearchContext.Provider>
  );
};

export default WrapperPage;
