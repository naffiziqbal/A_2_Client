import Image from "next/image";
import banner from "../../asset/banner.png";
import style from "./Banner.module.css";
import Search from "./Search";
import getCampaigns from "@/utils/getCampaigns";
const Banner = async () => {
  const { data } = await getCampaigns(null);

  return (
    <div>
      <div className={style.bg}></div>
      <div className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-2/4  text-white h-fit w-full text-center md:w-1/2 p-3 font-bold flex flex-col justify-center items-center">
        <h3 className="text-4xl">
          Help Others In Need Some other will help You in Need
        </h3>
        <Search data={data} />
        {/* <SearchResult data={data} /> */}
      </div>
    </div>
  );
};

export default Banner;
