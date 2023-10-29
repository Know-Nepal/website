import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

//
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
import { HiOutlineLocationMarker } from "react-icons/hi";

//
import { getTechCompanies } from "../utils/apis";

//
import type { IApiTechCompany } from "../types/apis.types";

/**
 *
 */
export default function TechCompaniesPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<IApiTechCompany[]>([]);

  //
  const { data: companiesData } = useQuery({
    queryKey: ["get-companies-list"],
    queryFn: async () => {
      return getTechCompanies();
    },
    initialData: [],
  });

  //
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

  //
  return (
    <div>
      <p className="text-center text-3xl">Tech companies in Nepal</p>

      <div className="my-10 flex justify-center">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for tech company"
          className="focus:ring-hightlght w-full max-w-lg rounded-sm bg-gray-800 px-3 py-2 text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-highlight"
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-10">
        {filteredItems.map((company) => (
          <div
            key={company.name}
            className="col-span-1 flex flex-col justify-between rounded-sm bg-primary-400 p-3 transition-all duration-200 hover:scale-[1.02] hover:bg-primary-300"
          >
            <div>
              <div className="flex justify-center">
                <img
                  src={`https://raw.githubusercontent.com/Know-Nepal/tech-companies/main/logos/${company.logoName}`}
                  width={128}
                  height={128}
                  className="h-24 w-24 rounded object-cover"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = `https://ui-avatars.com/api/?bold=true&background=random&color=ffffff&name=${company.name}`;
                  }}
                />
              </div>

              {/*  */}
              <p className="mb-7 mt-3 cursor-default text-center text-lg underline">
                {company.name}
              </p>

              {/* Address */}
              <div className="my-3 flex gap-x-2 text-sm">
                <HiOutlineLocationMarker size={20} className="flex-shrink-0" />
                <p>{company.location}</p>
              </div>

              {/* Website */}
              <div className="my-3 flex gap-x-2 text-sm">
                <BsGlobe size={18} className="flex-shrink-0" />
                <a
                  rel="noopener"
                  target="_blank"
                  href={company.website}
                  className="hover:underline"
                >
                  {company.website}
                </a>
              </div>

              {/* Email */}
              <div className="my-3 flex gap-x-2 text-sm">
                <MdOutlineAlternateEmail size={20} className="flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:underline">
                  {company.email}
                </a>
              </div>

              {/* Phone */}
              <div className="my-3 flex gap-x-2 text-sm">
                <BsFillTelephoneFill size={18} className="flex-shrink-0" />
                <a href={`tel:${company.phone}`} className="hover:underline">
                  {company.phone}
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="mb-3 mt-7 flex flex-wrap justify-center gap-5">
              {company.socials.facebook && (
                <a
                  href={company.socials.facebook}
                  target="_blank"
                  rel="noopener"
                >
                  <GrFacebook
                    size={24}
                    className="hover:scale-110 hover:text-highlight"
                  />
                </a>
              )}

              {company.socials.github && (
                <a href={company.socials.github} target="_blank" rel="noopener">
                  <BsGithub
                    size={24}
                    className="hover:scale-110 hover:text-highlight"
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
                    size={24}
                    className="hover:scale-110 hover:text-highlight"
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
                    size={24}
                    className="hover:scale-110 hover:text-highlight"
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
                    size={24}
                    className="hover:scale-110 hover:text-highlight"
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
                    size={24}
                    className="hover:scale-110 hover:text-highlight"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
