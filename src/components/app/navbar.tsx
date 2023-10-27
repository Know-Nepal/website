import { Link } from "react-router-dom";

/**
 *
 */
export default function AppNavbar() {
  return (
    <nav className="flex justify-between px-2 py-7 md:px-10">
      <Link to="/" className="font-sans text-xl uppercase">
        <div className="flex items-center">
          <img src="/knowNepalLogo.png" alt="" className="mr-2 h-8 w-8" />
          Know Nepal
        </div>
      </Link>

      <div className="flex gap-x-5">
        <Link to="/tech-companies" className="group">
          <p>Tech Companies</p>
          <div className="mt-[2px] w-0 border-b-2 border-highlight transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link to="/government-websites" className="group">
          <p>Government Websites</p>
          <div className="mt-[2px] w-0 border-b-2 border-highlight transition-all duration-300 group-hover:w-full" />
        </Link>
      </div>
    </nav>
  );
}
