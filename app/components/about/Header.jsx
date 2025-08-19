import Image from 'next/image';
import React from 'react';
import { FaHandshake, FaMapMarkerAlt } from 'react-icons/fa';
import { GiAchievement, GiPearlNecklace, GiDuration, GiWorld } from 'react-icons/gi';
import { MdOutlineGpsFixed } from 'react-icons/md';

const Header = () => {
    return (
        <div className="relative">
            {/* Luxury Hero Banner */}
            <section className="relative h-[85vh] bg-[#0D1B2A] overflow-hidden">
                {/* Background elements with Image tags */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    {/* Header Image */}
                    <Image
                        src="/about/header (2).jpg"
                        alt="Luxury gold texture"
                        fill
                        className="object-repeat opacity-25 "
                        quality={10}
                        unoptimized 
                    />
                   
                    {/* Gradient overlay */}
                    <div className="absolute left-0 bottom-0 w-full h-32 bg-gradient-to-t from-[#0D1B2A] to-transparent z-10"></div>
                </div>

                <div className="container mx-auto h-full flex flex-col justify-center px-6 lg:ml-12 relative z-10">
                    {/* Pearl necklace decoration */}
                    <div className="flex items-center mb-6 animate-fadeIn">
                        <GiPearlNecklace className="text-[#D4AF37] text-3xl mr-4" />
                        <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-medium">Since 2015</span>
                    </div>

                    {/* Main headline */}
                    <h1 className="text-4xl md:text-6xl font-bold text-[#F9F9F9] mb-6 leading-tight animate-slideUp">
                        Redefining <span className="text-[#D4AF37]">Business Excellence</span><br />Across The GCC
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-[#F9F9F9]/80 max-w-2xl mb-10 animate-fadeIn delay-100">
                        Premier consultancy providing bespoke corporate solutions with unmatched regional expertise and innovative digital transformation.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 animate-fadeIn delay-200">
                        <button className="bg-[#D4AF37] hover:bg-[#C19B2E] text-[#0D1B2A] font-bold py-3.5 px-7 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl">
                            <FaHandshake className="mr-3 text-lg" />
                            <span>Meet Our Team</span>
                        </button>
                        <button className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-bold py-3.5 px-7 rounded-lg transition-all duration-300 flex items-center justify-center shadow hover:shadow-lg">
                            <MdOutlineGpsFixed className="mr-3 text-lg" />
                            <span>Our Locations</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <div className="container mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 -mt-20 relative z-20">
                <div className="bg-white p-8 rounded-xl shadow-2xl text-center border-t-4 border-[#D4AF37] hover:transform hover:-translate-y-2 transition-all duration-300">
                    <GiAchievement className="text-4xl text-[#D4AF37] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-[#0D1B2A] mb-2">500+</h3>
                    <p className="text-[#1C1C1C]/80">Successful Clients</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-2xl text-center border-t-4 border-[#D4AF37] hover:transform hover:-translate-y-2 transition-all duration-300">
                    <GiDuration className="text-4xl text-[#D4AF37] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-[#0D1B2A] mb-2">8+</h3>
                    <p className="text-[#1C1C1C]/80">Years Experience</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-2xl text-center border-t-4 border-[#D4AF37] hover:transform hover:-translate-y-2 transition-all duration-300">
                    <GiWorld className="text-4xl text-[#D4AF37] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-[#0D1B2A] mb-2">3</h3>
                    <p className="text-[#1C1C1C]/80">GCC Countries</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-2xl text-center border-t-4 border-[#D4AF37] hover:transform hover:-translate-y-2 transition-all duration-300">
                    <FaMapMarkerAlt className="text-4xl text-[#D4AF37] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-[#0D1B2A] mb-2">50+</h3>
                    <p className="text-[#1C1C1C]/80">Services Offered</p>
                </div>
            </div>
        </div>
    );
};

export default Header;