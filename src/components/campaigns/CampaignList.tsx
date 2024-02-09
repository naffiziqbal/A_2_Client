import { ICampaign, ICampaignProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CampaignList = async ({ data }: ICampaignProps) => {
  // console.log(data);

  return (
    <>
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 items-center md:mt-16 mt-8 rounded-lg gap-5 p-3">
        {data?.map((camp: ICampaign) => (
          <Link
            key={camp?._id}
            href={`/campaign/${camp?._id}`}
            className="rounded-lg border p-3 overflow-hidden  h-auto hover:scale-105 duration-300 hover:shadow-2xl"
          >
            <Image src={camp?.image} width={600} height={300} alt="image" />
            <section className="mt-6">
              <p className="border rounded-md my-4 w-fit bg-neutral-50 text-black px-4 text-sm">
                {camp?.category} Health
              </p>
              <section className="flex flex-row justify-between gap-3 leading-10">
                <p className="font-bold max-w-3/4">{camp?.title}</p>
                <p>{camp?.amount}</p>
              </section>
              <p className="text-wrap">
                {camp?.description?.length > 100
                  ? camp?.description?.slice(0, 100) + "...."
                  : camp?.description}
              </p>
            </section>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center my-12">
        <Link
          href={`/campaign`}
          className=" border px-8 py-2 rounded-md uppercase font-semibold bg-gradient-to-br from-orange-400 to-red-400 duration-300 hover:scale-110 text-white"
        >
          See All
        </Link>
      </div>
    </>
  );
};

export default CampaignList;
