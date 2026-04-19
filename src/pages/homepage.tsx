import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { BsBuilding, BsGlobe } from "react-icons/bs";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative flex flex-col items-center py-24 text-center md:py-36">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(20,89,107,0.5) 0%, transparent 70%)",
          }}
        />

        <span className="mb-6 inline-flex items-center rounded-full border border-primary-200/20 bg-primary-400/30 px-4 py-1.5 text-xs font-medium tracking-wide text-primary-100">
          Your guide to Nepal's digital landscape
        </span>

        <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
          Know <span className="text-primary-200">Nepal</span>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
          Discover Nepal's tech companies and government websites — all in one
          place, searchable and up to date.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/tech-companies" className="btn-highlight">
            Explore Tech Companies
            <HiArrowRight className="ml-2" />
          </Link>
          <Link to="/government-websites" className="btn-outline">
            Government Websites
          </Link>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 gap-5 pb-24 md:grid-cols-2">
        <Link to="/tech-companies" className="card group">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-xl bg-primary-300/30 p-3">
              <BsBuilding size={22} className="text-primary-200" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold">
                Tech Companies
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Browse Nepal's growing tech sector — from startups to
                established firms, with contact details and social links.
              </p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Explore <HiArrowRight size={14} />
          </div>
        </Link>

        <Link to="/government-websites" className="card group">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-xl bg-primary-300/30 p-3">
              <BsGlobe size={22} className="text-primary-200" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold">
                Government Websites
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Find official Nepali government portals and services — quickly
                navigate to the resources you need.
              </p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Explore <HiArrowRight size={14} />
          </div>
        </Link>
      </div>
    </div>
  );
}
