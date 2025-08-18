"use client";

import { useState } from "react";

export default function GCCMapSection() {
    const countries = [
        {
            id: 'qatar',
            name: 'Qatar',
            flag: '/home/qatar.png',
            stats: {
                setupTime: '5-7 business days',
                ownership: '100% foreign ownership available',
                popularService: 'Free Zone Company Setup',
                advantages: [
                    'No personal income tax',
                    'World-class infrastructure',
                    'QFZA benefits available'
                ]
            }
        },
        {
            id: 'saudi',
            name: 'Saudi Arabia',
            flag: '/home/saudia.svg',
            stats: {
                setupTime: '10-14 business days',
                ownership: 'Regional HQ program benefits',
                popularService: 'WOS & Branch Office Setup',
                advantages: [
                    'Largest GCC market',
                    'Vision 2030 incentives',
                    'Strategic regional hub'
                ]
            }
        },
        {
            id: 'oman',
            name: 'Oman',
            flag: '/home/oman.png',
            stats: {
                setupTime: '7-10 business days',
                ownership: 'Minimum capital requirements apply',
                popularService: 'Commercial Registration',
                advantages: [
                    'Competitive setup costs',
                    'Gateway to East Africa',
                    'Tax holidays available'
                ]
            }
        }
    ];

    const [activeCountry, setActiveCountry] = useState('qatar');
    const currentCountry = countries.find(c => c.id === activeCountry);

    return (
        <section className="py-10 bg-[#F9F9F9]">
            <div className="  mx-auto px-6 sm:w-10/12 w-full">
                <div className="flex flex-col lg:flex-row gap-5 items-center">
                    {/* Left Column - Business Content */}
                    <div className="w-full sm:w-[70%] sm:order-1 order-2">
                        <h2 className="text-3xl font-bold text-[#0D1B2A] mb-6">
                            Strategic Business Locations Across GCC
                        </h2>

                        <p className="text-lg text-gray-700 mb-8">
                            Establish your business in the most advantageous GCC market with our
                            localized expertise and government-approved setup services.
                        </p>

                        {/* Country Selector */}
                        <div className="flex mb-8 border-b border-gray-200">
                            {countries.map((country) => (
                                <button
                                    key={country.id}
                                    onClick={() => setActiveCountry(country.id)}
                                    className={`px-4 py-3 font-medium ${activeCountry === country.id ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-600'}`}
                                >
                                    {country.name}
                                </button>
                            ))}
                        </div>

                        {/* Country Details */}
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <img src={currentCountry.flag} className=" h-20 w-20 mr-3" />
                                <div>
                                    <h3 className="text-xl font-bold text-[#0D1B2A]">{currentCountry.name} Advantages</h3>
                                    <ul className="mt-2 space-y-2">
                                        {currentCountry.stats.advantages.map((advantage, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>{advantage}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <h4 className="font-medium text-[#0D1B2A]">Key Setup Information:</h4>
                                <div className="grid grid-cols-2 gap-4 mt-3">
                                    <div>
                                        <p className="text-sm text-gray-500">Setup Time</p>
                                        <p className="font-medium">{currentCountry.stats.setupTime}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Ownership</p>
                                        <p className="font-medium">{currentCountry.stats.ownership}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Popular Service</p>
                                        <p className="font-medium">{currentCountry.stats.popularService}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="mt-8 px-6 py-3 bg-[#0D1B2A] hover:bg-[#D4AF37] text-white font-medium rounded-lg transition-colors">
                            Start in {currentCountry.name} Now
                        </button>
                    </div>

                    {/* Right Column - Map */}
                    <div className="lg:w-1/2 relative sm:order-2 order-1">
                        <div className="relative w-full h-96">
                            {/* Base Map Image */}
                            <img
                                src="https://media.istockphoto.com/id/694337562/vector/map-of-the-gulf-cooperation-council-s-members.jpg?s=612x612&w=0&k=20&c=CeWM-qQW11Bcg--_Wqb6QVwDcsqEm4IgopEEYwmAsKQ="
                                alt="GCC Map"
                                className="w-full h-full object-contain"
                            />

                            {/* Interactive Country Areas */}
                            <button
                                onClick={() => setActiveCountry('qatar')}
                                className={`absolute top-1/2 left-1/4 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${activeCountry === 'qatar' ? 'bg-[#D4AF37] scale-110 shadow-lg' : 'bg-[#0D1B2A]'}`}
                                style={{ transform: activeCountry === 'qatar' ? 'translate(-50%, -50%) scale(1.1)' : 'translate(-50%, -50%)' }}
                            >
                                <span className="text-white text-xl">QA</span>
                            </button>

                            <button
                                onClick={() => setActiveCountry('saudi')}
                                className={`absolute top-1/3 left-1/2 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${activeCountry === 'saudi' ? 'bg-[#D4AF37] scale-110 shadow-lg' : 'bg-[#0D1B2A]'}`}
                                style={{ transform: activeCountry === 'saudi' ? 'translate(-50%, -50%) scale(1.1)' : 'translate(-50%, -50%)' }}
                            >
                                <span className="text-white text-2xl">SA</span>
                            </button>

                            <button
                                onClick={() => setActiveCountry('oman')}
                                className={`absolute top-2/3 left-3/4 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${activeCountry === 'oman' ? 'bg-[#D4AF37] scale-110 shadow-lg' : 'bg-[#0D1B2A]'}`}
                                style={{ transform: activeCountry === 'oman' ? 'translate(-50%, -50%) scale(1.1)' : 'translate(-50%, -50%)' }}
                            >
                                <span className="text-white text-2xl">🇴🇲</span>
                            </button>

                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <line
                                    x1="25%" y1="50%"
                                    x2="50%" y2="33%"
                                    stroke="#D4AF37"
                                    strokeWidth="2"
                                    strokeDasharray="4 2"
                                />
                                <line
                                    x1="50%" y1="33%"
                                    x2="75%" y2="66%"
                                    stroke="#D4AF37"
                                    strokeWidth="2"
                                    strokeDasharray="4 2"
                                />
                            </svg>
                        </div>

                        {/* Map Legend */}
                        <div className="mt-6 flex justify-center space-x-6">
                            {countries.map((country) => (
                                <button
                                    key={country.id}
                                    onClick={() => setActiveCountry(country.id)}
                                    className={`flex items-center ${activeCountry === country.id ? 'text-[#0D1B2A] font-medium' : 'text-gray-600'}`}
                                >
                                    <span
                                        className="w-4 h-4 rounded-full mr-2"
                                        style={{ backgroundColor: activeCountry === country.id ? '#D4AF37' : '#0D1B2A' }}
                                    />
                                    {country.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}