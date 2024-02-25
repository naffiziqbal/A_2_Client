import Mission from "@/components/AboutSection/Mission";
import Vision from "@/components/AboutSection/Vision";
import CampaignList from "@/components/campaigns/CampaignList";
import Banner from "@/components/ui/Banner";
import getCampaigns from "@/utils/getCampaigns";
import React from "react";

const page = async () => {
  const { data } = await getCampaigns(10);
  return (
    <div>
      <Banner />
      <Vision />
      <Mission />
      <CampaignList data={data} />
    </div>
  );
};

export default page;
