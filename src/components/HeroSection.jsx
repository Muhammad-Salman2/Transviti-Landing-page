import React from 'react'
import UserProfileCard from './ProfileSection'
import JobListingSection from './JobListingSection'

export default function HeroSection() {
    return (
        <div className=' flex gap-6  px-10 max-w-[1400px] mx-auto py-2'>
           
            <div className='w-[346px] shrink-0'>
                <UserProfileCard />
            </div>

            <div className='flex-1'>
                <JobListingSection />
            </div>
        </div>
    )
}
