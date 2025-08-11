"use client";

import Link from "next/link";
export default function Preparation() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full sm:h-[850px] h-[650px] overflow-hidden">
        {/* Background Image */}
        <img
          src="../activities/preparation.jpg"
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
            Preparation
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-12">
            <strong>Preparation</strong> involves comprehensive market research,
            risk assessment, and regulatory compliance planning. This stage
            equips startups with the necessary tools, financial structures, and
            strategic insights to confidently enter and compete in the business
            ecosystems of the Gulf region.
          </p>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: "Market Research Essentials",
                text: "Thorough market research lays the groundwork for successful preparation by identifying opportunities, customer needs, and competitive landscapes across Oman, Saudi Arabia, and Qatar.",
              },
              {
                title: "Regulatory Compliance Planning",
                text: "Early alignment with legal and regulatory requirements ensures smooth licensing, permits, and sector-specific approvals necessary to launch and operate without delays.",
              },
              {
                title: "Financial Structuring and Budgeting",
                text: "Preparing realistic financial plans and budgets helps startups allocate resources efficiently and secure funding aligned with their growth ambitions.",
              },
              {
                title: "Risk Assessment and Mitigation",
                text: "Identifying potential operational, market, and legal risks in advance allows businesses to develop contingency plans and reduce exposure during launch.",
              },
              {
                title: "Building a Strong Business Plan",
                text: "A well-crafted business plan outlines goals, strategies, and metrics to guide your startup’s preparation phase and attract investors or partners.",
              },
              {
                title: "Talent Sourcing and Workforce Planning",
                text: "Preparing to hire the right talent while navigating local labor laws and visa requirements ensures your team is ready for operational demands.",
              },
              {
                title: "Supplier and Vendor Identification",
                text: "Securing reliable suppliers and service providers early supports timely delivery of products and services crucial for launch success.",
              },
              {
                title: "Technology Infrastructure Setup",
                text: "Investing in scalable IT systems and digital tools during preparation facilitates smooth operations and supports future growth.",
              },
              {
                title: "Brand Development and Marketing Prep",
                text: "Developing your brand identity and pre-launch marketing campaigns builds market awareness and customer interest ahead of entry.",
              },
              {
                title: "Understanding Cultural Norms",
                text: "Integrating local cultural insights into your preparation strategy fosters better customer relationships and smoother business dealings.",
              },
              {
                title: "Securing Legal Counsel and Advisors",
                text: "Engaging experienced local legal and business advisors early helps navigate complex regulatory environments effectively.",
              },
              {
                title: "Sustainability Considerations in Planning",
                text: "Incorporating sustainable practices during preparation aligns your startup with regional priorities and investor expectations.",
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
                  title: "Formation",
                  text: "Market research and compliance planning.",
                  img: "../activities/formation.jpg",
                  link: "/activities/formation",
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
