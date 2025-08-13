import React from "react";
import OtherNetworks from "@/app/components/Networks/OtherNetworks";
import Card from "@/app/components/Networks/Card";

const institutions = [
    {
        logo: "/network/logo (10).png",
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
        logo: "/network/logo (11).png",
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
        logo: "/network/logo (12).png",
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
        logo: "/network/logo (13).png",
        name: "Prince Sultan University",
        registeredName: "PSU Academic Foundation",
        address: "Rafha Street, Riyadh, Saudi Arabia",
        contact: "+966 11 494 8000",
        email: "info@psu.edu.sa",
        website: "https://www.psu.edu.sa",
        description: "Private university offering strong business administration and finance programs",
        programs: ["Finance", "Marketing", "International Business", "Human Resources"]
    },
    {
        logo: "/network/logo (14).png",
        name: "Doha Institute for Graduate Studies",
        registeredName: "DI Higher Education",
        address: "Al Tarfa, Doha, Qatar",
        contact: "+974 4035 6800",
        email: "admissions@dohainstitute.edu.qa",
        website: "https://www.dohainstitute.edu.qa",
        description: "Graduate-level institute offering business leadership and policy programs",
        programs: ["Leadership", "Public Policy", "Economics", "Strategic Management"]
    },
    {
        logo: "/network/logo (15).png",
        name: "University of Nizwa",
        registeredName: "UON Higher Education",
        address: "Nizwa, Oman",
        contact: "+968 2544 6400",
        email: "info@unizwa.edu.om",
        website: "https://www.unizwa.edu.om",
        description: "Leading private university in Oman with business and entrepreneurship focus",
        programs: ["Business Administration", "E-Commerce", "Accounting", "Supply Chain Management"]
    },
    {
        logo: "/networks/logo (16).png",
        name: "Imam Abdulrahman Bin Faisal University",
        registeredName: "IAU Academic Foundation",
        address: "Dammam, Saudi Arabia",
        contact: "+966 13 333 0000",
        email: "info@iau.edu.sa",
        website: "https://www.iau.edu.sa",
        description: "Offers MBA programs and corporate partnerships for entrepreneurship",
        programs: ["MBA", "Project Management", "Business Law", "Entrepreneurship"]
    },
    {
        logo: "/network/logo (17).png",
        name: "College of Banking and Financial Studies",
        registeredName: "CBFS Oman",
        address: "Ruwi, Muscat, Oman",
        contact: "+968 2474 0176",
        email: "info@cbfs.edu.om",
        website: "https://www.cbfs.edu.om",
        description: "Specialized institution for finance, accounting, and banking professionals",
        programs: ["Finance", "Accounting", "Banking", "Risk Management"]
    },
    {
        logo: "/network/logo (18).png",
        name: "Saudi Electronic University",
        registeredName: "SEU Higher Education",
        address: "Riyadh, Saudi Arabia",
        contact: "+966 11 261 3500",
        email: "info@seu.edu.sa",
        website: "https://www.seu.edu.sa",
        description: "National public university offering online and blended business education",
        programs: ["E-Business", "Marketing", "Data Analytics", "Finance"]
    },
    {
        logo: "/network/logo (19).png",
        name: "Muscat University",
        registeredName: "MU Oman",
        address: "Muscat, Oman",
        contact: "+968 2495 1000",
        email: "info@muscatuniversity.edu.om",
        website: "https://www.muscatuniversity.edu.om",
        description: "Private university with focus on entrepreneurship and innovation",
        programs: ["Entrepreneurship", "Business Analytics", "Finance", "Marketing"]
    },
    {
        logo: "/network/logo (20).png",
        name: "Effat University",
        registeredName: "Effat Higher Education",
        address: "Jeddah, Saudi Arabia",
        contact: "+966 12 635 1111",
        email: "info@effatuniversity.edu.sa",
        website: "https://www.effatuniversity.edu.sa",
        description: "Women's university offering innovative business and leadership programs",
        programs: ["Leadership", "Business Administration", "Innovation", "Strategic Management"]
    },
    {
        logo: "/network/logo (21).png",
        name: "Arab Open University - Oman Branch",
        registeredName: "AOU Oman",
        address: "Muscat, Oman",
        contact: "+968 2448 7410",
        email: "info@aou.edu.om",
        website: "https://www.aou.edu.om",
        description: "Provides accessible higher education with flexible business programs",
        programs: ["Business Administration", "E-Commerce", "Project Management", "Finance"]
    }
];

export default function BanksFinancialInstitutions() {

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
                            Banks <span className="text-[#D4AF37]">Financial</span> Institutions
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