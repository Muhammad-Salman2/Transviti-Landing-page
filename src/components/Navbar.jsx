import React from "react";
import { IoIosSearch } from "react-icons/io";
import profilePic from "../assets/images/profile.png";
import logoPic from "../assets/images/logo.png";


export default function Navbar() {
  return (
    <nav className="h-[70px] bg-[#FFFFFF] px-10 py-3 flex items-center justify-between">

      <div className="flex items-center space-x-4">
        <img
          src={logoPic}
          alt="logoPic"
          className="w-11 h-11 rounded-full"
        />
      </div>

      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-[#0154AA]">Find Jobs</h1>
        <ul className="hidden md:flex space-x-4 text-[#737A91]">
          <li className="hover:text-blue-600 cursor-pointer">Top Companies</li>
          <li className="hover:text-blue-600 cursor-pointer">Job Tracker</li>
          <li className="hover:text-blue-600 cursor-pointer">My Calendar</li>
          <li className="hover:text-blue-600 cursor-pointer">Documents</li>
          <li className="hover:text-blue-600 cursor-pointer">Messages</li>
          <li className="hover:text-blue-600 cursor-pointer">Notifications</li>
        </ul>
      </div>

      <div className="flex ">
        <div className="flex items-center flex-1 mx-6 relative w-[241px]">
          <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#737A91] w-[20px] h-[20px]" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 rounded-md px-10 text-[#737A91] py-2 bg-[#F6F9FF] w-full h-[39px] placeholder-[#737A91]"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-[#0154AA] text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
            Resume Builder
          </button>
          <img
            src={profilePic}
            alt="Profile"
            className="w-9 h-9 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </nav>

  );
};


