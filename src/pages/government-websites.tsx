import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Fuse from "fuse.js";
//
import { getGovernmentWebsites } from "../utils/apis";

/**
 *
 */
export default function GovernmentWebsitesPage() {
  const { data, isFetching } = useQuery({
    queryKey: ["get-government-websites"],
    queryFn: async () => {
      return getGovernmentWebsites();
    },
    initialData: [],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const fuseOptions = {
    keys: ["name", "description"],
    threshold: 0.3,
    ignoreLocation: true,
  };

  const fuse = new Fuse(data, fuseOptions);

  const searchWebsites = (query: string) => {
    const results = fuse.search(query);
    const filteredData = results.map((result) => result.item);
    return filteredData;
  };

  const filteredData = searchQuery ? searchWebsites(searchQuery) : data || [];

  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-3xl">Government websites in Nepal</p>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mt-5 rounded-sm px-3 py-2 text-black"
      />

      {isFetching && <p>Loading data...</p>}

      <div className="mt-10 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-10">
        {filteredData.map((govWebsite) => (
          <div
            key={govWebsite.name}
            className="group col-span-1 flex flex-col justify-between rounded-sm bg-primary-400 p-3 transition-all duration-200 hover:scale-[1.02] hover:bg-primary-300"
          >
            <div>
              <div className="flex justify-center">
                <img
                  src="/nepalLogo.png"
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover"
                />
              </div>

              <p className="my-3 flex cursor-pointer justify-center text-center text-lg group-hover:underline">
                {govWebsite.name}
              </p>

              <p className="my-5 text-center text-sm">
                {govWebsite.description}
              </p>
            </div>

            <p className="mb-3 mt-10 text-center">
              <a
                href={govWebsite.url}
                className="rounded-sm bg-highlight px-3 py-2 text-gray-900"
              >
                Visit website
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
