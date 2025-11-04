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

    const JobCard = ({ job }) => (
        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col  gap-3 ">
                <div className='flex '>
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                        <img src={logoPlaceholder} alt="Company Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex justify-between items-start mb-2 pl-2">
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-sm truncate">{job.title}</h3>
                            <p className="text-xs text-gray-500">{job.company}</p>
                        </div>

                    </div>

                </div>

                <div className="flex  ">
                    <div className="space-y-1 ">
                        <div className="flex items-start gap-1.5 text-xs text-gray-600">
                            <IoLocationOutline className="text-sm shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                            <BsClock className="text-sm shrink-0" />
                            <span>{job.timeAgo}</span>
                            <span>•</span>
                            <span className=' text-[#0154AA]'>{job.applicants}</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <button className="w-[130px] h-[38px] bg-[#0154AA] text-white text-xs py-2 rounded-[7px] hover:bg-blue-700 transition-colors font-medium">
                        Apply Now
                    </button>
                    <BsBookmark className="text-gray-400 cursor-pointer hover:text-blue-600 ml-2 shrink-0 " size={20} />
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
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">
                            Find your Dream Job, <span className="text-[#0154AA]">Albert!</span>
                        </h1>
                        <p className="text-sm text-gray-600">
                            Explore thousands of openings and apply for the job best suited for you and get hired today!
                        </p>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex justify-between gap-3 mb-4">
                    <div className=" flex w-[350px] items-center gap-2 bg-white border border-gray-300 rounded-md px-3 py-2.5">
                        <IoSearchOutline className="text-gray-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Job Title, Company, or Keywords"
                            className="flex-1 outline-none text-sm"
                        />
                    </div>
                    <div className=" flex items-center gap-2 bg-white border border-gray-300 rounded-md px-3 py-2.5">
                        <IoLocationOutline className="text-gray-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Select Location"
                            className="flex-1 outline-none text-sm"
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <select className="bg-white border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-600 outline-none cursor-pointer">
                            <option>Job Type</option>
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Remote</option>
                        </select>
                    </div>
                        <button className="bg-[#0154AA] text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium">
                            <IoSearchOutline className="text-lg" />
                            Search
                        </button>
                </div>

                {/* Category Buttons */}
                <div className="flex gap-3 text-[#737A91] items-center" >
                    <p className=''>Similar:</p>
                    {jobCategories.map((category, index) => (
                        <button
                            key={index}
                            className="px-4 py-2 bg-[#F6F9FF] border text-[#737A91]  border-[#737A91] rounded-md text-sm hover:bg-white transition-colors"
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Featured Jobs Section */}
            <div className="mb-6">
                <div className="flex items-center mb-3">
                    <h2 className="text-[20px] font-semibold text-gray-900">Featured Jobs</h2>
                    <a href="#" className="text-sm text-[#0154AA] underline pl-2">See Featured Jobs</a>
                </div>
                <div className="grid grid-cols-4 gap-3">
                    {featuredJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>

            {/* Recommended Jobs Section */}
            <div className="mb-6">
                <div className="flex  items-center mb-3">
                    <h2 className="text-[20px] font-semibold text-gray-900">Recommended Jobs</h2>
                    <a href="#" className="text-sm text-[#0154AA] underline pl-2">See Recommended Jobs</a>
                </div>
                <div className="grid grid-cols-4 gap-3">
                    {featuredJobs.map((job) => (
                        <JobCard key={job.id + 10} job={job} />
                    ))}
                </div>
            </div>

            {/* Latest Jobs Section */}
            <div>
                <div className="flex  items-center mb-3">
                    <h2 className="text-[20px] font-semibold text-gray-900">Latest Jobs</h2>
                    <a href="#" className="text-sm text-[#0154AA] underline pl-2">See Latest Jobs</a>
                </div>
                <div className="grid grid-cols-4 gap-3">
                    {[...featuredJobs, ...featuredJobs].map((job, index) => (
                        <JobCard key={index + 20} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobListingSection;
