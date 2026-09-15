import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { HiSearch, HiExternalLink } from "react-icons/hi";

import { getGovernmentWebsites } from "../utils/apis";

function getCategory(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("ministry") || n.includes("mantralaya")) return "Ministries";
  if (
    n.includes("municipality") ||
    n.includes("metropolitan") ||
    n.includes("rural municipality") ||
    n.includes("sub-metropolitan")
  )
    return "Local Government";
  if (n.includes("pradesh") || n.includes("province"))
    return "Province Government";
  if (n.includes("police") || n.includes("army") || n.includes("armed"))
    return "Security & Defense";
  if (n.includes("court") || n.includes("judiciary")) return "Judiciary";
  if (
    n.includes("university") ||
    n.includes("education") ||
    n.includes("college") ||
    n.includes("school") ||
    n.includes("institute") ||
    n.includes("hospital") ||
    n.includes("health")
  )
    return "Education & Health";
  if (
    n.includes("bank") ||
    n.includes("finance") ||
    n.includes("revenue") ||
    n.includes("customs") ||
    n.includes("tax")
  )
    return "Finance & Revenue";
  if (
    n.includes("commission") ||
    n.includes("parliament") ||
    n.includes("election") ||
    n.includes("sansad")
  )
    return "Constitutional Bodies";
  return "Other Bodies";
}

export default function GovernmentWebsitesPage() {
  const { data } = useQuery({
    queryKey: ["get-government-websites"],
    queryFn: async () => {
      return getGovernmentWebsites();
    },
    initialData: [],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const allItems = data || [];

  const allCategories = useMemo(
    () => [...new Set(allItems.map((item) => getCategory(item.name)))].sort(),
    [allItems],
  );

  const fuse = useMemo(
    () =>
      new Fuse(allItems, {
        keys: ["name"],
        threshold: 0.3,
        ignoreLocation: true,
      }),
    [allItems],
  );

  const afterSearch = searchQuery
    ? fuse.search(searchQuery).map((r) => r.item)
    : allItems;

  const filteredData =
    activeCategory === "All"
      ? afterSearch
      : afterSearch.filter((item) => getCategory(item.name) === activeCategory);

  return (
    <div className="py-10">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight">
          Government Websites in Nepal
        </h1>
        {filteredData.length > 0 && (
          <p className="mt-2 text-sm text-gray-500">
            {filteredData.length}{" "}
            {searchQuery || activeCategory !== "All"
              ? "results found"
              : "websites listed"}
          </p>
        )}
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-lg">
          <HiSearch
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            aria-label="Search for government website"
            placeholder="Search for government website..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input pl-11"
          />
        </div>
      </div>

      {/* Category tabs */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {["All", ...allCategories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "border-primary-200/30 bg-primary-300/40 text-primary-100"
                : "border-white/10 text-gray-500 hover:border-white/20 hover:text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredData.map((govWebsite) => (
          <div
            key={govWebsite.name}
            className="card flex flex-col items-center justify-between text-center"
          >
            <div className="flex flex-col items-center">
              <div className="overflow-hidden rounded-full ring-1 ring-white/10">
                <img
                  src="/nepalLogo.png"
                  alt={`${govWebsite.name} logo`}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-cover"
                />
              </div>

              <span className="mt-3 rounded-full border border-white/5 bg-white/5 px-2.5 py-0.5 text-xs text-gray-500">
                {getCategory(govWebsite.name)}
              </span>

              <h2 className="mt-2 font-display text-base font-semibold">
                {govWebsite.name}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {govWebsite.description}
              </p>
            </div>

            <a
              href={govWebsite.url}
              rel="noopener"
              target="_blank"
              className="btn-highlight mt-6"
            >
              Visit website
              <HiExternalLink className="ml-1.5" size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
