import React from 'react'
import UserProfileCard from './ProfileSection'
import JobListingSection from './JobListingSection'

export default function HeroSection() {
    return (
        <div className='border border-gray-400 flex gap-6  px-10 max-w-[1400px] mx-auto py-4'>
            {/* Left Sidebar - Profile Section */}
            <div className='w-[346px] shrink-0'>
                <UserProfileCard />
            </div>

            {/* Main Content Area */}
            <div className='flex-1'>
                <JobListingSection />
            </div>
        </div>
    )
}
