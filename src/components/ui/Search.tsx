"use client";

import { ICampaign, ICampaignProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiSearchCircle } from "react-icons/hi";

const Search = ({ data }: ICampaignProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<object[]>([]);
  // console.log(data);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term.toLowerCase());
    // Perform search and update results
    const results = data.filter((item: ICampaign) =>
      item?.category
        .toLowerCase()
        .includes(term || term.toLowerCase() || term.toUpperCase())
    );
    setSearchResults(results);
  };
  return (
    <div>
      <div className="mt-6 w-full flex flex-row">
        <input
          className="p-3 rounded-l-lg border outline-none bg-transparent w-full "
          type="text"
          name="search"
          onChange={handleSearch}
          placeholder="Search Category....."
        />
        <HiSearchCircle className="w-16  h-16 bg-gradient-to-tr  from-orange-600 to-red-500 p-3 rounded-r-lg border border-transparent cursor-pointer" />
      </div>
      {searchTerm.length > 0 && (
        <div className="bg-white w-full mt-3 p-3 rounded-md shadow-xl text-black max-h-96 overflow-y-auto">
          {searchResults.length
            ? searchResults.map((data: any) => (
                <Link
                  href={`/campaign/${data._id}`}
                  className="flex items-center gap-3 border  min-h-fit duration-300 my-3 rounded-lg hover:border-orange-400 hover:shadow-lg"
                  key={data._id}
                >
                  <Image
                    src={data?.image}
                    alt="product-image"
                    width={200}
                    height={200}
                    className="w-fit h-32 object-cover rounded-tl-lg rounded-bl-lg duration-300"
                  />
                  <section className="flex flex-col justify-start items-start">
                    <p>{data?.title}</p>
                    <p className="text-wrap text-start font-normal">
                      {data?.description?.length > 100
                        ? data?.description?.slice(0, 100) + "...."
                        : data?.description}
                    </p>
                  </section>
                </Link>
              ))
            : "No Data Found"}
        </div>
      )}
    </div>
  );
};

export default Search;
