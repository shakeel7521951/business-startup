"use client";

import Link from "next/link";
export default function Formation() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full sm:h-[850px] h-[650px] overflow-hidden">
        {/* Background Image */}
        <img
          src="../activities/formation.jpg"
          alt="Formation Background"
          className="w-full h-full object-cover"
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-[450px] bg-gradient-to-t from-[#F9F9F9] to-transparent"></div>
      </div>

      {/* Form Section */}
      <div className="relative z-20 -mt-[150px] flex justify-center select-none">
        {/* Main container */}
        <div className="bg-white pt-20 px-4 sm:px-8 max-w-screen-xl mx-auto flex flex-col items-center text-center">
          {/* Title + Intro */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-6 transition group-hover:text-[#D4AF37]">
            Formation
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-12">
            <strong>Formation</strong> is the crucial phase where your business
            vision transforms into a legally established entity. Whether you’re
            setting up a local company, forming a joint venture, or registering
            within a free zone, this process demands careful attention to
            regulatory compliance and legal frameworks specific to Oman, Saudi
            Arabia, and Qatar. Selecting the appropriate corporate structure
            influences taxation, ownership rights, and operational flexibility.
            A strong foundation also involves securing banking relationships,
            safeguarding intellectual property, and aligning human resource
            policies with local labor laws. Partnering with experienced local
            advisors is essential to navigate administrative procedures
            efficiently and avoid costly delays. Establishing a well-structured
            and compliant business sets the stage for sustainable growth and
            solid regional credibility.
          </p>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: "Choosing the Right Legal Structure",
                text: "The legal foundation of your business determines not only how you operate but also how you grow. In Oman, Saudi Arabia, and Qatar, choosing between an LLC, partnership, or branch office involves understanding local ownership rules, capital requirements, and tax implications. Making the right decision early can save you costly restructuring later.",
              },
              {
                title: "Free Zone Advantages",
                text: "Free zones across the Gulf offer more than tax breaks—they provide operational flexibility, faster licensing, and full foreign ownership. From Oman’s Salalah Free Zone to Qatar’s QFC, identifying the right location aligns your operations with market accessibility and long-term scalability.",
              },
              {
                title: "Navigating Licensing Requirements",
                text: "Licensing can be a complex maze if not approached strategically. Each country has its own timelines, required documents, and sector-specific rules. A proactive approach with legal and industry advisors ensures compliance while avoiding delays that can stall your market entry.",
              },
              {
                title: "Banking for Startups",
                text: "Opening a corporate bank account in the Gulf requires more than just paperwork—it’s about building trust with financial institutions. Understanding KYC protocols, capital deposit requirements, and banking fees can streamline your setup and create a healthy foundation for financial operations.",
              },
              {
                title: "Intellectual Property Protection",
                text: "In the modern Gulf economy, brand and technology protection are non-negotiable. Trademark and patent registration processes differ between Oman, Saudi Arabia, and Qatar. Early registration safeguards your innovations, especially in competitive or fast-moving sectors.",
              },
              {
                title: "Joint Ventures with Local Partners",
                text: "Strategic partnerships can open doors to government contracts, local networks, and distribution channels. A joint venture must be structured with clear agreements on profit-sharing, management roles, and dispute resolution to ensure long-term stability.",
              },
              {
                title: "Corporate Governance in the Gulf",
                text: "Strong governance is more than compliance—it’s about building a culture of transparency and accountability. Implementing clear shareholder agreements, regular board meetings, and regulatory reporting can enhance investor trust and corporate reputation.",
              },
              {
                title: "Staffing and HR Compliance",
                text: "Recruiting in Oman, Saudi Arabia, and Qatar requires compliance with labor laws, visa processes, and nationalization policies. Aligning HR strategies with legal obligations ensures smooth operations while fostering a motivated and diverse workforce.",
              },
              {
                title: "Taxation Insights for Startups",
                text: "Understanding the Gulf’s evolving tax landscape is critical. From VAT implementation to corporate tax obligations in Saudi Arabia, proactive tax planning helps avoid penalties while optimizing profitability across jurisdictions.",
              },
              {
                title: "Cultural Intelligence in Business",
                text: "Cultural sensitivity is a business asset in the Gulf. Building relationships in Oman, Saudi Arabia, and Qatar means respecting traditions, communication styles, and business etiquette—factors that often influence deal-making more than written contracts.",
              },
              {
                title: "Scaling Beyond the Gulf",
                text: "Once your formation is complete, planning for regional or global expansion requires compliance with both local laws and international regulations. Building a scalable model from day one ensures smoother transitions when entering new markets.",
              },
              {
                title: "Sustainable Business Practices",
                text: "Sustainability is becoming a cornerstone of Gulf economies. Embedding ESG principles into your formation strategy positions your company to meet government expectations, attract investment, and align with global market trends.",
              },
            ].map((blog, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-500"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#0D1B2A] mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{blog.text}</p>
                </div>
                <div className="mt-6">
                  {idx % 2 === 0 ? (
                    <button
                      className="w-fit bg-[#D4AF37] text-white font-medium px-5 py-2 rounded-lg 
         hover:bg-[#0D1B2A] hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] 
         transition duration-500 inline-block text-center"
                    >
                      Find Out More
                    </button>
                  ) : (
                    <Link
                      href="/contact"
                      className="w-fit bg-[#D4AF37] text-white font-medium px-5 py-2 rounded-lg 
    hover:bg-[#0D1B2A] hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] 
    transition duration-500 inline-block text-center"
                    >
                      Contact Us
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Company Logo Section */}
          <div className="bg-[#F9F9F9] w-full py-10 mb-5 ">
            <div className="flex justify-center ">
              <img
                src="https://images.unsplash.com/photo-1637489981573-e45e9297cb21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nbyUyMGNvbXBhbmh8ZW58MHwwfDB8fHww" // Replace with your actual logo path
                alt="Company Logo"
                className="w-48 h-auto opacity-90 hover:opacity-100 transition duration-500 rounded-full"
              />
            </div>
          </div>

          {/* Remaining Activities Section */}
          <div className="max-w-screen-xl w-full mb-5 mx-auto">
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-8 text-center">
              Remaining Activities
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  title: "Transition",
                  text: "Smooth shifts and regulatory compliance.",
                  img: "../activities/transition.jpg",
                  link: "/activities/transition",
                },
                {
                  title: "Preparation",
                  text: "Market research and compliance planning.",
                  img: "../activities/preparation.jpg",
                  link: "/activities/preparation",
                },
                {
                  title: "Expansion",
                  text: "Scaling with tailored growth strategies.",
                  img: "../activities/expension.jpg",
                  link: "/activities/expension",
                },
              ].map((activity, idx) => (
                <div
                  key={idx}
                  className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-500 max-w-xs w-full"
                >
                  <Link href={activity.link} className="block relative group">
                    <img
                      src={activity.img}
                      alt={activity.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end text-[#D4AF37]">
                      <h4 className="text-lg font-semibold mb-2 bg-white inline-block px-1">
                        {activity.title}
                      </h4>
                      <p className="text-sm text-white">{activity.text}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
