"use client";

import { useState } from "react";

const DonationBtn = ({ _id, setModalOpen, completeDonation }: any) => {
  const handleClick = (id: string) => {
    setModalOpen(true);
  };
  return (
    <button
      onClick={() => handleClick(_id)}
      className={`px-3  py-2 rounded-md text-white absolute bottom-0 md:w-1/2 z-50 backdrop-blur-sm h-fit p-3 hover:shadow-2xl shadow-slate-900 duration-300 uppercase font-semibold" ${
        completeDonation
          ? "bg-gray-400  cursor-not-allowed pointer-events-none"
          : "bg-gradient-to-br from-orange-400 to-red-500"
      }`}
    >
      {completeDonation ? "Fund Raised" : "Donate Now"}
      {/*  Disable Button if Fund is Raised 100% */}
    </button>
  );
};

export default DonationBtn;
