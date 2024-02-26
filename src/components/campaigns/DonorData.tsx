import { IDonation, IDonationProps } from "@/types/types";
import React from "react";

const DonorData = ({ data }: IDonationProps) => {
  const campaignDonation = data;

  return (
    <div>
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
                    <td>$ {data?.donationAmount}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorData;
