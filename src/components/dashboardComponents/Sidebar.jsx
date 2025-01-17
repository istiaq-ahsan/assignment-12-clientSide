import { useState } from "react";
import { GrLogout } from "react-icons/gr";

import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import { FcSettings } from "react-icons/fc";
import UseAuth from "../../hooks/UseAuth";
import { AiOutlineBars } from "react-icons/ai";
import CustomerMenu from "./CustomerMenu";

import AdminMenu from "./AdminMenu";
import logo from "../../../public/bridegroom.png";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import LoadingSpinner from "../../shared/LoadingSpinner";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { logOut } = UseAuth();
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: userInfo, isLoading } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`userInfo/${user?.email}`);
      return data;
    },
  });

  const { role } = userInfo || {};

  if (isLoading) return <LoadingSpinner />;

  // Sidebar Responsive Handler

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-white text-gray-800 flex justify-between md:hidden">
        <div className="block cursor-pointer p-4">
          <Link to="/">
            <img className="h-10 w-10" src={logo} alt="Logo" />
          </Link>
        </div>
        <button
          onClick={toggleSidebar}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out bg-white shadow-lg`}
      >
        {/* Logo */}
        <div className="hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-gray-100 mx-auto">
          <Link to="/">
            <img className="h-10 w-10" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>{role === "admin" ? <AdminMenu /> : <CustomerMenu />}</nav>
        </div>

        {/* Footer Items */}
        <div>
          <hr />
          <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          />
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
