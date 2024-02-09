"use client";
import { createDonation } from "@/utils/createDonation";
import React, { useState } from "react";
import Swal from "sweetalert2";
const DonationModal = ({ modalOpen, setModalOpen, data }: any) => {
  const [donorName, setDonorName] = useState(""); // Get Input Data
  const [amount, setAmount] = useState(data.amount); // Get Input Data
  const donorId = "23902uisjdlk"; //! Donor Id

  //? Handle User Event
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonorName(e.target.value);
  };

  const handleForm = async (e: any) => {
    e.preventDefault();
    const donationData = {
      donorName,
      donationAmount: parseInt(amount),
      donorId,
      campaignTitle: data.title,
      campaignId: data?._id,
    };
    //? Post Data
    const donation = await createDonation(donationData);
    // console.log(donation);
    if (donation.success) {
      Swal.fire({
        title: donation.message,
        icon: "success",
        text: "You're a Kind Hearted Person 🥹",
      });
      setModalOpen(false);
    }
  };

  return (
    <div
      className={`absolute duration-300 bg-white min-h-[16rem] md:w-1/2 border shadow-xl  p-3 w-3/4 rounded-md ${
        modalOpen
          ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
          : "-top-full left-1/2 -translate-x-1/2 -translate-y-1/2"
      }`}
    >
      <h3 className=" text-center font-semibold">Fill Information</h3>
      <form
        className="flex flex-col justify-center items-center w-full"
        onSubmit={handleForm}
      >
        <div className="w-full">
          <label htmlFor="donatorName" className="leading-10">
            <span>Donor Name</span>
            <input
              className="rounded border w-full px-3 border-orange-400 outline-none"
              type="text"
              name="donatorName"
              onChange={handleNameChange}
            />
          </label>
        </div>

        <div className="w-full">
          <label htmlFor="amount" className="leading-10">
            <span>Donation Amount</span>
            <input
              className="rounded border w-full px-3 border-orange-400 outline-none"
              type="number"
              name="amount"
              onChange={handleAmountChange}
            />
          </label>
        </div>
        <input
          type="submit"
          className="mt-6 w-full bg-gradient-to-br from-orange-400 to-red-400 py-2 rounded text-white font-bold uppercase cursor-pointer"
        />
      </form>
      <span
        onClick={() => setModalOpen(false)}
        className="absolute top-2 right-5 border rounded-full w-8 h-8 flex justify-center items-center border-orange-400 hover:bg-orange-400 duration-300 hover:text-white font-extrabold cursor-pointer text-orange-400"
      >
        X
      </span>
    </div>
  );
};

export default DonationModal;
