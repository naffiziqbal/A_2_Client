"use client";
import DonationModal from "@/components/shared/Modal/DonationModal";
import { ICampaign, ICampaignProps, IDonation } from "@/types/types";
import { getCampaignDonation } from "@/utils/getCampaignDonation";
import getSingleCampaign from "@/utils/getSingleCampaign";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Campaign = ({ params }: { params: { slug: string } }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false); //handle Modal
  const [campaignDonation, setCampaignDonation] = useState([]); // Set Campaign Donation
  const [data, setData] = useState<any>({}); // Campaign Details
  const { _id, description, image, title }: ICampaign = data;

  //? Open Modal
  const handleClick = (id: string) => {
    setModalOpen(true);
  };

  //? Get Campaign Details
  useEffect(() => {
    const getCampaign = async () => {
      const { data } = await getSingleCampaign(params.slug as string);
      setData(data);
    };
    getCampaign();
  }, [params.slug]);

  //? get Campaign Donation Details
  useEffect(() => {
    const getDonationDetails = async (_id: string) => {
      const { data } = await getCampaignDonation(_id);
      setCampaignDonation(data);
    };
    getDonationDetails(_id);
  }, [_id, campaignDonation]);

  return (
    <div className="container mx-auto w-fit h-full p-3">
      <section className="relative max-w-fit ">
        <Image
          className="rounded-lg"
          src={image}
          alt="image"
          width={800}
          height={800}
          layout="fixed"
        />
        <div className="absolute bottom-0 w-full z-50 backdrop-blur-sm h-fit p-3">
          <button
            onClick={() => handleClick(_id)}
            className="px-3 bg-gradient-to-br from-orange-400 to-red-500 py-2 rounded-md text-white"
          >
            Donate Now
          </button>
        </div>
      </section>
      <section className="mt-12 w-full leading-10">
        <h3 className="text-2xl">{title}</h3>
        <h2>
          Total Raised $
          <span className="bg-gradient-to-br from-orange-400 to-red-500 bg-clip-text text-transparent font-bold">
            {" "}
            {campaignDonation
              ?.map((data: IDonation) => data?.donationAmount)
              .reduce((a, b) => a + b, 0)}
          </span>
        </h2>
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
