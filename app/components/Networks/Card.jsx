import React from 'react'
import { FaUniversity, FaPhone, FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';


const Card = ({logo, name, website, registeredName, address, contact, email, description, programs }) => {
    
    
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#F9F9F9] hover:border-[#D4AF37]/30 group">
            {/* Official Header */}
            <div className="bg-[#0D1B2A] p-6 py-4 text-[#F9F9F9]">
                <div className="flex items-start gap-6">
                    <div className="bg-white p-3 my-auto rounded-lg flex-shrink-0 overflow-hidden">
                        <img
                            src={logo}
                            alt={`${name} logo`}
                            width={80}
                            height={80}
                            className="object-contain h-12 w-20 group-hover:scale-115 transition-all duration-500"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold">{name}</h3>
                                <p className="text-[#D4AF37] text-sm mb-2">{registeredName}</p>
                            </div>
                            <a
                                href={website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#D4AF37] hover:text-white transition-colors"
                            >
                                <FaExternalLinkAlt className="text-lg" />
                            </a>
                        </div>
                        <div className="flex items-center text-sm text-[#F9F9F9]/80 mt-1">
                            <FaMapMarkerAlt className="mr-2 text-[#D4AF37]" />
                            <span>{address}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Divider */}
            <div className="bg-[#D4AF37]/10 px-6 py-3 flex gap-4 md:gap-10">
                <div className="flex items-center">
                    <FaPhone className="text-[#D4AF37] mr-2" />
                    <span className="text-sm font-medium text-[#0D1B2A]">{contact}</span>
                </div>
                <div className="flex items-center">
                    <FaEnvelope className="text-[#D4AF37] mr-2" />
                    <span className="text-sm font-medium text-[#0D1B2A]">{email}</span>
                </div>
            </div>

            {/* Details Section */}
            <div className="p-6">
                <div className="mb-4">
                    <h4 className="font-bold text-[#0D1B2A] mb-2 flex items-center">
                        <FaUniversity className="text-[#D4AF37] mr-2" />
                        Institution Overview
                    </h4>
                    <p className="text-[#1C1C1C]/80 line-clamp-2 h-12">{description}</p>
                </div>

                {/* <div>
                    <h4 className="font-bold text-[#0D1B2A] mb-2">Key Programs</h4>
                    <div className="flex flex-wrap gap-2">
                        {programs.map((program, i) => (
                            <span key={i} className="bg-[#D4AF37]/10 text-[#0D1B2A] px-3 py-1 rounded-full text-sm">
                                {program}
                            </span>
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Card