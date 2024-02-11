"use client";
import { ILoginInputs, IRegistrationInputs } from "@/types/types";
import axios from "axios";
import { createContext, useState } from "react";
import Cookies from "js-cookie";
export const ContextProvider = createContext<any>({});

const UserContext = ({ children }: { children: any }) => {
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const createUser = async ({
    email,
    password,
    name,
    role,
  }: IRegistrationInputs) => {
    const response = axios.post(
      "https://donation-server-six.vercel.app/api/v1/user/create",
      { email, password, name, role }
    );
    const { data } = await response;
    return data;
  };

  const login = async ({ email, password }: ILoginInputs) => {
    const response = axios.post(
      "https://donation-server-six.vercel.app/api/v1/user/login",
      { email, password }
    );
    const data = (await response).data;
    return data;
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("uid");
  };

  const value = {
    user,
    login,
    loading,
    setLoading,
    setUser,
    createUser,
    logout,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export default UserContext;
