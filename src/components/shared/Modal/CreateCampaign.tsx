"use client";
import Loading from "@/components/ui/Loading";
import { ContextProvider } from "@/helper/context";
import { ICampaign, ICampaignInputs } from "@/types/types";
import handleUploadImage from "@/utils/uploadImage";
import axios from "axios";
import React, { ChangeEvent, useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateCampaign = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICampaignInputs>();
  const { campaignModal, setCampaignModal, loading, setLoading, user } =
    useContext(ContextProvider);

  const formSubmit: SubmitHandler<ICampaignInputs> = async (data) => {
    // setLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const imgBB = (await handleUploadImage(formData)) as any;
    if (imgBB.success) {
      try {
        const response = axios.post(
          "https://donation-server-six.vercel.app/api/v1/campaign/create",
          {
            title: data.title,
            description: data.description,
            amount: data.amount,
            image: imgBB.data.url,
            creatorId: user._id,
            category: data.category,
          }
        );
        const { data: res } = await response;
        // console.log(res);
        if (res.success) {
          Swal.fire({
            icon: "success",
            text: res.message,
          });
          setCampaignModal(false);
        }
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          text: error.message,
        });
      }
    }
    // console.log(imgBB);
  };
  return (
    <div
      className={` absolute bg-slate-300 shadow-md min-w-96 w-fit z-50 duration-300 ${
        campaignModal
          ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          : "-top-[52rem] left-1/2"
      }`}
    >
      <div className="h-full w-full p-3 mt-5">
        <h1 className="text-center font-bold">
          Please Enter Campaign Information
        </h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="my-3">
            <label htmlFor="title" className="leading-8">
              <input
                type="text"
                placeholder="Enter Title"
                {...register("title", { required: true })}
                className="border w-full p-2 rounded-md outline-dashed focus:outline-orange-400 outline-none"
              />
            </label>
          </div>
          <div className="my-3">
            <label htmlFor="description" className="leading-8">
              <textarea
                placeholder="Enter Description"
                {...register("description", { required: true })}
                className="border w-full p-2 rounded-md outline-dashed focus:outline-orange-400 outline-none"
              />
            </label>
          </div>
          <div className="my-3">
            <label htmlFor="amount" className="leading-8">
              <input
                placeholder="Enter Initial Amount"
                type="number"
                {...register("amount", { required: true, valueAsNumber: true })}
                className="border w-full p-2 rounded-md outline-dashed focus:outline-orange-400 outline-none"
              />
            </label>
          </div>
          <div className="my-3">
            <label htmlFor="category" className="leading-8">
              <input
                placeholder="Enter Category"
                type="text"
                {...register("category", { required: true })}
                className="border w-full p-2 rounded-md outline-dashed focus:outline-orange-400 outline-none"
              />
            </label>
          </div>
          <div className="my-3">
            <label htmlFor="image" className="leading-8">
              <input
                type="file"
                {...register("image", { required: true })}
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
              type="submit"
              className="text-center w-full py-2 bg-gradient-to-br from-orange-400 to-red-400 text-white uppercase font-bold cursor-pointer"
            />
          )}
        </form>
      </div>
      <div
        className="absolute top-5 cursor-pointer right-5 border z-50 p-2 rounded-full w-6 h-6 border-orange-400 text-orange-400 font-extrabold flex text-sm justify-center items-center hover:bg-orange-400 hover:text-white"
        onClick={() => setCampaignModal(false)}
      >
        X
      </div>
    </div>
  );
};

export default CreateCampaign;
