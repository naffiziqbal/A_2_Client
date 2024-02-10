import CampaignList from "@/components/campaigns/CampaignList";
import Banner from "@/components/ui/Banner";
import getCampaigns from "@/utils/getCampaigns";
import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";

const page = async () => {
  const session = await getServerSession(options);
  console.log(session);
  const { data } = await getCampaigns(10);

  return (
    <div>
      <Banner />
      <CampaignList data={data} />
    </div>
  );
};

export default page;
