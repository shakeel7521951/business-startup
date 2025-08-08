import Image from 'next/image';
import React from 'react';
import {
    FaBuilding,
    FaGlobeAmericas,
    FaHandshake,
    FaLightbulb,
    FaChartLine,
    FaShieldAlt
} from 'react-icons/fa';

const Value = () => {
    const values = [
        {
            icon: <FaBuilding className="text-2xl" />,
            title: "Government Liaison",
            description: "Direct channels with all GCC ministries and regulatory bodies ensuring seamless documentation processing and approvals."
        },
        {
            icon: <FaGlobeAmericas className="text-2xl" />,
            title: "Regional Mastery",
            description: "Deep-rooted understanding of local business cultures, laws, and practices across Qatar, Oman, and Saudi Arabia."
        },
        {
            icon: <FaHandshake className="text-2xl" />,
            title: "Client Partnership",
            description: "We treat each client as a long-term partner, with dedicated relationship managers and 24/7 support."
        },
        {
            icon: <FaLightbulb className="text-2xl" />,
            title: "Innovation Focus",
            description: "Pioneering digital transformation solutions tailored for the GCC market through our Nerou technology division."
        },
        {
            icon: <FaChartLine className="text-2xl" />,
            title: "Growth Strategy",
            description: "Data-driven market entry plans and expansion strategies backed by 10+ years of regional success stories."
        },
        {
            icon: <FaShieldAlt className="text-2xl" />,
            title: "Compliance Assurance",
            description: "100% compliance with all GCC regulations and international best practices for corporate governance."
        }
    ];

    return (
        <section className="py-28 bg-[#F9F9F9]">
            {/* Content container */}
            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16 lg:mb-24">
                    <div className="flex items-center justify-center mb-6">
                        <span className="h-px w-12 bg-[#D4AF37] mr-4"></span>
                        <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-medium">Our Values</span>
                        <span className="h-px w-12 bg-[#D4AF37] ml-4"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] mb-6 leading-tight">
                        Pillars of <span className="text-[#D4AF37]">Excellence</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[#1C1C1C]/80 max-w-3xl mx-auto">
                        The foundational principles that guide our consultancy and ensure your business success in the GCC
                    </p>
                </div>

                {/* Enhanced Values grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-xl p-8 transition-all duration-500 group overflow-hidden shadow-xl"
                        >
                            {/* Gold shine effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Card border animation */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-[#D4AF37]/30 rounded-xl transition-all duration-500 pointer-events-none">
                                <span className="absolute top-0 left-0 w-full h-0.5 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left delay-100"></span>
                                <span className="absolute top-0 left-0 h-full w-0.5 bg-[#D4AF37] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top delay-200"></span>
                                <span className="absolute top-0 right-0 h-full w-0.5 bg-[#D4AF37] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top delay-300"></span>
                            </div>

                            {/* Card content */}
                            <div className="relative z-10">
                                <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110 shadow-md group-hover:shadow-lg">
                                    {React.cloneElement(value.icon, { className: "text-[#0D1B2A] text-2xl" })}
                                </div>
                                <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                                    {value.title}
                                </h3>
                                <p className="text-[#1C1C1C]/80 leading-relaxed group-hover:text-[#1C1C1C] transition-colors duration-300">
                                    {value.description}
                                </p>
                            </div>

                            {/* Floating gold dots decoration */}
                            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#D4AF37]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                            <div className="absolute -top-4 -left-4 w-6 h-6 bg-[#D4AF37]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
                        </div>
                    ))}
                </div>

                {/* Enhanced CTA */}
                <div className="text-center mt-20">
                    <button className="relative overflow-hidden bg-[#D4AF37] hover:bg-[#0D1B2A] text-[#0D1B2A] hover:text-[#D4AF37] font-bold py-4 px-12 rounded-lg  transition-all duration-500 group">
                        <span className="relative z-10 flex items-center justify-center">
                            Discover Our Approach
                            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="absolute inset-0 bg-[#0D1B2A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-0"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Value;