"use client";
import Loading from "@/components/ui/Loading";
import { ContextProvider } from "@/helper/context";
import { IRegistrationInputs } from "@/types/types";
import { AxiosError } from "axios";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Registration = () => {
  const router = useRouter();
  const { loading, setLoading, createUser, setUser } =
    useContext(ContextProvider);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationInputs>();

  const handleForm: SubmitHandler<IRegistrationInputs> = async (data) => {
    setLoading(true);
    // console.log(data);
    const userData = {
      email: data.email,
      password: data.password,
      role: "user",
    };

    try {
      const user = await createUser({
        name: data.name,
        email: data.email,
        password: data.password,
        role: "user",
      });
      if (user.success) {
        setUser(user?.data?.user);
        Cookies.set("uid", user?.data?.user?._id);
        Cookies.set("token", user?.data?.token);
        Swal.fire({
          icon: "success",
          title: user.message,
        });
        setLoading(false);
        router.replace("/");
      }
      // console.log(user);
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: err?.response?.data?.error,
      });
      console.log(err.response.data);
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl w-full md:w-1/2 border h-fit p-3 bg-gray-50 rounded">
      <h1 className="text-center my-6 text-xl font-bold bg-gradient-to-br from-orange-400  to-red-400 bg-clip-text text-transparent">
        Register New User
      </h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className="my-3">
          <label htmlFor="userName" className="leading-8">
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter You Full Name"
              className="border w-full p-2 rounded-md outline-dashed focus:outline-orange-400 outline-none"
            />
          </label>
        </div>
        <div className="my-3">
          <label htmlFor="email" className="leading-8">
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="border w-full p-2 rounded-md outline-dashed focus:outline-orange-400 outline-none"
            />
          </label>
        </div>
        <div className="my-3">
          <label htmlFor="password" className="leading-8">
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter a password"
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
        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link className="text-orange-400 underline" href={"/login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
