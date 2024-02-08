"use client";

import { ICampaign, ICampaignProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiSearchCircle } from "react-icons/hi";

const Search = ({ data }: ICampaignProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<object[]>([]);
  console.log(data);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    console.log(term);
    setSearchTerm(term.toLowerCase());
    // Perform search and update results
    const results = data.filter((item: ICampaign) =>
      item?.title
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
        {/* <input
            type="submit"
            className="w-1/4 bg-gradient-to-tr  from-orange-600 to-red-500 p-3 rounded-r-lg border border-transparent cursor-pointer"
          /> */}
      </div>
      {searchTerm.length > 0 && (
        <div className="bg-white w-full mt-3 p-3 rounded-md shadow-xl text-black max-h-96 overflow-y-auto">
          {searchResults.length
            ? searchResults.map((data: any) => (
                <Link
                  href={`/campaign/${data._id}`}
                  className="flex items-center gap-3 border  min-h-fit duration-700"
                  key={data._id}
                >
                  <Image
                    src={data?.image}
                    alt="product-image"
                    width={100}
                    height={100}
                  />
                  <section className="flex flex-col justify-start items-start">
                    <p>{data?.title}</p>
                    <p>{data?.description}</p>
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
