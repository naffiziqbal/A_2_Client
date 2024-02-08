import Image from "next/image";
import image from "../asset/3804918.jpg";
import React from "react";
import { redirect } from "next/navigation";

const error = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={image} alt="not-found" height={500} width={500} />
    </div>
  );
};

export default error;
