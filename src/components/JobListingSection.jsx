import React from 'react';
import { IoSearchOutline, IoLocationOutline } from 'react-icons/io5';

import { BsBookmark, BsClock } from 'react-icons/bs';
import logoPlaceholder from '../assets/images/microsoftlogo.png';


const JobListingSection = () => {
    const jobCategories = ['Frontend', 'Backend', 'Graphic Designer'];

    const featuredJobs = [
        {
            id: 1,
            title: 'UI/UX Designer',
            company: 'Spotify',
            type: 'Remote, USA (America)',
            timeAgo: '2 days ago',
            applicants: '22 applicants'
        },
        {
            id: 2,
            title: 'UI/UX Designer',
            company: 'Teams',
            type: 'Remote, USA (America)',
            timeAgo: '2 days ago',
            applicants: '22 applicants'
        },
        {
            id: 3,
            title: 'UIUX Designer',
            company: 'Transviti',
            type: 'Remote, USA (America)',
            timeAgo: '2 days ago',
            applicants: '22 applicants'
        },
        {
            id: 4,
            title: 'UI/UX Designer',
            company: 'Ibex',
            type: 'Remote, USA (America)',
            timeAgo: '2 days ago',
            applicants: '22 applicants'
        }
    ];

    const JobCard = ({ job, showPromoted = false }) => (
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer w-full">
            <div className="flex flex-col gap-3">
                {showPromoted && (
                    <div>
                        <p className='font-bold text-xs sm:text-[13px]'>Promoted</p>
                    </div>
                )}
                
                <div className='flex gap-2 sm:gap-3'>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                        <img src={logoPlaceholder} alt="Company Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-gray-900 text-sm sm:text-[16px] font-semibold truncate">{job.title}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{job.company}</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-start gap-1.5 text-xs text-gray-600">
                        <IoLocationOutline className="text-sm shrink-0 mt-0.5" />
                        <span className="line-clamp-2 wrap-break-word">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600 flex-wrap">
                        <div className="flex items-center gap-1">
                            <BsClock className="text-sm shrink-0" />
                            <span>{job.timeAgo}</span>
                        </div>
                        <span>•</span>
                        <span className='text-[#0154AA]'>{job.applicants}</span>
                    </div>
                </div>
                
                <div className="flex items-center gap-3 pt-2">
                    <button className="flex-1 min-w-0 h-[38px] bg-[#0154AA] text-white text-xs sm:text-sm py-2 rounded-[7px] hover:bg-[#013d7a] active:bg-[#012d5a] transition-all duration-200 font-medium cursor-pointer">
                        Apply Now
                    </button>
                    <BsBookmark className="text-gray-400 cursor-pointer hover:text-[#0154AA] hover:scale-110 active:scale-95 transition-all duration-200 shrink-0" size={20} />
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full">
            {/* Header Section */}
            <div className="mb-6">
                <div className="flex items-start gap-3 mb-4">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                            Find your Dream Job, <span className="text-[#0154AA]">Albert!</span>
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-600">
                            Explore thousands of openings and apply for the job best suited for you and get hired today!
                        </p>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex flex-col md:flex-row gap-3 mb-4">
                    <div className="flex flex-1 items-center gap-2 bg-white border border-gray-300 rounded-md px-3 py-2.5">
                        <IoSearchOutline className="text-gray-400 text-lg cursor-pointer" />
                        <input
                            type="text"
                            placeholder="Job Title, Company, or Keywords"
                            className="flex-1 outline-none text-sm w-full cursor-text"
                        />
                    </div>
                    <div className="flex flex-1 items-center gap-2 bg-white border border-gray-300 rounded-md px-3 py-2.5">
                        <IoLocationOutline className="text-gray-400 text-lg cursor-pointer" />
                        <input
                            type="text"
                            placeholder="Select Location"
                            className="flex-1 outline-none text-sm w-full cursor-text"
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <select className="bg-white border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-600 outline-none cursor-pointer w-full md:w-auto">
                            <option>Job Type</option>
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Remote</option>
                        </select>
                    </div>
                    <button className="bg-[#0154AA] text-white px-6 py-2.5 rounded-lg hover:bg-[#013d7a] active:bg-[#012d5a] transition-all duration-200 flex items-center justify-center gap-2 font-medium cursor-pointer">
                        <IoSearchOutline className="text-lg" />
                        <span className="hidden sm:inline">Search</span>
                    </button>
                </div>

                {/* Category Buttons */}
                <div className="flex flex-wrap gap-3 text-[#737A91] items-center">
                    <p className='text-sm'>Similar:</p>
                    {jobCategories.map((category, index) => (
                        <button
                            key={index}
                            className="px-3 sm:px-4 py-2 bg-[#F6F9FF] border text-[#737A91] border-[#737A91] rounded-md text-xs sm:text-sm hover:bg-[#0154AA] hover:text-white hover:border-[#0154AA] transition-all duration-200 cursor-pointer"
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Featured Jobs Section */}
            <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <h2 className="text-lg sm:text-[20px] text-gray-900 font-semibold">Featured Jobs</h2>
                    <a href="#" className="text-xs sm:text-sm text-[#0154AA] underline sm:pl-2 hover:text-[#013d7a] transition-colors duration-200 cursor-pointer">See Featured Jobs</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {featuredJobs.map((job) => (
                        <JobCard key={job.id} job={job} showPromoted={true} />
                    ))}
                </div>
            </div>

            {/* Recommended Jobs Section */}
            <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <h2 className="text-lg sm:text-[20px] text-gray-900 font-semibold">Recommended Jobs</h2>
                    <a href="#" className="text-xs sm:text-sm text-[#0154AA] underline sm:pl-2 hover:text-[#013d7a] transition-colors duration-200 cursor-pointer">See Recommended Jobs</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {[...featuredJobs, ...featuredJobs].map((job, index) => (
                        <JobCard key={job.id + 10 + index} job={job} showPromoted={false} />
                    ))}
                </div>
            </div>

            {/* Latest Jobs Section */}
            <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <h2 className="text-lg sm:text-[20px] text-gray-900 font-semibold">Latest Jobs</h2>
                    <a href="#" className="text-xs sm:text-sm text-[#0154AA] underline sm:pl-2 hover:text-[#013d7a] transition-colors duration-200 cursor-pointer">See Latest Jobs</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {[...featuredJobs, ...featuredJobs].map((job, index) => (
                        <JobCard key={index + 20} job={job} showPromoted={false} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobListingSection;
