import React from 'react';
import { GiPearlNecklace } from 'react-icons/gi';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';

const Cta = () => {
    return (
        <section className="relative py-28 overflow-hidden bg-white">
            {/* Luxury background elements - light version */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/about/svg (2).jpg"
                    alt="Subtle gold texture background"
                    fill
                    className="object-cover opacity-10"
                    quality={10}
                    unoptimized={true}
                />
            </div>

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

            <div className="container mx-auto text-center px-6 relative z-10">
                {/* Section icon */}
                <div className="mb-8 animate-bounce-slow">
                    <GiPearlNecklace className="text-[#D4AF37] text-7xl opacity-80 mx-auto" />
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">
                    Begin Your <span className="text-[#D4AF37]">GCC Success Story</span>
                </h2>

                {/* Subheading */}
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                    Let our elite consultants guide you through every step of establishment and growth in the Gulf's most dynamic markets.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button className="bg-[#D4AF37] hover:bg-[#0D1B2A] text-[#0D1B2A] hover:text-[#D4AF37] font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto sm:mx-0">
                        <FaWhatsapp className="mr-3 text-xl" />
                        WhatsApp Consultation
                    </button>

                    <button className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-bold py-4 px-10 rounded-lg transition-all duration-300 flex items-center justify-center mx-auto sm:mx-0">
                        <FaPhoneAlt className="mr-3 text-xl" />
                        Call Our Experts
                    </button>
                </div>

                {/* Trust indicators */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
                    <div className="text-gray-500 text-sm flex items-center">
                        <span className="w-4 h-4 bg-[#D4AF37] rounded-full mr-2"></span>
                        <span>100% Confidentiality</span>
                    </div>
                    <div className="text-gray-500 text-sm flex items-center">
                        <span className="w-4 h-4 bg-[#D4AF37] rounded-full mr-2"></span>
                        <span>VIP Client Support</span>
                    </div>
                    <div className="text-gray-500 text-sm flex items-center">
                        <span className="w-4 h-4 bg-[#D4AF37] rounded-full mr-2"></span>
                        <span>Multilingual Team</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;