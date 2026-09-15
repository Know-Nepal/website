import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/tech-companies", label: "Tech Companies" },
  { to: "/government-websites", label: "Government Websites" },
];

export default function AppNavbar() {
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0F0913]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
        >
          <img src="/knowNepalLogo.png" alt="Know Nepal" className="h-8 w-8" />
          <span>Know Nepal</span>
        </Link>

        <div className="flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                pathname === to
                  ? "bg-primary-300/40 text-primary-100"
                  : "text-gray-400 hover:bg-white/5 hover:text-gray-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
