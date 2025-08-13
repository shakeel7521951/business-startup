import React from "react";
import OtherNetworks from "@/app/components/Networks/OtherNetworks";
import Card from "@/app/components/Networks/Card";


const institutions = [
    {
        logo: "/network/logo (22).png",
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
        logo: "/network/logo (23).png",
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
        logo: "/network/logo (24).png",
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
        logo: "/network/logo (25).png",
        name: "Prince Sultan University",
        registeredName: "PSU Higher Education",
        address: "P.O. Box 66833, Riyadh 11586, Saudi Arabia",
        contact: "+966 11 494 8000",
        email: "info@psu.edu.sa",
        website: "https://www.psu.edu.sa",
        description: "Private university with strong emphasis on entrepreneurship, finance, and business technology",
        programs: ["Finance", "Business Technology", "Entrepreneurship", "Marketing"]
    },
    {
        logo: "/network/logo (26).png",
        name: "Hamad Bin Khalifa University",
        registeredName: "HBKU Education",
        address: "Education City, Doha, Qatar",
        contact: "+974 4454 0000",
        email: "admissions@hbku.edu.qa",
        website: "https://www.hbku.edu.qa",
        description: "Innovative research-focused university fostering business leadership and sustainability",
        programs: ["Sustainable Development", "Business Leadership", "Innovation Management"]
    },
    {
        logo: "/network/logo (27).png",
        name: "University of Nizwa",
        registeredName: "UoN Academic Institution",
        address: "Birkat Al Mouz, Nizwa, Oman",
        contact: "+968 2544 6363",
        email: "info@unizwa.edu.om",
        website: "https://www.unizwa.edu.om",
        description: "Private university offering modern business curricula with regional industry collaborations",
        programs: ["Accounting", "Project Management", "Entrepreneurship"]
    },
    {
        logo: "/network/logo (28).png",
        name: "Imam Mohammad Ibn Saud Islamic University",
        registeredName: "IMSIU Education",
        address: "Riyadh, Saudi Arabia",
        contact: "+966 11 258 0000",
        email: "info@imamu.edu.sa",
        website: "https://www.imamu.edu.sa",
        description: "Comprehensive university with business and management programs rooted in innovation",
        programs: ["Business Administration", "Finance", "Human Resources Management"]
    },
    {
        logo: "/network/logo (29).png",
        name: "Doha Institute for Graduate Studies",
        registeredName: "DIGS Academic Institution",
        address: "Doha, Qatar",
        contact: "+974 4035 6000",
        email: "info@dohainstitute.edu.qa",
        website: "https://www.dohainstitute.edu.qa",
        description: "Graduate-level education focusing on leadership, governance, and business strategies",
        programs: ["Leadership", "Governance", "Strategic Management"]
    },
    {
        logo: "/network/logo (30).png",
        name: "Arab Open University - Saudi Arabia",
        registeredName: "AOU Saudi",
        address: "Riyadh, Saudi Arabia",
        contact: "+966 11 494 9000",
        email: "info@arabou.edu.sa",
        website: "https://www.arabou.edu.sa",
        description: "Distance learning and blended education with strong business and entrepreneurship focus",
        programs: ["E-Business", "Entrepreneurship", "Business Analytics"]
    },
    {
        logo: "/network/logo (31).png",
        name: "Muscat University",
        registeredName: "MU Oman",
        address: "Muscat, Oman",
        contact: "+968 2495 3000",
        email: "info@muscatuniversity.edu.om",
        website: "https://www.muscatuniversity.edu.om",
        description: "Modern institution collaborating with UK universities to deliver business excellence",
        programs: ["International Business", "Supply Chain Management", "Digital Marketing"]
    }
];


export default function BusinessCouncils() {

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
                            Business <span className="text-[#D4AF37]">Councils</span>
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