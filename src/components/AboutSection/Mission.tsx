import Image from "next/image";
import React from "react";
import image from "../../asset/sanjoy-sadhukhan-WhE7KK-HPmY-unsplash.jpg";
import Link from "next/link";

const Mission = () => {
  return (
    <div className="p-3 m mt-6">
      <div className="flex md:flex-row-reverse flex-col  lg:container mx-auto  md:justify-center items-center gap-5 relative">
        <div className=" md:w-1/2 rounded flex overflow-hidden z-50 bg-white">
          <Image
            src={image}
            alt="Image 1"
            width={400}
            height={400}
            className=" min-h-[30rem] max-h-[40rem] object-cover w-fit mix-blend-luminosity hover:mix-blend-normal duration-300 transition-all"
          />
        </div>
        <div className="md:w-1/2 py-8 z-50">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl">
            The Institute for Food and Development Policy, better known as Food
            First, enMissions a world in which all people have access to
            healthy, ecologically produced, and culturally appropriate food.
          </p>
          <p className="text-lg my-6 mb-12">
            After 40 years of analysis of the global food system, we know that
            making this Mission a reality involves more than technical solutions
            — it requires action and political transformation. That’s why Food
            First supports activists, social movements, alliances, and
            coalitions working for systemic change.{" "}
          </p>
          <Link
            className=" px-6 bg-gradient-to-br from-orange-400 to-red-500 p-3 text-white rounded-md font-bold shadow-md hover:shadow-lg hover:shadow-slate-500 duration-300 absolute bottom-0"
            href={"/campaign/create-campaigns"}
          >
            Create Campaigns
          </Link>
        </div>
        <div className="shape_mission absolute md:top-1/2 md:left-0 bottom-10 "></div>
      </div>
    </div>
  );
};

export default Mission;
