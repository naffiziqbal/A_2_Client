"use client";
import DonationBtn from "@/components/campaigns/DonationBtn";
import DonorData from "@/components/campaigns/DonorData";
import DonationModal from "@/components/shared/Modal/DonationModal";
import { ICampaign, IDonation } from "@/types/types";
import { getCampaignDonation } from "@/utils/getCampaignDonation";
import getSingleCampaign from "@/utils/getSingleCampaign";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Campaign = ({ params }: { params: { slug: string } }) => {
  const [completeDonation, setCompleteDonation] = useState<boolean>(false); // Donation State
  const [modalOpen, setModalOpen] = useState<boolean>(false); //handle Modal
  const [campaignDonation, setCampaignDonation] = useState([]); // Set Campaign Donation
  const [data, setData] = useState<any>({}); // Campaign Details
  const { _id, description, image, title }: ICampaign = data;

  // Open Modal
  const handleClick = (id: string) => {
    setModalOpen(true);
  };

  // Get Campaign Details
  useEffect(() => {
    const getCampaign = async () => {
      const { data } = await getSingleCampaign(params.slug as string);
      setData(data);
    };
    getCampaign();
  }, [params.slug]);

  // get Campaign Donation Details
  useEffect(() => {
    const getDonationDetails = async (_id: string) => {
      const { data } = await getCampaignDonation(_id);
      setCampaignDonation(data);
    };
    getDonationDetails(_id);
  }, [_id, campaignDonation]);

  // Check if the campaign is fully funded, If true set the state to true
  useEffect(() => {
    if (
      campaignDonation
        ?.map((data: IDonation) => data?.donationAmount)
        .reduce((a, b) => a + b, 0) === data?.amount
    ) {
      setCompleteDonation(true);
    }
  }, [campaignDonation, data]);

  return (
    <div className="relative w-full h-full p-3 lg:container mx-auto flex  md:flex-row flex-col gap-5 justify-between ">
      <section className="relative max-w-fit ">
        <Image
          className="rounded-lg"
          src={image}
          alt="image"
          width={800}
          height={800}
        />
        {/*  Donation Button */}
        <DonationBtn
          _id={_id}
          setModalOpen={setModalOpen}
          completeDonation={completeDonation}
        />
      </section>
      <section className="mt-12 w-full leading-1 max-w-screen-md">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <section className="my-6 flex justify-between">
            <h2 className="">
              Total Raised: $
              <span className="bg-gradient-to-br from-orange-400 to-red-500 bg-clip-text text-transparent font-bold">
                {campaignDonation
                  ?.map((data: IDonation) => data?.donationAmount)
                  .reduce((a, b) => a + b, 0)}
              </span>
            </h2>
            <h2 className="">
              Amount Left To raise:{" "}
              <span className="bg-gradient-to-br from-orange-400 to-red-500 bg-clip-text text-transparent font-bold">
                $
                {data?.amount -
                  campaignDonation
                    ?.map((data: IDonation) => data?.donationAmount)
                    .reduce((a, b) => a + b, 0) <
                0
                  ? 0
                  : data?.amount -
                    campaignDonation
                      ?.map((data: IDonation) => data?.donationAmount)
                      .reduce((a, b) => a + b, 0)}
              </span>
              {/* The expression inside the curly braces is calculating the remaining amount of a campaign donation. It does this by subtracting the total amount of all donations from the total amount of the campaign. if Raised Amount is less than 0 it will return 0 else remaining amount */}
            </h2>
          </section>
          <h2 className="text-xl">Description</h2>
          <p>{description}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl">Let&apos; Thank Warm Hearted Persons</h2>
          <DonorData data={campaignDonation} />
        </div>
      </section>

      {/*  Modal */}
      <DonationModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        data={data}
      />
    </div>
  );
};

export default Campaign;
