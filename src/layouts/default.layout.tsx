import { Outlet } from "react-router-dom";

//
import AppNavbar from "../components/app/navbar";
import AppFooter from "../components/app/footer";

/**
 *
 */
export default function DefaultLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <AppNavbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <AppFooter />
    </div>
  );
}
