import React from "react";
import OtherNetworks from "@/app/components/Networks/OtherNetworks";
import Card from "@/app/components/Networks/Card";


const institutions = [
    {
        logo: "/network/logo (67).png",
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
        logo: "/network/logo (68).png",
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
        logo: "/network/logo (69).png",
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
        logo: "/network/logo (70).png",
        name: "United Arab Emirates University",
        registeredName: "UAEU Academic Institution",
        address: "Al Ain, Abu Dhabi, UAE",
        contact: "+971 3 713 3333",
        email: "information@uaeu.ac.ae",
        website: "https://www.uaeu.ac.ae",
        description: "Innovative programs focused on entrepreneurship and sustainable business practices",
        programs: ["Entrepreneurship", "Finance", "Strategic Management"]
    },
    {
        logo: "/network/logo (71).png",
        name: "Kuwait University",
        registeredName: "KU Academic Foundation",
        address: "Khaldiya, Kuwait City, Kuwait",
        contact: "+965 2484 0000",
        email: "info@ku.edu.kw",
        website: "https://www.ku.edu.kw",
        description: "Business college with strong executive education programs for Gulf professionals",
        programs: ["Executive Education", "Project Management", "Business Leadership"]
    },
    {
        logo: "/network/logo (72).png",
        name: "American University of Sharjah",
        registeredName: "AUS Education",
        address: "University City, Sharjah, UAE",
        contact: "+971 6 515 5555",
        email: "info@aus.edu",
        website: "https://www.aus.edu",
        description: "US-accredited business programs with regional focus and global perspective",
        programs: ["Global MBA", "Business Innovation", "Digital Marketing"]
    },
    {
        logo: "/network/logo (73).png",
        name: "Prince Mohammad Bin Fahd University",
        registeredName: "PMU Academic Foundation",
        address: "Al Khobar, Saudi Arabia",
        contact: "+966 13 849 8880",
        email: "info@pmu.edu.sa",
        website: "https://www.pmu.edu.sa",
        description: "Private university with strong business school and entrepreneurship center",
        programs: ["Business Administration", "Finance", "Innovation"]
    },
    {
        logo: "/network/logo (74).png",
        name: "University of Bahrain",
        registeredName: "UOB Bahrain",
        address: "Sakhir, Kingdom of Bahrain",
        contact: "+973 1743 8888",
        email: "info@uob.edu.bh",
        website: "https://www.uob.edu.bh",
        description: "National university with business school focused on regional economic growth",
        programs: ["Accounting", "Management", "Entrepreneurship"]
    },
    {
        logo: "/network/logo (75).png",
        name: "Arab Open University",
        registeredName: "AOU Gulf Region",
        address: "Multiple campuses across GCC",
        contact: "+965 2439 0390",
        email: "info@aou.edu.kw",
        website: "https://www.aou.edu.kw",
        description: "Open learning model with flexible business programs across the GCC",
        programs: ["Business Studies", "Economics", "Marketing"]
    },
    {
        logo: "/network/logo (76).png",
        name: "Gulf University for Science and Technology",
        registeredName: "GUST Kuwait",
        address: "Mishref, Kuwait",
        contact: "+965 2530 7000",
        email: "info@gust.edu.kw",
        website: "https://www.gust.edu.kw",
        description: "Private institution with strong ties to business and technology sectors",
        programs: ["Business Administration", "Marketing", "Finance"]
    },
    {
        logo: "/network/logo (77).png",
        name: "Ajman University",
        registeredName: "Ajman University of Science and Technology",
        address: "Ajman, UAE",
        contact: "+971 6 748 2222",
        email: "info@ajman.ac.ae",
        website: "https://www.ajman.ac.ae",
        description: "Innovative programs aimed at fostering entrepreneurship and leadership",
        programs: ["Entrepreneurship", "Strategic Management", "Digital Marketing"]
    }
];


export default function IncubatorsAccelerators() {

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
                            Incubators <span className="text-[#D4AF37]">Accelerators</span>
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