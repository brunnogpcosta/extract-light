"use client";

import React, { useContext, useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";

import "./style.css";
import { InvoicesContext } from "../wrapperPage";
import { getDownloadInvoice, getInvoices } from "../services";
import EmptyState from "../components/emptyState";
import Loading from "../components/loading";

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

const Faturas = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [vibratingId, setVibratingId] = useState("");

  const invoices = useContext(InvoicesContext);
  
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : invoices.length ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8"
        >
          {invoices.map((inv) => (
            <a href={getDownloadInvoice(inv.fileName)} target="_self" key={inv.id}>
              <motion.div
                variants={item}
                className="cursor-pointer bg-[#1E1E22] min-w-[200px] h-[200px] sm:mx-8 mb-8 sm:mb-0 rounded-md p-4 flex flex-col items-center justify-center"
                onMouseEnter={() => setVibratingId(inv.id)}
              >
                <FaFileDownload
                  size={40}
                  className={`text-[#15D47B] mb-4 ${
                    vibratingId === inv.id ? "vibrate" : ""
                  }`}
                />
                <p>{inv.period}</p>
                <p>{inv.clientNumber}</p>
              </motion.div>
            </a>
          ))}
        </motion.div>
      ) : (
        <EmptyState />
      )}
    </>
  );
};

export default Faturas;
