import React from "react";
import OtherNetworks from "@/app/components/Networks/OtherNetworks";
import Card from "@/app/components/Networks/Card";


const institutions = [
    {
        logo: "/network/logo (32).png",
        name: "King Saud University",
        registeredName: "KSU Educational Foundation",
        address: "P.O. Box 2454, Riyadh 11451, Saudi Arabia",
        contact: "+966 11 467 0000",
        email: "info@ksu.edu.sa",
        website: "https://ksu.edu.sa",
        description: "Premier university offering specialized business programs and entrepreneurship incubators with 50+ corporate partners",
        programs: ["MBA", "Executive Education", "Entrepreneurship", "Business Analytics"]
    },
    {
        logo: "/network/logo (33).png",
        name: "Qatar University",
        registeredName: "QU Corporation",
        address: "Al Tarfa, Doha, Qatar",
        contact: "+974 4403 3333",
        email: "info@qu.edu.qa",
        website: "https://www.qu.edu.qa",
        description: "Leading national institution with AACSB accreditation and strong industry partnerships",
        programs: ["Executive MBA", "Professional Certificates", "Leadership Development"]
    },
    {
        logo: "/network/logo (34).png",
        name: "Sultan Qaboos University",
        registeredName: "SQU Higher Education",
        address: "Al Khoudh, Muscat, Oman",
        contact: "+968 2414 0000",
        email: "webmaster@squ.edu.om",
        website: "https://www.squ.edu.om",
        description: "Top-ranked university with business innovation center and startup incubator",
        programs: ["Business Administration", "Innovation Management", "Digital Transformation"]
    },
    {
        logo: "/network/logo (35).png",
        name: "Prince Sultan University",
        registeredName: "PSU Academic Foundation",
        address: "Rafha Street, Riyadh, Saudi Arabia",
        contact: "+966 11 494 8000",
        email: "info@psu.edu.sa",
        website: "https://www.psu.edu.sa",
        description: "Private university known for business leadership and innovation programs",
        programs: ["MBA", "Finance", "Marketing", "Entrepreneurship"]
    },
    {
        logo: "/network/logo (36).png",
        name: "College of Banking and Financial Studies",
        registeredName: "CBFS Oman",
        address: "Bousher, Muscat, Oman",
        contact: "+968 2450 0500",
        email: "info@cbfs.edu.om",
        website: "https://www.cbfs.edu.om",
        description: "Specialized college offering business and financial training for professionals",
        programs: ["Banking", "Finance", "Accounting", "Executive Education"]
    },
    {
        logo: "/network/logo (37).png",
        name: "Effat University",
        registeredName: "Effat Educational Foundation",
        address: "Qasr Khuzam St, Jeddah, Saudi Arabia",
        contact: "+966 12 637 7444",
        email: "info@effatuniversity.edu.sa",
        website: "https://www.effatuniversity.edu.sa",
        description: "Pioneer in women’s education in Saudi Arabia with strong entrepreneurship focus",
        programs: ["Business Administration", "Entrepreneurship", "Project Management"]
    },
    {
        logo: "/network/logo (38).png",
        name: "Hamad Bin Khalifa University",
        registeredName: "HBKU Qatar Foundation",
        address: "Education City, Doha, Qatar",
        contact: "+974 4454 0000",
        email: "info@hbku.edu.qa",
        website: "https://www.hbku.edu.qa",
        description: "Research-intensive university with innovative business and public policy programs",
        programs: ["MBA", "Sustainable Development", "Public Policy"]
    },
    {
        logo: "/network/logo (39).png",
        name: "Imam Abdulrahman Bin Faisal University",
        registeredName: "IAU Academic Institution",
        address: "Dammam, Saudi Arabia",
        contact: "+966 13 333 0000",
        email: "info@iau.edu.sa",
        website: "https://www.iau.edu.sa",
        description: "Comprehensive university with strong focus on entrepreneurship and digital economy",
        programs: ["Business Management", "Economics", "Digital Transformation"]
    },
    {
        logo: "/network/logo (40).png",
        name: "Modern College of Business and Science",
        registeredName: "MCBS Oman",
        address: "Airport Heights, Muscat, Oman",
        contact: "+968 2451 6200",
        email: "info@mcbs.edu.om",
        website: "https://www.mcbs.edu.om",
        description: "Oman-based private college offering international business degrees",
        programs: ["Business Administration", "Marketing", "International Business"]
    },
    {
        logo: "/network/logo (41).png",
        name: "Saudi Electronic University",
        registeredName: "SEU Saudi Arabia",
        address: "Riyadh, Saudi Arabia",
        contact: "+966 11 261 3500",
        email: "info@seu.edu.sa",
        website: "https://www.seu.edu.sa",
        description: "National online and blended learning institution specializing in business and IT",
        programs: ["E-Business", "Information Systems", "MBA"]
    },
    {
        logo: "/network/logo (42).png",
        name: "Muscat University",
        registeredName: "MU Oman",
        address: "Al Ghubrah, Muscat, Oman",
        contact: "+968 2495 5555",
        email: "info@muscatuniversity.edu.om",
        website: "https://www.muscatuniversity.edu.om",
        description: "Innovative higher education institution with focus on entrepreneurship and leadership",
        programs: ["Entrepreneurship", "Leadership", "Business Analytics"]
    },
    {
        logo: "/network/logo (43).png",
        name: "College of the North Atlantic - Qatar",
        registeredName: "CNA-Q",
        address: "Doha, Qatar",
        contact: "+974 4495 2222",
        email: "info@cna-qatar.edu.qa",
        website: "https://www.cna-qatar.edu.qa",
        description: "Applied technical and business programs aligned with Qatar’s economic vision",
        programs: ["Business Management", "Accounting", "Entrepreneurship"]
    }
];


export default function ExpertsAndSpecialists() {

    return (
        <div>
            <section className="relative py-20 bg-[#F9F9F9]">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center mb-6">
                            <span className="h-px w-16 bg-[#D4AF37] mr-4"></span>
                            <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-medium">Academic Network</span>
                            <span className="h-px w-16 bg-[#D4AF37] ml-4"></span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">
                            Experts & <span className="text-[#D4AF37]">Specialists</span>
                        </h2>
                        <p className="text-xl text-[#1C1C1C]/80 max-w-3xl mx-auto">
                            Officially recognized academic partners across the GCC region
                        </p>
                    </div>

                    {/* Education-Stitutions */}
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                        {institutions.map((item, index) => (
                            <Card
                                key={index}
                                logo={item.logo}
                                name={item.name}
                                registeredName={item.registeredName}
                                address={item.address}
                                contact={item.contact}
                                email={item.email}
                                website={item.website}
                                description={item.description}
                            />

                        ))}
                    </div>

                </div>
            </section>
            {/* other network section  */}
            <section className="bg-whiteSmoke py-12">
                <OtherNetworks />
            </section>
        </div>
    );
};