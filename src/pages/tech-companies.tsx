import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
  BsGlobe,
  BsFillTelephoneFill,
  BsGithub,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiOutlineLocationMarker, HiSearch } from "react-icons/hi";

import { getTechCompanies } from "../utils/apis";
import type { IApiTechCompany } from "../types/apis.types";

export default function TechCompaniesPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<IApiTechCompany[]>([]);

  const { data: companiesData } = useQuery({
    queryKey: ["get-companies-list"],
    queryFn: async () => {
      return getTechCompanies();
    },
    initialData: [],
  });

  useEffect(() => {
    const fuseList = new Fuse(companiesData, {
      keys: ["name"],
      threshold: 0.3,
      ignoreLocation: true,
    });

    const finalItemList = searchTerm
      ? fuseList.search(searchTerm).map((res) => res.item)
      : companiesData;

    setFilteredItems(finalItemList);
  }, [companiesData, searchTerm]);

  return (
    <div className="py-10">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight">
          Tech Companies in Nepal
        </h1>
        {filteredItems.length > 0 && (
          <p className="mt-2 text-sm text-gray-500">
            {filteredItems.length}{" "}
            {searchTerm ? "results found" : "companies listed"}
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search for tech company"
            placeholder="Search for tech company"
            className="search-input pl-11"
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((company) => (
          <div
            key={company.name}
            className="card flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                  <img
                    src={`https://raw.githubusercontent.com/Know-Nepal/tech-companies/main/logos/${company.logoName}`}
                    alt={`${company.name} logo`}
                    width={96}
                    height={96}
                    className="h-24 w-24 object-cover"
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = `https://ui-avatars.com/api/?bold=true&background=random&color=ffffff&name=${company.name}`;
                    }}
                  />
                </div>
              </div>

              <p className="mb-6 mt-4 cursor-default text-center font-display text-base font-semibold">
                {company.name}
              </p>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <HiOutlineLocationMarker
                    size={15}
                    className="mt-0.5 flex-shrink-0 text-gray-600"
                  />
                  <span>{company.location}</span>
                </div>

                <div className="flex items-start gap-2 text-sm">
                  <BsGlobe
                    size={13}
                    className="mt-0.5 flex-shrink-0 text-gray-600"
                  />
                  <a
                    rel="noopener"
                    target="_blank"
                    href={company.website}
                    className="truncate text-primary-100 hover:underline"
                  >
                    {company.website?.replace(/^https?:\/\//, "")}
                  </a>
                </div>

                <div className="flex items-start gap-2 text-sm">
                  <MdOutlineAlternateEmail
                    size={14}
                    className="mt-0.5 flex-shrink-0 text-gray-600"
                  />
                  <a
                    href={`mailto:${company.email}`}
                    className="truncate text-primary-100 hover:underline"
                  >
                    {company.email}
                  </a>
                </div>

                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <BsFillTelephoneFill
                    size={12}
                    className="mt-0.5 flex-shrink-0 text-gray-600"
                  />
                  <a href={`tel:${company.phone}`} className="hover:underline">
                    {company.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-white/5 pt-4">
              <div className="flex flex-wrap justify-center gap-4">
                {company.socials.facebook && (
                  <a
                    href={company.socials.facebook}
                    target="_blank"
                    rel="noopener"
                  >
                    <GrFacebook
                      size={17}
                      className="text-gray-500 transition-all hover:scale-110 hover:text-highlight"
                    />
                  </a>
                )}
                {company.socials.github && (
                  <a
                    href={company.socials.github}
                    target="_blank"
                    rel="noopener"
                  >
                    <BsGithub
                      size={17}
                      className="text-gray-500 transition-all hover:scale-110 hover:text-highlight"
                    />
                  </a>
                )}
                {company.socials.instagram && (
                  <a
                    href={company.socials.instagram}
                    target="_blank"
                    rel="noopener"
                  >
                    <FiInstagram
                      size={17}
                      className="text-gray-500 transition-all hover:scale-110 hover:text-highlight"
                    />
                  </a>
                )}
                {company.socials.linkedin && (
                  <a
                    href={company.socials.linkedin}
                    target="_blank"
                    rel="noopener"
                  >
                    <BsLinkedin
                      size={17}
                      className="text-gray-500 transition-all hover:scale-110 hover:text-highlight"
                    />
                  </a>
                )}
                {company.socials.twitter && (
                  <a
                    href={company.socials.twitter}
                    target="_blank"
                    rel="noopener"
                  >
                    <FaXTwitter
                      size={17}
                      className="text-gray-500 transition-all hover:scale-110 hover:text-highlight"
                    />
                  </a>
                )}
                {company.socials.youtube && (
                  <a
                    href={company.socials.youtube}
                    target="_blank"
                    rel="noopener"
                  >
                    <BsYoutube
                      size={17}
                      className="text-gray-500 transition-all hover:scale-110 hover:text-highlight"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
