"use client";
import { ContextProvider } from "@/helper/context";
import { ICampaignInputs } from "@/types/types";
import handleUploadImage from "@/utils/uploadImage";
import axios from "axios";
import Link from "next/link";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loading from "../ui/Loading";

const CreateCampings: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICampaignInputs>();
  const { loading, setLoading, user } = useContext(ContextProvider);

  const formSubmit: SubmitHandler<ICampaignInputs> = async (data) => {
    setLoading(true);
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

  if (!user._id) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>
          Please{" "}
          <Link href={"/login"} className="text-blue-500 underline font-bold">
            Login
          </Link>{" "}
          to Create a Campaign
        </h1>
      </div>
    );
  }
  return (
    <div className=" relative px-3">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-center ">
          <h1 className="relative text-start text-3xl my-6">
            Why Do We Care?{" "}
            <div className="absolute shape_octa top-1/2 left-52 "></div>
          </h1>

          <p className="text-lg">
            we care because we believe that everyone deserves a chance to live.
            We believe that by making a donation, we can make a positive impact
            on the lives of those in need. Donations can provide essential
            resources such as food, shelter, education, and healthcare to
            individuals and communities facing challenges. Whether it&apos;s
            supporting a local charity, contributing to a global cause, or
            helping someone in your own neighborhood, every donation counts.
            It&apos;s a way to show compassion, empathy, and solidarity with
            others. Together, we can create a better world for everyone. So,
            let&apos;s join hands and make a difference through our donations.
          </p>
        </div>

        <div className="absolute shape_penta top-1/2 "></div>
        <div className="absolute shape_hex top-1/2 left-1/2 "></div>
        <div className="absolute shape_tri bottom-0 right-10 "></div>
        <div className="h-full w-full p-3 mt-5 z-50">
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
                  rows={10}
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
                  {...register("amount", {
                    required: true,
                    valueAsNumber: true,
                  })}
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
      </div>
    </div>
  );
};

export default CreateCampings;
