import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { to: "/tech-companies", label: "Tech Companies" },
  { to: "/government-websites", label: "Government Websites" },
];

/**
 *
 */
export default function AppNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0F0913]/80 px-4 py-4 backdrop-blur-lg md:px-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
        >
          <svg
            width="32"
            height="14"
            viewBox="0 0 320 140"
            fill="none"
            className="rounded-lg"
          >
            <defs>
              <linearGradient id="nav-mtn" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DC143C" />
                <stop offset="100%" stopColor="#FF5566" />
              </linearGradient>
              <linearGradient id="nav-snow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#f0d8d8" stopOpacity="0.5" />
              </linearGradient>
              <clipPath id="nav-snowCap">
                <rect x="0" y="0" width="320" height="45" />
              </clipPath>
            </defs>
            <polygon
              points="20,110 60,45 90,70 118,18 148,58 160,8 175,52 200,28 228,62 252,38 280,78 300,110"
              fill="url(#nav-mtn)"
            />
            <polygon
              points="20,110 60,45 90,70 118,18 148,58 160,8 175,52 200,28 228,62 252,38 280,78 300,110"
              fill="url(#nav-snow)"
              clipPath="url(#nav-snowCap)"
            />
          </svg>
          <span>
            Know <span className="text-highlight">Nepal</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-highlight transition-all duration-300 ${
                  pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <a
            href="https://github.com/Know-Nepal"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-highlight/30 px-4 py-1.5 text-sm font-medium text-highlight transition-all hover:border-highlight hover:bg-highlight/10"
          >
            GitHub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-1.5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.to
                  ? "bg-white/10 text-highlight"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/Know-Nepal"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-highlight/30 px-3 py-2 text-center text-sm font-medium text-highlight transition-all hover:border-highlight hover:bg-highlight/10"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
