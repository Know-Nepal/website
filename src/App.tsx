import { RouterProvider, createBrowserRouter } from "react-router-dom";

//
import DefaultLayout from "./layouts/default.layout";

//
import HomePage from "./pages/homepage";
import TechCompaniesPage from "./pages/tech-companies";
import GovernmentWebsitesPage from "./pages/government-websites";

//
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tech-companies",
        element: <TechCompaniesPage />,
      },
      {
        path: "/government-websites",
        element: <GovernmentWebsitesPage />,
      },
    ],
  },
]);

/**
 *
 */
export default function App() {
  return <RouterProvider router={router} />;
}
