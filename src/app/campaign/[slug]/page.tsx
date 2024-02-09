"use client";
import DonationModal from "@/components/shared/Modal/DonationModal";
import { ICampaign, ICampaignProps } from "@/types/types";
import getSingleCampaign from "@/utils/getSingleCampaign";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Campaign = ({ params }: { params: { slug: string } }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [data, setData] = useState<any>({});
  const {
    _id,
    amount,
    category,
    creatorId,
    description,
    image,
    title,
    __v,
  }: ICampaign = data;
  const handleClick = (id: string) => {
    setModalOpen(true);
    console.log(id);
  };
  useEffect(() => {
    const getCampaign = async () => {
      const { data } = await getSingleCampaign(params.slug as string);
      console.log(data);
      setData(data);
    };
    getCampaign();
  }, [params.slug]);

  return (
    <div className="container mx-auto w-full h-full">
      <section className="relative max-w-fit ">
        <Image src={image} alt="image" width={600} height={600} />
        <div className="absolute bottom-0 w-full z-50 backdrop-blur-sm h-fit p-3">
          <button
            onClick={() => handleClick(_id)}
            className="px-3 bg-gradient-to-br from-orange-400 to-red-500 py-2 rounded-md text-white"
          >
            Donate Now
          </button>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="text-2xl">{title}</h3>
        <h2>{amount}</h2>
        <p>{description}</p>
      </section>
      <DonationModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        data={data}
      />
    </div>
  );
};

export default Campaign;
