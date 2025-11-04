import React from 'react'
import UserProfileCard from './ProfileSection'
import JobListingSection from './JobListingSection'

export default function HeroSection() {
    return (
        <div className='flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-10 max-w-[1400px] mx-auto py-2'>
           
            <div className='w-full lg:w-[346px] lg:shrink-0'>
                <UserProfileCard />
            </div>

            <div className='flex-1 w-full'>
                <JobListingSection />
            </div>
        </div>
    )
}
