"use client";
import Loading from "@/components/ui/Loading";
import { ContextProvider } from "@/helper/context";
import { ILoginInputs } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
const Login = () => {
  const router = useRouter();
  const { user, loading, setLoading, login, setUser } =
    useContext(ContextProvider);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>();

  const handleForm: SubmitHandler<ILoginInputs> = async (data) => {
    setLoading(true);
    try {
      const response = await login({
        email: data.email,
        password: data.password,
      });
      console.log(response);
      if (response.success === true) {
        setUser(response.data.user);
        Cookies.set("uid", response.data.user._id);
        Cookies.set("token", response.data.token);
        Swal.fire({
          icon: "success",
          text: response.message,
        });
        router.back();
      }
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        text: err?.response?.data?.error,
      });
      // console.log(err);
    }
    setLoading(false);
  };
  // console.log(loading, user);
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl w-full md:w-1/2 border h-fit p-3 bg-gray-50 rounded">
      <h1 className="text-center my-6 text-xl font-bold bg-gradient-to-br from-orange-400  to-red-400 bg-clip-text text-transparent">
        Welcome Back
      </h1>
      <form onSubmit={handleSubmit(handleForm)}>
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
          Don&apos; have an account?{" "}
          <Link className="text-orange-400 underline" href={"/registration"}>
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
