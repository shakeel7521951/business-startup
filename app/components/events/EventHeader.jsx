import React from 'react';

export default function EventHeader() {
    return (
        <div className='relative'>
            {/* Hero Image with Overlay */}
            <div
                className='h-[90vh] w-full relative'
                style={{
                    background: 'url(https://img.freepik.com/free-photo/business-people-board-room-meeting_53876-138090.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/80 to-[#0D1B2A]/30'></div>
            </div>

            {/* Content Card */}
            <div className='absolute bottom-10 left-0 right-0 mx-auto p-8 bg-[#0D1B2A]/50 backdrop-blur-sm rounded-lg shadow-2xl w-full max-w-4xl transform -translate-y-1/2 sm:left-10 sm:right-auto sm:top-1/2 sm:bottom-auto sm:max-w-[50%]'>
                {/* Gold Accent Bar */}
                <div className='absolute left-0 top-0 h-full w-2 bg-[#D4AF37] rounded-l-lg'></div>

                <div className='flex flex-col font-bold text-2xl sm:text-4xl text-[#D4AF37] mb-4 relative '>
                    <h1 className=''> Business Events Across GCC</h1>
                    <hr className='absolute left-0 border-0 bottom-0 h-1 w-16 bg-[#D4AF37]'></hr>
                </div>

                <p className='text-white text-justify text-lg leading-relaxed mb-6'>
                    We prepare and provide an overview of relevant events and initiatives for businesses and key stakeholders in the GCC ecosystem (Oman, Qatar, and Saudi Arabia). Please contact our local experts to submit your event for consideration. We're pleased to showcase valuable opportunities across the region.
                </p>


            </div>
        </div>
    );
}