import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Fuse from "fuse.js";
//
import { getGovernmentWebsites } from "../utils/apis";

/**
 *
 */
export default function GovernmentWebsitesPage() {
  const { data } = useQuery({
    queryKey: ["get-government-websites"],
    queryFn: async () => {
      return getGovernmentWebsites();
    },
    initialData: [],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const fuseOptions = {
    keys: ["name"],
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
    <div>
      <p className="text-center text-3xl">Government Websites in Nepal</p>
      <div className="my-10 flex justify-center">
        <input
          type="text"
          placeholder="Search for govenment website..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="focus:ring-hightlght w-full max-w-lg rounded-sm bg-gray-800 px-3 py-2 text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-highlight"
        />
      </div>

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
                rel="noopener"
                target="_blank"
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
