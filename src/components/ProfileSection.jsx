import React from "react";
// import bannerImage from "../assets/images/banner.png"; // replace with your banner image
// import profilePic from "../assets/images/userprofile.png"; // replace with your profile picture

import bannerImage from "../assets/images/banner.png";
import profilePic from "../assets/images/userprofile.png";
import { IoIosArrowDown } from "react-icons/io";


const UserProfileCard = () => {
    // Function to generate random numbers for stats
    const getRandomNumber = () => Math.floor(Math.random() * 1000);

    return (
        <div>

            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden bg-[#F6F9FF]">
                {/* Banner */}
                <div className="flex flex-col justify-center">

                    <div className="relative">
                        <img
                            src={bannerImage}
                            alt="Banner"
                            className="w-full h-32 object-cover"
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

                    <h2 className="text-xl font-semibold">John Doe</h2>

                    {/* Roles/Titles */}
                    <p className="text-gray-500 text-sm mt-2">
                        Senior Product Designer | UI/UX Designer | Graphic Designer | Web
                    </p>
                </div>


                <div className="mt-16 text-center pt-[20px]">
                    {/* User Name */}

                    {/* Stats Section */}
                    <div className="justify-between mt-6 py-4 pt-px space-y-2">
                        <div className="text-left flex justify-between border-b border-gray-300">
                            <p className="text-gray-500 text-sm">Profile Visitors</p>
                            <p className="font-semibold text-[#0154AA]">{getRandomNumber()}</p>
                        </div>
                        <div className="text-left flex justify-between border-b border-gray-300">
                            <p className="text-gray-500 text-sm">Resume Views</p>
                            <p className="font-semibold text-[#0154AA]">{getRandomNumber()}</p>
                        </div>
                        <div className="text-left flex justify-between ">
                            <p className="text-gray-500 text-sm">My Jobs</p>
                            <p className="font-semibold text-[#0154AA]">{getRandomNumber()}</p>
                        </div>
                    </div>

                    {/* Calendar Section */}
                    <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2 w-full border border-gray-300 p-3 rounded">
                        <div>
                            <h2 className="font-semibold">My calendar</h2>
                            <p className="text-gray-500 text-sm"> upcoming interviews</p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <IoIosArrowDown />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileCard;
