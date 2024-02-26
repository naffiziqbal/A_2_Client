import { ICampaign } from "@/types/types";
import getCampaigns from "@/utils/getCampaigns";
import Image from "next/image";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";

const page = async () => {
  const { data } = await getCampaigns(null);
  const tableContent = data.map((campaign: ICampaign, idx: number) => (
    <tr
      className="w-full *:h-full *:p-2  text-center flex flex-row  justify-center gap-5 *:w-full  items-center *:flex *:justify-center"
      key={campaign._id}
    >
      <td>
        <Image src={campaign.image} alt="image" width={100} height={100} />
      </td>
      <td>{campaign.title}</td>
      <td className="cursor-pointer">
        <GrUpdate />
      </td>
      <td className="cursor-pointer">
        <BsTrash />
      </td>
    </tr>
  ));
  return (
    <div className="w-full max-h-screen overflow-y-auto mx-auto container">
      <table className="[&>*:nth-child(even)]:bg-slate-200 [&>*:nth-child(even)]:rounded-lg w-full *:p-2 flex flex-col justify-around g-4">
        <tr className="w-full flex flex-row justify-between items-start *:w-full text-center">
          <th>Image</th>
          <th>Name</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        {tableContent}
      </table>
    </div>
  );
};

export default page;
