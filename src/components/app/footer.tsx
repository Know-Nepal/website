import { Link } from "react-router-dom";

/**
 *
 */
export default function AppFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 px-4 pb-6 pt-10 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <svg
              width="32"
              height="14"
              viewBox="0 0 320 140"
              fill="none"
              className="rounded-lg"
            >
              <defs>
                <linearGradient id="ft-mtn" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DC143C" />
                  <stop offset="100%" stopColor="#FF5566" />
                </linearGradient>
                <linearGradient id="ft-snow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#f0d8d8" stopOpacity="0.5" />
                </linearGradient>
                <clipPath id="ft-snowCap">
                  <rect x="0" y="0" width="320" height="45" />
                </clipPath>
              </defs>
              <polygon
                points="20,110 60,45 90,70 118,18 148,58 160,8 175,52 200,28 228,62 252,38 280,78 300,110"
                fill="url(#ft-mtn)"
              />
              <polygon
                points="20,110 60,45 90,70 118,18 148,58 160,8 175,52 200,28 228,62 252,38 280,78 300,110"
                fill="url(#ft-snow)"
                clipPath="url(#ft-snowCap)"
              />
            </svg>
            <span className="text-lg font-bold">
              Know <span className="text-highlight">Nepal</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            A single source of truth for data and information about Nepal.
            Open-source and community-driven.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/"
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/tech-companies"
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                Tech Companies
              </Link>
            </li>
            <li>
              <Link
                to="/government-websites"
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                Government Websites
              </Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Community
          </h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="https://github.com/Know-Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                GitHub Organization
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Know-Nepal/website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                Contribute to Website
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-white/5 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Know Nepal. All rights reserved.
      </div>
    </footer>
  );
}
