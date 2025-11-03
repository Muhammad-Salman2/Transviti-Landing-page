// src/components/Navbar.jsx
import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">Find Jobs</h1>
        <ul className="hidden md:flex space-x-4 text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Top Companies</li>
          <li className="hover:text-blue-600 cursor-pointer">Job Tracker</li>
          <li className="hover:text-blue-600 cursor-pointer">My Calendar</li>
          <li className="hover:text-blue-600 cursor-pointer">Documents</li>
          <li className="hover:text-blue-600 cursor-pointer">Messages</li>
          <li className="hover:text-blue-600 cursor-pointer">Notifications</li>
        </ul>
      </div>

      {/* Center: Search */}
      <div className="flex items-center flex-1 mx-6">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
          <FaSearch />
        </button>
      </div>

      {/* Right: Resume Builder + Avatar */}
      <div className="flex items-center space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Resume Builder
        </button>
        <img
          src="https://via.placeholder.com/35"
          alt="Profile"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
