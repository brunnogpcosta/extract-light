"use client";

import { createContext, useEffect, useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { getInvoices } from "./services";

export const InvoicesContext = createContext<IInvoice[]>([]);
interface IInvoice {
  id: string;
  fileName: string;
  clientNumber: string;
  period: string;
  eletricEnergyQty: number;
  eletricEnergyAmount: number;
  eletricEnergyWithoutICMSQty: number;
  eletricEnergyWithoutICMSAmount: number;
  compensedEletricEnergyQty: number;
  compensedEletricEnergyAmount: number;
  publicContribute: number;
}

interface IWrapperPage {
  pages: React.ReactNode;
}



const WrapperPage: React.FC<IWrapperPage> = ({ pages }) => {
  const [searchTextInput, setSearchTextInput] = useState("");
  const [invoices, setInvoices] = useState<IInvoice[]>([]);

  useEffect(() => {
    getInvoices(searchTextInput)
      .then((response: any) => {
        setInvoices(response.data.data);
      }
      )
      .catch((error: any) => {
        console.log(error);
      });
  }, [searchTextInput])

  
  return (
    <InvoicesContext.Provider value={invoices}>
      <Header setSearchInput={(text) => setSearchTextInput(text)} />
      <div className="flex sm:flex-row flex-col">
        <Menu />
        {pages}
      </div>
    </InvoicesContext.Provider>
  );
};

export default WrapperPage;


