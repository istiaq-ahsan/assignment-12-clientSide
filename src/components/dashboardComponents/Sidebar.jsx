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
      <div>
        <div className="bg-white text-gray-800 flex justify-between px-3 items-center  md:hidden">
          <div className="block cursor-pointer p-4">
            <Link to="/">
              <div className="flex items-center gap-5">
                <img src={logo} className="w-8 h-8" alt="" />
                <h1 className="font-bold text-lg">HeartMatch</h1>
              </div>
            </Link>
          </div>
          <div className="">
            <button
              onClick={toggleSidebar}
              className="mobile-menu-button p-3 rounded-full focus:outline-none focus:bg-gray-200"
            >
              <AiOutlineBars className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`z-30 md:fixed flex flex-col mt-[64px] md:mt-0 justify-between overflow-x-hidden w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out bg-white shadow-lg`}
      >
        {/* Logo */}
        <div className="hidden md:flex w-full px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-gray-100 mx-auto">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} className="w-8 h-8" alt="" />
            <h1 className="font-bold text-lg">HeartMatch</h1>
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
