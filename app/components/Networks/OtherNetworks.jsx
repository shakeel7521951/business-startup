import React from 'react'
import { FaMoneyCheckAlt, FaUsers, FaBriefcase, FaArrowUp, FaCoins, FaAward, FaUniversity } from "react-icons/fa";
import { PiGraduationCapBold } from "react-icons/pi";

const networkItems = [
    { icon: <FaUniversity size={42} />, title: "Government & Semi-Governmental Entities" },
    { icon: <FaMoneyCheckAlt size={42} />, title: "Banks & Financial Institutions" },
    { icon: <FaUsers size={42} />, title: "Business Councils" },
    { icon: <FaBriefcase size={42} />, title: "Co-Working Spaces" },
    { icon: <FaArrowUp size={42} />, title: "Incubators & Accelerators" },
    { icon: <FaCoins size={42} />, title: "Financiers & Investors" },
    { icon: <FaAward size={42} />, title: "Experts & Specialists" },
    { icon: <PiGraduationCapBold size={42} />, title: "Education Institutions" },
];

const OtherNetworks = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-6 pt-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4  text-[#0D1B2A]">
                    Our Extensive Network
                </h2>
                <p className="text-lg mb-12 max-w-2xl mx-auto text-[#0D1B2A]" >
                    Connect with key players across multiple industries and sectors
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {networkItems.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="mb-4 p-4 rounded-full bg-[#F8F5ED] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                                <div className="text-[#D4AF37] group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                            </div>
                            <p className="text-center font-medium text-gray-800 group-hover:text-[#D4AF37] transition-colors duration-300">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Logo Section */}
            <div className="w-full pt-8 flex justify-center">
                <div className="">
                    <img
                        src="../navbar/logo.png"
                        alt="Company Logo"
                        className="h-16 md:h-18 transition-all duration-300 hover:scale-105"
                    />
                </div>
            </div>
        </>
    )
}

export default OtherNetworks