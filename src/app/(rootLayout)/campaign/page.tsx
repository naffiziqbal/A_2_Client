"use client";
import Loading from "@/components/ui/Loading";
import { ICampaign } from "@/types/types";
import getCampaigns from "@/utils/getCampaigns";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Campaigns = () => {
  const [limit, setLimit] = useState<number | null>(10);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCampaign = async (limit: number | null) => {
      setLoading(true);
      const { data } = await getCampaigns(limit);
      setData(data);
      setLoading(false);
    };
    getCampaign(limit);
  }, [limit]);

  return (
    <div className="">
      <div className="md:container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center md:mt-16 mt-8  gap-5 p-3">
        {data?.map((camp: ICampaign) => (
          <Link
            key={camp?._id}
            href={`/campaign/${camp?._id}`}
            className="  border p-3 overflow-hidden  duration-300 hover:shadow-2xl min-h-96 rounded-lg h-fit object-contain "
          >
            <Image
              className="h-52 w-full object-cover object-center duration-300 rounded-xl"
              src={camp?.image}
              width={600}
              height={300}
              alt="image"
            />
            <section className="mt-6">
              <p className="border rounded-md my-4 w-fit bg-neutral-50 text-black px-4 text-sm">
                {camp.category ? camp?.category : " no category"}
              </p>
              <section className="flex flex-row justify-between gap-3 leading-10">
                <p className="font-bold max-w-3/4">{camp?.title}</p>
                <p className="">
                  {" "}
                  Amount To Raise:
                  <span className="mx-2 text-orange-400 font-bold">
                    ${camp?.amount}
                  </span>
                </p>
              </section>
              <p className="text-wrap text-sm">
                {camp?.description?.length > 100
                  ? camp?.description?.slice(0, 100) + "...."
                  : camp?.description}
              </p>
            </section>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center my-12">
        <button
          onClick={() => setLimit(null)}
          className=" border px-8 py-2 rounded-md uppercase font-semibold bg-gradient-to-br from-orange-400 to-red-400 duration-300 hover:scale-110 text-white"
        >
          {!loading ? "SEE ALL" : <Loading />}
        </button>
      </div>
    </div>
  );
};

export default Campaigns;
