import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const Team = () => {
    const teamMembers = [
        {
            name: "Ahmed Al-Mansoori",
            role: "Founder & CEO",
            bio: "20+ years in GCC corporate law with expertise in cross-border business establishment. Former legal advisor to QFC and QIA.",
            image: "/about/header.jpg",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "ahmed@consultancy.com"
            }
        },
        {
            name: "Sarah Al-Hashimi",
            role: "Digital Director",
            bio: "Leads Nerou technology division with 15 years experience in digital transformation for GCC enterprises.",
            image: "/about/header.jpg",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "sarah@consultancy.com"
            }
        },
        {
            name: "Khalid Al-Rashidi",
            role: "KSA Country Manager",
            bio: "Specialized in Saudi business regulations with deep connections in Riyadh's business community.",
            image: "/about/header.jpg",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "khalid@consultancy.com"
            }
        }
    ];

    return (
        <section className="pb-20 bg-[#F9F9F9] ">
            {/* <div className=" w-full h-10 bg-[#0D1B2A] z-0"></div> */}
            <div className=" h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-12 z-0"></div>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-20 pt-8"> 
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4">Executive Leadership</h2>
                    <div className="flex justify-center mb-6">
                        <div className="h-1 w-20 bg-[#D4AF37]"></div>
                    </div>
                    <p className="text-lg text-[#1C1C1C]/80 max-w-2xl mx-auto">
                        Our seasoned leaders bring decades of combined GCC business expertise
                    </p>
                </div>

                {/* Team grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-2"
                        >
                            {/* Image with overlay */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/30 to-transparent flex items-end p-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#F9F9F9]">{member.name}</h3>
                                        <p className="text-[#D4AF37] font-medium">{member.role}</p>
                                    </div>
                                </div>
                                {/* Social links */}
                                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={member.social.linkedin} className="bg-[#0D1B2A]/90 p-2 rounded-full text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D1B2A] transition-all duration-300 transform hover:scale-110">
                                        <FaLinkedin className="text-lg" />
                                    </a>
                                    <a href={member.social.twitter} className="bg-[#0D1B2A]/90 p-2 rounded-full text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D1B2A] transition-all duration-300 transform hover:scale-110">
                                        <FaTwitter className="text-lg" />
                                    </a>
                                    <a href={`mailto:${member.social.email}`} className="bg-[#0D1B2A]/90 p-2 rounded-full text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D1B2A] transition-all duration-300 transform hover:scale-110">
                                        <FaEnvelope className="text-lg" />
                                    </a>
                                </div>
                            </div>

                            {/* Bio section */}
                            <div className="p-6 border-t-4 border-[#D4AF37]">
                                <p className="text-[#1C1C1C]/80 mb-4 leading-relaxed">{member.bio}</p>
                                <div className="flex justify-between items-center pt-4">
                                    <button className="text-[#D4AF37] font-semibold hover:text-[#0D1B2A] transition-colors flex items-center group">
                                        Full Profile
                                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                    <div className="flex space-x-3">
                                        <a href={member.social.linkedin} className="text-[#1C1C1C]/50 hover:text-[#D4AF37] transition-colors">
                                            <FaLinkedin className="text-lg" />
                                        </a>
                                        <a href={member.social.twitter} className="text-[#1C1C1C]/50 hover:text-[#D4AF37] transition-colors">
                                            <FaTwitter className="text-lg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Advisory board note */}
                <div className="mt-16 text-center border-t border-[#D4AF37]/20 pt-8">
                    <p className="text-[#1C1C1C]/60 italic">
                        * Our advisory board includes former ministers and industry leaders from across the GCC
                    </p>
                </div>
            </div>
        </section>
    );
};