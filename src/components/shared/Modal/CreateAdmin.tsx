"use client";
import Loading from "@/components/ui/Loading";
import { ContextProvider } from "@/helper/context";
import axios from "axios";
import React, { ChangeEvent, useContext, useState } from "react";
import Swal from "sweetalert2";

const CreateAdmin = () => {
  const [email, setEmail] = useState("");
  const { adminModal, setAdminModal, loading, user } =
    useContext(ContextProvider);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (email: string) => {
    try {
      const response = axios.patch(
        "https://donation-server-six.vercel.app/api/v1/user/create-admin",
        {
          email,
        }
      );
      const { data } = await response;
      if (data.success) {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        setAdminModal(false);
        setEmail("");
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        text: "No User Found",
      });
    }
  };
  return (
    <div
      className={` absolute bg-slate-300 shadow-md min-w-96 z-50 duration-300 ${
        adminModal
          ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          : "-top-[52rem] left-1/2"
      }`}
    >
      <div className="h-full w-full p-3 mt-5">
        <h1 className="text-center ">Please Enter Desired Email</h1>
        <div className="my-3">
          <label htmlFor="email" className="leading-8">
            <input
              type="email"
              value={email}
              required
              onChange={handleEmailChange}
              placeholder="Enter User Email"
              className="border w-full p-2 rounded-md outline-dashed focus:outline-orange-400 outline-none"
            />
          </label>
        </div>

        {loading ? (
          // <input
          //   type="submit"
          //   className="text-center w-full py-2 bg-gradient-to-br from-orange-400 to-red-400 text-white uppercase font-bold cursor-pointer"
          // />
          <div className="text-center w-full py-2 bg-gradient-to-br from-orange-400 to-red-400 text-white uppercase font-bold flex justify-center items-center cursor-wait">
            <Loading />
          </div>
        ) : (
          <input
            onClick={() => handleSubmit(email)}
            type="submit"
            className="text-center w-full py-2 bg-gradient-to-br from-orange-400 to-red-400 text-white uppercase font-bold cursor-pointer"
          />
        )}
      </div>
      <div
        className="absolute top-5 cursor-pointer right-5 border z-50 p-2 rounded-full w-6 h-6 border-orange-400 text-orange-400 font-extrabold flex text-sm justify-center items-center hover:bg-orange-400 hover:text-white"
        onClick={() => setAdminModal(false)}
      >
        X
      </div>
    </div>
  );
};

export default CreateAdmin;
