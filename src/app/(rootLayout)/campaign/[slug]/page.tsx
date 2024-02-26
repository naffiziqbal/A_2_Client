"use client";
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
    <div className="w-full h-full p-3 lg:container mx-auto flex  md:flex-row flex-col gap-5 justify-between ">
      <section className="relative max-w-fit ">
        <Image
          className="rounded-lg"
          src={image}
          alt="image"
          width={800}
          height={800}
        />
        <div className="absolute bottom-0 w-full z-50 backdrop-blur-sm h-fit p-3">
          <button
            onClick={() => handleClick(_id)}
            className={`px-3  py-2 rounded-md text-white ${
              completeDonation
                ? "bg-gray-400  cursor-not-allowed pointer-events-none"
                : "bg-gradient-to-br from-orange-400 to-red-500"
            }`}
          >
            {completeDonation ? "Fund Raised" : "Donate Now"}
          </button>
          {/*  Disable Button if Fund is Raised 100% */}
        </div>
      </section>
      <section className="mt-12 w-full leading-1 max-w-screen-md">
        <div>
          <h3 className="text-2xl">{title}</h3>
          <section className="my-6 flex justify-between">
            <h2 className="">
              Total Raised $
              <span className="bg-gradient-to-br from-orange-400 to-red-500 bg-clip-text text-transparent font-bold">
                {" "}
                {campaignDonation
                  ?.map((data: IDonation) => data?.donationAmount)
                  .reduce((a, b) => a + b, 0)}
              </span>
            </h2>
            <h2 className="">
              Amount Left To raise:{" "}
              <span className="bg-gradient-to-br from-orange-400 to-red-500 bg-clip-text text-transparent font-bold">
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
          <div className="flex gap-3 mt-3 max-h-96 overflow-y-auto">
            <table className="w-full ">
              <tbody>
                <tr className=" divide-x-2 border">
                  <th>Index</th>
                  <th>Donor Name</th>
                  <th>Donation Amount</th>
                </tr>
                {campaignDonation?.map(
                  (data: IDonation, idx: number) =>
                    data && (
                      <tr
                        key={data?._id}
                        className=" divide-x-2 text-center border my-2 [&:nth-child(even)]:bg-orange-400 bg-red-400 text-white"
                      >
                        <td>{idx + 1}</td>
                        <td>{data?.donorName}</td>
                        <td>{data?.donationAmount}</td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
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
