"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextProvider = createContext<any>({});

const UserContext = ({ children }: { children: any }) => {
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const createUser = () => {};
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const response = axios.post(
      "https://donation-server-six.vercel.app/api/v1/user/login",
      { email, password }
    );
    const data = (await response).data;
    return data;
  };

  const value = {
    user,
    login,
    loading,
    setLoading,
    setUser,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export default UserContext;
