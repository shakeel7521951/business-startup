"use client";

import Link from "next/link";
export default function Transition() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full sm:h-[850px] h-[650px] overflow-hidden">
        {/* Background Image */}
        <img
          src="../activities/transition.jpg"
          alt="Transition Background"
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
            Transition
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-12">
            <strong>Transition</strong> guides your business through operational
            and strategic shifts to adapt seamlessly within Oman, Saudi Arabia,
            and Qatar’s dynamic regulatory and market landscapes. This includes
            restructuring, compliance updates, and realigning goals to ensure
            continuous growth without disruption.
          </p>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: "Managing Operational Change",
                text: "Transitioning your business operations smoothly is key to minimizing disruptions and maintaining productivity during periods of change.",
              },
              {
                title: "Regulatory Compliance Updates",
                text: "Adapting to new laws and regulations in Oman, Saudi Arabia, and Qatar ensures your business remains compliant and avoids penalties during transitions.",
              },
              {
                title: "Restructuring Corporate Entities",
                text: "Strategically restructuring your company—whether merging, splitting, or redefining ownership—can optimize performance and position you for future growth.",
              },
              {
                title: "Financial Reassessment and Planning",
                text: "Reviewing and adjusting financial plans during transitions helps manage cash flow, funding needs, and investment priorities effectively.",
              },
              {
                title: "Employee Communication and Training",
                text: "Transparent communication and upskilling during change management foster employee engagement and reduce resistance to new processes.",
              },
              {
                title: "Updating Technology and Systems",
                text: "Transition phases often require upgrades to IT infrastructure to support new business models and operational efficiencies.",
              },
              {
                title: "Maintaining Customer Trust",
                text: "Clear messaging and reliable service during transitions are crucial to retaining customers and protecting your brand reputation.",
              },
              {
                title: "Legal and Contractual Adjustments",
                text: "Revising contracts, agreements, and legal documents ensures that your business relationships remain solid and enforceable during changes.",
              },
              {
                title: "Cultural Change Management",
                text: "Addressing organizational culture shifts proactively helps align teams with new business goals and values.",
              },
              {
                title: "Supply Chain Adaptation",
                text: "Adjusting supplier relationships and logistics strategies supports operational continuity through periods of transition.",
              },
              {
                title: "Risk Management During Change",
                text: "Identifying and mitigating risks specific to the transition phase prevents costly setbacks and supports smoother evolution.",
              },
              {
                title: "Sustainability and Compliance Alignment",
                text: "Ensuring sustainability goals remain on track during transition phases aligns your business with regional priorities and stakeholder expectations.",
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
                  title: "Formation",
                  text: "Smooth shifts and regulatory compliance.",
                  img: "../activities/formation.jpg",
                  link: "/activities/formation",
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
