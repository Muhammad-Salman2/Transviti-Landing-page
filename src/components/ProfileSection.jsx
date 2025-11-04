import React from "react";
import bannerImage from "../assets/images/banner.png";
import profilePic from "../assets/images/userprofile.png";
import { IoIosArrowDown } from "react-icons/io";

const UserProfileCard = () => {
    return (
        <div className="bg-gray-400 w-full rounded-lg max-w-[346px]">
            <div className="bg-[#F4F4F4] rounded-lg overflow-hidden">
                {/* Banner and Profile Picture */}
                <div className="relative">
                    <img
                        src={bannerImage}
                        alt="Banner"
                        className="w-full h-28 object-cover"
                    />
                    {/* Profile picture */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-4 border-white object-cover"
                        />
                    </div>
                </div>

                {/* User Info */}
                <div className="pt-14 px-5 pb-5 text-center bg-[#FFFFFF] rounded-lg">
                    <h2 className="text-lg font-semibold text-gray-900">Albert Flores</h2>
                    
                    {/* Roles/Titles */}
                    <p className="text-gray-600 text-sm mt-1 leading-tight">
                        Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
                    </p>
                    
                    {/* Location */}
                    <p className="text-gray-500 text-xs mt-1">
                        Clinton, Maryland
                    </p>
                </div>

                {/* Stats Section */}
                <div className="px-5 pb-4 space-y-3 bg-[#FFFFFF] mt-2.5 rounded-lg">
                    <div className="flex justify-between items-center py-2  border-b border-gray-200">
                        <p className="text-gray-600 text-sm">Profile Visitors</p>
                        <p className="font-semibold text-[#0154AA] text-base">140</p>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-200">
                        <p className="text-gray-600 text-sm">Resume Viewers</p>
                        <p className="font-semibold text-[#0154AA] text-base">20</p>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-200">
                        <p className="text-gray-600 text-sm">My Jobs</p>
                        <p className="font-semibold text-[#0154AA] text-base">88</p>
                    </div>
                </div>

                {/* Calendar Section */}
                <div className="flex justify-between items-center px-5 pb-5 pt-5 bg-[#FFFFFF] mt-2.5 rounded-lg">
                    {/* <div className="bg-gray-50 rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"> */}
                        <div className="text-left">
                            <h3 className="font-semibold text-gray-900 text-sm">My calendar</h3>
                            <p className="text-gray-500 text-xs">Upcoming interviews</p>
                        </div>
                        <IoIosArrowDown className="text-gray-600 text-lg cursor-pointer" />
                    {/* </div> */}
                </div>

                
            </div>
        </div>
    );
};

export default UserProfileCard;
