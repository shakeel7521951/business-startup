import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export const Offices = () => {
    const offices = [
        {
            country: "Qatar",
            address: "West Bay, Doha",
            contact: "+974 1234 5678",
            email: "qatar@consultancy.com"
        },
        {
            country: "Oman",
            address: "Muscat Business District",
            contact: "+968 2345 6789",
            email: "oman@consultancy.com"
        },
        {
            country: "Saudi Arabia",
            address: "King Abdullah Road, Riyadh",
            contact: "+966 3456 7890",
            email: "ksa@consultancy.com"
        }
    ];

    return (
        <section className="pb-20 bg-[#F9F9F9] text-[#1C1C1C] ">
      
            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center mb-6">
                        <span className="h-px w-16 bg-[#D4AF37] mr-4"></span>
                        <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-medium">Our Network</span>
                        <span className="h-px w-16 bg-[#D4AF37] ml-4"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0D1B2A]">
                        Strategic <span className="text-[#D4AF37]">GCC Presence</span>
                    </h2>
                    <p className="text-xl text-[#1C1C1C]/80 max-w-3xl mx-auto">
                        Premium business hubs with dedicated regional experts across the Gulf
                    </p>
                </div>

                {/* Office cards - light version */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {offices.map((office, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 group relative shadow-sm hover:shadow-md"
                        >
                            {/* Gold accent bar */}
                            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

                            {/* Country flag decoration */}
                            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                                {office.country === "Qatar" && <span className="text-7xl">🇶🇦</span>}
                                {office.country === "Oman" && <span className="text-7xl">🇴🇲</span>}
                                {office.country === "Saudi Arabia" && <span className="text-7xl">🇸🇦</span>}
                            </div>

                            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-6 relative z-10 flex items-center group-hover:text-[#D4AF37] transition-colors">
                                <span className="w-3 h-3 bg-[#D4AF37] rounded-full mr-3"></span>
                                {office.country}
                            </h3>

                            <div className="space-y-5 relative z-10">
                                <div className="flex items-start">
                                    <div className="bg-[#D4AF37]/10 p-2 rounded-full mr-4">
                                        <FaMapMarkerAlt className="text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-[#0D1B2A]">{office.address}</p>
                                        <p className="text-sm text-gray-500 mt-1">Open Sun-Thu: 8AM-6PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[#D4AF37]/10 p-2 rounded-full mr-4">
                                        <FaPhone className="text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-[#0D1B2A]">{office.contact}</p>
                                        <p className="text-sm text-gray-500 mt-1">{office.email}</p>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-8 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-white transition-all duration-300 flex items-center justify-center w-full font-medium group-hover:shadow-lg group-hover:shadow-[#D4AF37]/10">
                                <FaMapMarkerAlt className="mr-3 group-hover:animate-bounce" />
                                View on Map
                            </button>
                        </div>
                    ))}
                </div>

                {/* Partner Offices Note */}
                <div className="mt-20 text-center border-t border-[#D4AF37]/20 pt-8">
                    <p className="text-gray-500 italic">
                        * Partner offices also available in Dubai, Bahrain and Kuwait
                    </p>
                </div>
            </div>
        </section>
    );
};