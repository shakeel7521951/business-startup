"use client";

import Link from "next/link";
export default function Expension() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full sm:h-[850px] h-[650px] overflow-hidden">
        {/* Background Image */}
        <img
          src="../activities/expension.jpg"
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
            Expension
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-12">
            <strong>Expansion</strong> focuses on scaling your operations
            effectively across Oman, Saudi Arabia, and Qatar. Tailored growth
            strategies, local partnership development, and market-specific
            execution plans help maximize your business footprint while
            respecting local customs and regulations.
          </p>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: "Strategic Market Entry for Expansion",
                text: "Entering new markets in Oman, Saudi Arabia, and Qatar requires tailored strategies that account for local consumer behavior, regulatory nuances, and competitive landscapes. Successful expansion hinges on understanding these dynamics deeply.",
              },
              {
                title: "Leveraging Free Zones for Growth",
                text: "Free zones remain prime locations for scaling operations, offering benefits like streamlined customs, tax incentives, and operational flexibility. Choosing the right free zone can accelerate your business footprint in the Gulf region.",
              },
              {
                title: "Compliance During Expansion",
                text: "Expansion brings new regulatory challenges. Staying compliant with evolving laws, sector-specific regulations, and labor policies in each country protects your business from fines and reputational risk during growth phases.",
              },
              {
                title: "Building Local Partnerships",
                text: "Strong local partnerships facilitate smoother market entry, from distribution networks to joint ventures. Cultivating these relationships strategically enhances your competitive edge and eases operational hurdles.",
              },
              {
                title: "Financing Expansion Efforts",
                text: "Securing appropriate funding is critical when scaling across Oman, Saudi Arabia, and Qatar. Understanding local financial instruments, investor expectations, and government incentives can unlock the capital needed for growth.",
              },
              {
                title: "Talent Acquisition for Growth",
                text: "Expanding businesses must recruit skilled talent while navigating labor laws and nationalization programs. Balancing local hiring requirements with global expertise ensures a productive and compliant workforce.",
              },
              {
                title: "Optimizing Supply Chain Management",
                text: "Efficient supply chains underpin successful expansion. Tailoring logistics, sourcing, and distribution to the unique conditions of Gulf markets minimizes costs and improves service levels.",
              },
              {
                title: "Technology and Digital Transformation",
                text: "Embracing technology accelerates expansion by improving operational efficiency, customer engagement, and data-driven decision-making across diverse Gulf markets.",
              },
              {
                title: "Navigating Tax and Tariff Structures",
                text: "Understanding VAT, corporate taxes, and customs duties is essential for profitable expansion. Proactive tax planning can prevent surprises and optimize cross-border trade.",
              },
              {
                title: "Brand Positioning Across the Gulf",
                text: "Adapting your brand message and marketing strategies to resonate with distinct Gulf audiences builds trust and drives customer loyalty throughout your expanded footprint.",
              },
              {
                title: "Cross-Border Legal Considerations",
                text: "Managing intellectual property, contracts, and dispute resolution across borders ensures legal protection and operational stability as you grow regionally.",
              },
              {
                title: "Sustainability and Corporate Responsibility",
                text: "Integrating ESG principles into expansion plans aligns your business with evolving government policies and consumer expectations, fostering long-term resilience.",
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
                  title: "Formation",
                  text: "Scaling with tailored growth strategies.",
                  img: "../activities/formation.jpg",
                  link: "/activities/formation",
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
