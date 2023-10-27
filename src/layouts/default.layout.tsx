import { Outlet } from "react-router-dom";

//
import AppNavbar from "../components/app/navbar";
import AppFooter from "../components/app/footer";

/**
 *
 */
export default function DefaultLayout() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto overflow-x-hidden">
      <AppNavbar />

      <section className="flex-grow px-2 md:px-10">
        <Outlet />
      </section>

      <AppFooter />
    </div>
  );
}
