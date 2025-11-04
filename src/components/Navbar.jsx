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
          className="w-11 h-11 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
        />
      </div>

      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-[#0154AA] cursor-pointer hover:text-[#013d7a] transition-colors duration-200">Find Jobs</h1>
        <ul className="hidden md:flex space-x-4 text-[#737A91]">
          <li className="hover:text-[#0154AA] cursor-pointer transition-colors duration-200">Top Companies</li>
          <li className="hover:text-[#0154AA] cursor-pointer transition-colors duration-200">Job Tracker</li>
          <li className="hover:text-[#0154AA] cursor-pointer transition-colors duration-200">My Calendar</li>
          <li className="hover:text-[#0154AA] cursor-pointer transition-colors duration-200">Documents</li>
          <li className="hover:text-[#0154AA] cursor-pointer transition-colors duration-200">Messages</li>
          <li className="hover:text-[#0154AA] cursor-pointer transition-colors duration-200">Notifications</li>
        </ul>
      </div>

      <div className="flex ">
        <div className="flex items-center flex-1 mx-6 relative w-[241px]">
          <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#737A91] w-5 " />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 rounded-md px-10 text-[#737A91] py-2 bg-[#F6F9FF] w-full h-[39px] placeholder-[#737A91] focus:outline-none focus:ring-2 focus:ring-[#0154AA] focus:bg-white transition-all duration-200"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-[#0154AA] text-white px-4 py-2 rounded-lg hover:bg-[#013d7a] active:bg-[#012d5a] cursor-pointer transition-all duration-200">
            Resume Builder
          </button>
          <img
            src={profilePic}
            alt="Profile"
            className="w-9 h-9 rounded-full cursor-pointer hover:ring-2 hover:ring-[#0154AA] transition-all duration-200"
          />
        </div>
      </div>
    </nav>

  );
};


