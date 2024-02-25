import Image from "next/image";
import React from "react";
import image1 from "../../asset/muhammad-muzamil-7S9x9US26Ow-unsplash (1).jpg";
import image2 from "../../asset/mohammed-ibrahim-CFHOBqIm7PM-unsplash.jpg";

const Vision = () => {
  return (
    <div className="bg-gradient-to-tr from-orange-500 to-red-500 p-3">
      <div className="flex md:flex-row flex-col  md:container mx-auto  md:justify-center items-center text-white gap-5 relative">
        <div className=" md:w-1/2 rounded flex overflow-hidden z-50">
          <Image
            src={image1}
            alt="Image 1"
            width={400}
            height={400}
            className=" min-h-[30rem] max-h-[40rem] object-cover w-fit rounded-ss-full hover:rounded-ss-none rounded-ee-full hover:rounded-ee-none transition-all duration-500 ease-in-out transform"
          />
        </div>
        <div className="md:w-1/2 py-8 z-50">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-xl">
            The Institute for Food and Development Policy, better known as Food
            First, envisions a world in which all people have access to healthy,
            ecologically produced, and culturally appropriate food.
          </p>
          <p className="text-lg my-6">
            After 40 years of analysis of the global food system, we know that
            making this vision a reality involves more than technical solutions
            — it requires action and political transformation. That’s why Food
            First supports activists, social movements, alliances, and
            coalitions working for systemic change.{" "}
          </p>
        </div>
        <div className="shape absolute bottom-0 animate-pulse right-10 opacity-95"></div>
        <div className="shape absolute top-0 left-10 animate-pulse opacity-95 "></div>
      </div>
    </div>
  );
};

export default Vision;
