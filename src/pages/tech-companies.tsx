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

/**
 *
 */
export default function TechCompaniesPage() {
  const { data, isFetching } = useQuery({
    queryKey: ["get-companies-list"],
    queryFn: async () => {
      return getTechCompanies();
    },
    initialData: [],
  });

  //
  return (
    <div>
      <p className="text-center text-3xl">Tech companies in Nepal</p>

      {isFetching && <p>Loading data...</p>}

      <div className="mt-10 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-10">
        {data.map((company) => (
          <div
            key={company.name}
            className="col-span-1 flex flex-col justify-between rounded-sm bg-primary-400 p-3 transition-all duration-200 hover:scale-[1.02] hover:bg-primary-300"
          >
            <div>
              <div className="flex justify-center">
                <img
                  src={`https://ui-avatars.com/api/?bold=true&background=random&color=ffffff&name=${company.name}`}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover"
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
