'use client';
import Link from 'next/link';
import React, { useState } from 'react'

export default function Activities() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const stages = [
        {
            id: 1,
            title: 'Formation',
            description: 'The activities in the first stage of the business life-cycle are focused on developing and implementing a business or project. This includes planning, market research, and forming initial partnerships. If you need more details, feel free to explore further or contact our experts!',
            image: '/activities/one.jfif',
            stage: 'First Stage',
            color: 'from-[#0D1B2A]/90 to-[#1C1C1C]/90',
            url:'/formation'
        },
        {
            id: 2,
            title: 'Preparation',
            description: 'In this second stage, activities are aimed at helping the business initiator decide whether to proceed with development. This involves assessing feasibility, securing initial resources, and refining the business model. Contact our experts to discuss your next steps!',
            image: '/activities/two.jfif',
            stage: 'Second Stage',
            color: 'from-[#D4AF37]/90 to-[#0D1B2A]/90'
        },
        {
            id: 3,
            title: 'Transition',
            description: 'This stage focuses on managing changes in the business environment—both internal and external. Whether scaling, entering new markets, or preparing for liquidation, we can guide you through the process. Reach out for expert support on navigating these transitions.',
            image: '/activities/three.jfif',
            stage: 'Third Stage',
            color: 'from-[#D4AF37]/90 to-[#1C1C1C]/90'
        },
        {
            id: 4,
            title: 'Expansion',
            description: 'The fourth stage focuses on scaling the business, whether by expanding market reach, diversifying products, or entering new territories. Strategic planning is crucial for continued success. Connect with us to ensure a smooth and effective expansion!',
            image: '/activities/four.jfif',
            stage: 'Fourth Stage',
            color: 'from-[#1C1C1C]/90 to-[#D4AF37]/90'
        }
    ];


    return (
        <div className=' py-10 sm:w-10/12 w-full mx-auto'>

            <div className="bg-white mx-auto mb-4 p-6 rounded-lg shadow-lg max-w-md text-center">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">No Upcoming Events</h1>
                <p className="text-lg text-gray-600 mb-4">
                    Stay tuned for exciting events coming soon!
                    <br />
                    Check back regularly for updates and be the first to know.
                </p>
                <button className="mt-4 px-6 py-2 bg-[#D4AF37] text-black hover:text-white font-semibold rounded-lg hover:bg-[#0D1B2A] focus:outline-none">
                    Check Back Soon
                </button>

            </div>
            <h1 className=' mb-4 text-xl sm:text-3xl text-center text-[#0D1B2A] font-bold py-10'>Activites</h1>


            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {stages.map((stage) => (
                    <div
                        key={stage.id}
                        className="relative h-[400px] pb-4 rounded-xl overflow-hidden group"
                        onMouseEnter={() => setHoveredCard(stage.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Background Image with Gradient Overlay */}
                        <div className="absolute inset-0">
                            <img
                                src={stage.image}
                                alt={stage.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-b ${stage.color}`}></div>
                        </div>

                        {/* Content Container */}
                        <div className="relative h-full flex flex-col justify-end p-6 text-white">
                            {/* Stage Badge */}
                            <div className="absolute top-4 left-4 bg-[#0D1B2A] px-3 py-1 rounded-full text-xs font-medium">
                                {stage.stage}
                            </div>

                            {/* Text Content */}
                            <div className={`transition-all duration-300 ${hoveredCard === stage.id ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-4'}`}>
                                <h3 className="text-2xl font-bold mb-3">{stage.title}</h3>
                                <p className="mb-6 text-sm leading-relaxed text-justify">{stage.description}</p>
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <Link href={stage?.url || '#'}>Learn more</Link>
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
