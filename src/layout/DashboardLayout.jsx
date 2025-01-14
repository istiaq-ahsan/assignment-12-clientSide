import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboardComponents/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* Left Side: Sidebar Component */}
      <Sidebar />
      {/* Right Side: Dashboard Dynamic Content */}
      <main
        className="flex-1 min-h-screen overflow-y-auto bg-gray-100 dark:bg-gray-800 p-6"
        style={{ marginLeft: "16rem" }} // Adjust for Sidebar width
      >
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default DashboardLayout;
