import { FaRegCalendarAlt, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { FaBuilding, FaGlobeAmericas, FaRobot, FaLandmark } from 'react-icons/fa';


export const Timeline = () => {

    const milestones = [
        {
            year: "2015",
            title: "Qatar Foundation",
            description: "Established in Doha with 5 founding members",
            icon: <FaBuilding className="text-3xl" />,
            image: "/about/header.jpg"
        },
        {
            year: "2018",
            title: "Oman Expansion",
            description: "Opened Muscat office serving 100+ clients",
            icon: <FaGlobeAmericas className="text-3xl" />,
            image: "/about/header.jpg"
        },
        {
            year: "2021",
            title: "Nerou Launch",
            description: "Launched our digital solutions division",
            icon: <FaRobot className="text-3xl" />,
            image: "/about/header.jpg"
        },
        {
            year: "2023",
            title: "KSA Operation",
            description: "Obtained full Saudi business consultancy license",
            icon: <FaLandmark className="text-3xl" />,
            image: "/about/header.jpg"
        }
    ];

    return (
        <section className="relative bg-white pb-20">
            <div className="container mx-auto px-6 relative z-10">
                {/* Luxury background elements - light version */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/about/bg.jpg"
                        alt="Subtle gold texture background"
                        fill
                        className="object-cover opacity-10"
                        quality={10}
                        unoptimized={true}
                    />
                </div>
                {/* Section Header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center mb-6">
                        <span className="h-px w-16 bg-[#D4AF37] mr-4"></span>
                        <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-medium">
                            Our Legacy
                        </span>
                        <span className="h-px w-16 bg-[#D4AF37] ml-4"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Journey of <span className="text-[#D4AF37]">Excellence</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        The milestones that shaped our regional leadership in business consultancy
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 transform -translate-x-1/2">
                        <div className="absolute -top-2 left-1/2 w-5 h-5 bg-[#D4AF37] rounded-full transform -translate-x-1/2 shadow-lg border-2 border-white"></div>
                        <div className="absolute -bottom-2 left-1/2 w-5 h-5 bg-[#D4AF37] rounded-full transform -translate-x-1/2 shadow-lg border-2 border-white"></div>
                    </div>

                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className={`mb-16 flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } items-stretch group`}
                        >
                            {/* Milestone Card */}
                            <div
                                className={`w-full lg:w-1/2 px-0 lg:px-8 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                                    } mb-8 lg:mb-0`}
                            >
                                <div
                                    className={`h-full p-0 rounded-2xl overflow-hidden shadow-2xl  max-lg:mt-12 ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                                        } transition-all duration-500 group-hover:shadow-[0_20px_50px_-10px_rgba(212,175,55,0.3)]`}
                                >
                                    <div className="relative h-80">
                                        <Image
                                            src={milestone.image}
                                            alt={milestone.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            quality={80}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/30 to-transparent p-8 flex items-end transition-all duration-500 group-hover:from-[#0D1B2A]/95">
                                            <div className="text-center md:text-left">
                                                <div className="flex items-center justify-center md:justify-start mb-4">
                                                    <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4 transition-all duration-500 group-hover:bg-white group-hover:scale-110">
                                                        {milestone.icon}
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-[#D4AF37]">
                                                        {milestone.title}
                                                    </h3>
                                                </div>
                                                <p className="text-gray-200 mb-4 transition-all duration-500 group-hover:text-white">
                                                    {milestone.description}
                                                </p>
                                                <div className="flex items-center justify-center md:justify-start text-[#D4AF37] transition-all duration-500 group-hover:text-white">
                                                    <FaRegCalendarAlt className="mr-3 text-xl transition-transform duration-500 group-hover:scale-125" />
                                                    <span className="font-medium">{milestone.year}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Year Marker */}
                            <div className="relative w-full lg:w-32 flex-shrink-0 z-10 flex items-center justify-center mb-8 lg:mb-0">
                                <div className="relative w-24 h-24 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-xl border-4 border-white/20 transition-all duration-500 group-hover:scale-110 hover:border-white/40">
                                    <span className="font-bold text-[#0D1B2A] text-2xl">{milestone.year}</span>
                                    <div className="absolute inset-0 rounded-full border-4 border-[#ce9c13] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>

                            {/* Placeholder for layout */}
                            <div className="w-full md:w-1/2 px-0 md:px-8"></div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-20">
                    <button className="relative overflow-hidden bg-[#D4AF37] hover:bg-[#0D1B2A] text-[#0D1B2A] hover:text-[#D4AF37] font-bold py-4 px-10 rounded-full transition-all duration-500 group">
                        <span className="relative z-10 flex items-center justify-center">
                            Explore Our Services
                            <FaChevronRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                        </span>
                        <span className="absolute inset-0 bg-[#0D1B2A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-0"></span>
                    </button>
                </div>
            </div>
        </section>

    );
};