import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BsGlobe, BsBuilding, BsDatabase } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";

//
import { getTechCompanies } from "../utils/apis";
import { getGovernmentWebsites } from "../utils/apis";

/**
 *
 */
export default function HomePage() {
  const { data: companies } = useQuery({
    queryKey: ["get-companies-list"],
    queryFn: getTechCompanies,
    initialData: [],
  });

  const { data: govWebsites } = useQuery({
    queryKey: ["get-government-websites"],
    queryFn: getGovernmentWebsites,
    initialData: [],
  });

  return (
    <div>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden px-4 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-300/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-highlight/5 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 animate-fade-in text-sm font-medium uppercase tracking-widest text-primary-200">
            Open Source &middot; Community Driven
          </p>

          <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-highlight via-gold-200 to-highlight bg-clip-text text-transparent">
              Know Nepal
            </span>{" "}
            👋
          </h1>

          <p className="animate-on-load mx-auto mt-6 max-w-2xl animate-fade-in-up-delay text-lg leading-relaxed text-gray-400 md:text-xl">
            A single source of truth for data and information about Nepal.
            We&apos;re building open, accurate, and shareable datasets so you
            never have to hunt through hundreds of outdated sources again.
          </p>

          <div className="animate-on-load mt-10 flex animate-fade-in-up-delay-2 flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/tech-companies"
              className="group flex items-center gap-2 rounded-xl bg-highlight px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-lg shadow-highlight/20 transition-all hover:scale-105 hover:shadow-highlight/30"
            >
              Explore Data
              <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://github.com/Know-Nepal"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:border-white/40 hover:bg-white/5"
            >
              Contribute on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Live Stats ── */}
      <section className="border-y border-white/5 bg-white/[0.02] px-4 py-12 md:px-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          <div className="text-center">
            <p className="text-4xl font-extrabold text-highlight">
              {companies.length || "—"}
            </p>
            <p className="mt-1 text-sm text-gray-400">Tech Companies</p>
          </div>
          <div className="hidden h-8 w-px bg-white/10 md:block" />
          <div className="text-center">
            <p className="text-4xl font-extrabold text-primary-200">
              {govWebsites.length || "—"}
            </p>
            <p className="mt-1 text-sm text-gray-400">Government Websites</p>
          </div>
          <div className="hidden h-8 w-px bg-white/10 md:block" />
          <div className="text-center">
            <p className="text-4xl font-extrabold text-gold-200">100%</p>
            <p className="mt-1 text-sm text-gray-400">Open Source</p>
          </div>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="px-4 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            What We Offer
          </h2>
          <p className="mx-auto mb-14 max-w-lg text-center text-gray-400">
            Curated datasets available as JSON, CSV, and through APIs — all free
            and open source.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card: Tech Companies */}
            <Link
              to="/tech-companies"
              className="group rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition-all duration-300 hover:border-primary-300/50 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-primary-300/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-300/20 text-primary-200 transition-colors group-hover:bg-primary-300/30">
                <BsBuilding size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Tech Companies</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                A comprehensive directory of tech companies in Nepal with
                contact details, social links, and more.
              </p>
              <span className="flex items-center gap-1 text-sm font-medium text-primary-200 transition-all group-hover:gap-2">
                Browse companies <HiOutlineArrowRight />
              </span>
            </Link>

            {/* Card: Government Websites */}
            <Link
              to="/government-websites"
              className="group rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition-all duration-300 hover:border-highlight/30 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-highlight/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-highlight/10 text-highlight transition-colors group-hover:bg-highlight/20">
                <BsGlobe size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Government Websites
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                An organized list of official government websites in Nepal,
                searchable and always up to date.
              </p>
              <span className="flex items-center gap-1 text-sm font-medium text-highlight transition-all group-hover:gap-2">
                Browse websites <HiOutlineArrowRight />
              </span>
            </Link>

            {/* Card: Open Data (Coming Soon) */}
            <div className="relative rounded-2xl border border-white/5 bg-white/[0.03] p-8 opacity-60">
              <div className="absolute right-4 top-4 rounded-full bg-gold-400 px-3 py-0.5 text-xs font-medium text-gold-200">
                Coming Soon
              </div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/40 text-gold-200">
                <BsDatabase size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Open Data &amp; APIs
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Public APIs and downloadable datasets in JSON &amp; CSV formats
                for developers, researchers, and data enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Section ── */}
      <section className="border-y border-white/5 bg-white/[0.02] px-4 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Mission</h2>
            <p className="mb-4 leading-relaxed text-gray-400">
              Have you ever gone through hundreds of websites and pages to get
              data about Nepal? There are many sources of information, but
              they&apos;re often outdated, inaccurate, or scattered across the
              internet.
            </p>
            <p className="mb-4 leading-relaxed text-gray-400">
              We started <strong className="text-white">Know Nepal</strong> to
              fix that — making general data and information available in
              shareable file formats (JSON and CSV), and building websites and
              APIs so there&apos;s a single source of truth for anything related
              to Nepal.
            </p>
            <p className="leading-relaxed text-gray-400">
              All our data is open source, community-maintained, and free to use
              for any purpose.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary-300/20 via-transparent to-highlight/10 blur-2xl" />
              <img
                src="/nepalLogo.png"
                alt="Nepal"
                className="relative h-48 w-48 rounded-full border-2 border-white/10 object-cover shadow-2xl md:h-64 md:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contribution CTA ── */}
      <section className="px-4 py-20 md:px-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/5 bg-gradient-to-br from-primary-400/50 via-[#0F0913] to-gold-400/30 p-10 text-center md:p-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Join the Journey 🤝
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-gray-400">
            This initiative is not possible without support from people like
            you. Share information, contribute to the codebase, or just be part
            of the community.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/Know-Nepal"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-highlight px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-lg shadow-highlight/20 transition-all hover:scale-105"
            >
              Contribute on GitHub
              <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/tech-companies"
              className="rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:border-white/40 hover:bg-white/5"
            >
              Explore the Data
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
