"use client";

import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import "./style.css";

const invoices = [
  {
    id: "1",
    period: "JUN/2023",
  },
  {
    id: "2",
    period: "MAI/2023",
  },
  {
    id: "3",
    period: "DEX/2023",
  },
  {
    id: "4",
    period: "NOV/2023",
  },
  {
    id: "5",
    period: "NOV/2023",
  },
  {
    id: "6",
    period: "NOV/2023",
  },
  {
    id: "7",
    period: "NOV/2023",
  },
  {
    id: "8",
    period: "NOV/2023",
  },
  {
    id: "9",
    period: "NOV/2023",
  },
];

const Faturas = () => {
  const [vibratingId, setVibratingId] = useState('');


  return (
    <div className="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8">
      {invoices.map((inv) => (
        <div
          key={inv.id}
          className="cursor-pointer bg-[#1E1E22] min-w-[200px] h-[200px] sm:mx-8 mb-8 sm:mb-0 rounded-md p-4 flex flex-col items-center justify-center"
          onMouseEnter={() => setVibratingId(inv.id)}
        >
          <FaFileDownload
            size={40}
            className={`text-[#15D47B] mb-4 ${vibratingId === inv.id ? "vibrate" : ""}`}
          />
          <p>{inv.period}</p>
        </div>
      ))}
    </div>
  );
};

export default Faturas;
