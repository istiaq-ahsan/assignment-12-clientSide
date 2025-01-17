import { useState } from "react";

const Sidebar = () => {
  return (
    <div className=" overflow-y-auto  p-2 rounded-lg ">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Filter by Age Range */}
      <div className="mb-4">
        <label htmlFor="ageRange" className="block text-sm font-medium mb-1">
          Age Range
        </label>
        <select id="ageRange" className="w-full border rounded-lg p-2">
          <option value="">Select Age Range</option>
          <option value="20-25">20-25</option>
          <option value="26-30">26-30</option>
          <option value="31-35">31-35</option>
          <option value="36-40">36-40</option>
          <option value="41-45">41-45</option>
          <option value="46-50">46-50</option>
          <option value="51+">51+</option>
        </select>
      </div>

      {/* Filter by Gender */}
      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium mb-1">
          Biodata Type
        </label>
        <select id="gender" className="w-full border rounded-lg p-2">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Filter by Division */}
      <div className="mb-4">
        <label htmlFor="division" className="block text-sm font-medium mb-1">
          Division
        </label>
        <select id="division" className="w-full border rounded-lg p-2">
          <option value="">Select Division</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chattagra">Chattogram</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Barisal">Barisal</option>
          <option value="Khulna">Khulna</option>
          <option value="Mymensingh">Mymensingh</option>
          <option value="Sylhet">Sylhet</option>
        </select>
      </div>
      <div>
        <label htmlFor="division" className="block text-sm font-medium mb-1">
          Occupation
        </label>
        <select id="division" className="w-full border rounded-lg p-2">
          <option value="">Select Occupation</option>
          <option value="Student">Student</option>
          <option value="Professional">Professional</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
