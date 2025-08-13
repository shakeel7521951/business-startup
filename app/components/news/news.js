"use client";
import { CalendarIcon } from "@heroicons/react/24/solid";

export default function News() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full sm:h-[850px] h-[650px] overflow-hidden">
        {/* Background Image */}
        <img
          src="./news/newsMain.jpg"
          alt="News Background"
          className="w-full h-full object-cover"
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-[450px] bg-gradient-to-t from-[#F9F9F9] to-transparent"></div>
      </div>

      {/* Form Section */}
      <div className="relative z-20 -mt-[150px] flex justify-center select-none">
        {/* Main container */}
        <div className="bg-white pt-20 px-4 sm:pl-30 sm:pr-30 max-w-screen-xl mx-auto flex flex-col items-center text-center">
          {/* First text div */}
          <div className="text-3xl sm:text-4xl font-bold mb-4">News</div>
          <div className="text-sm sm:text-base w-full mb-8">
            We provide the latest insights on the business ecosystem and key
            developments across Oman, Saudi Arabia, and Qatar. Our coverage
            includes market trends, investment opportunities, and
            startup-friendly policies shaping the region. Connect with our
            experts to share your story, gain visibility, and explore new
            avenues for growth in one of the world’s most dynamic business
            landscapes.
          </div>

          {/* News card container */}
          {[
            {
              title:
                "Saudi Arabia’s New Companies Law Opens Doors for Startups and SMEs",
              date: "Aug 9, 2025",
              img: "/news/s1.jpg",
              text: "Saudi Arabia continues to strengthen its position as a top destination for entrepreneurs and innovators with the rollout of the New Companies Law—a major reform designed to make it easier, faster, and more flexible to do business in the Kingdom. This law is a breakthrough for startups, SMEs, and foreign investors. It introduces simplified structures, removes unnecessary barriers, and modernizes...",
            },
            {
              title:
                "Oman Launches National Startup Fund to Empower Emerging Entrepreneurs",
              date: "Aug 5, 2025",
              img: "/news/o1.jpg",
              text: "Oman has unveiled a landmark National Startup Fund aimed at fueling the growth of small and medium enterprises across the Sultanate. The initiative offers equity investment, low-interest financing, and strategic mentorship programs to nurture homegrown talent. By focusing on technology, renewable energy, and logistics, the fund aims to diversify Oman’s economy, create new job opportunities, and attract foreign investors seeking a stable and innovation-driven market. Startups will also benefit from streamlined business registration processes and access to government-backed incubation hubs...",
            },
            {
              title:
                "Saudi Arabia Expands Vision 2030 with $15 Billion Tech Investment Drive",
              date: "Aug 2, 2025",
              img: "/news/s2.jpg",
              text: "In a bold move to solidify its role as the Middle East’s technology hub, Saudi Arabia has announced a $15 billion investment package targeting AI, robotics, and smart city projects. This initiative falls under Vision 2030’s economic diversification strategy and will create thousands of high-value jobs for Saudi nationals while drawing international talent. The funding includes tax incentives for tech startups, co-working infrastructure, and an advanced research facility for AI-driven solutions in healthcare, finance, and energy...",
            },
            {
              title: " Qatar to Host Global Startup & Innovation Expo in Doha",
              date: "Jul 29, 2025",
              img: "/news/q1.jpg",
              text: "Qatar is set to become the epicenter of global innovation as it prepares to host the Startup & Innovation Expo 2025 in Doha. The event will bring together venture capital firms, angel investors, and emerging entrepreneurs from over 50 countries. The Expo will feature pitch competitions, sector-specific workshops, and networking opportunities designed to help early-stage startups secure funding and mentorship. This marks a significant step in Qatar’s journey toward building a diversified knowledge-based economy...",
            },
            {
              title:
                "Oman’s Free Zones Attract Record-Breaking Foreign Investment",
              date: "Jul 25, 2025",
              img: "/news/o2.jpg",
              text: "Oman’s strategically located free zones have reported a record inflow of foreign direct investment (FDI) this year, driven by investor-friendly regulations and advanced infrastructure. With simplified customs procedures, 100% foreign ownership rights, and tax exemptions, these zones are attracting businesses in manufacturing, logistics, and green energy. The government’s new digital licensing platform further accelerates company registration, making Oman an increasingly attractive choice for international firms...",
            },
            {
              title:
                "Saudi Arabia Launches Green Energy Incubator for Cleantech Startups",
              date: "Jul 20, 2025",
              img: "/news/s3.jpg",
              text: "As part of its commitment to environmental sustainability, Saudi Arabia has launched a Green Energy Incubator to accelerate cleantech startups focusing on solar, wind, and hydrogen power. The program offers seed funding, technical guidance, and global market access for promising ventures. With growing demand for renewable energy in the region, the incubator is poised to transform Saudi Arabia into a global leader in clean energy innovation, aligning with its net-zero ambitions...",
            },
            {
              title: "Qatar Introduces Fast-Track Business Licensing for SMEs",
              date: "Jul 15, 2025",
              img: "/news/q2.jpg",
              text: "Qatar has rolled out a fast-track licensing system designed to simplify the process of starting a business. The new platform allows entrepreneurs to secure operational licenses within 72 hours, significantly reducing bureaucratic delays. This initiative targets SMEs in high-potential sectors such as fintech, e-commerce, and creative industries. Alongside this, the government is offering digital training programs to help small businesses integrate cutting-edge technology into their operations...",
            },
            {
              title:
                "Oman Signs Strategic Partnership with European Venture Capital Firms",
              date: "Jul 10, 2025",
              img: "/news/o3.jpg",
              text: "Oman’s Ministry of Commerce has signed a groundbreaking agreement with leading European venture capital firms to co-invest in high-growth startups within the Sultanate. The collaboration will see millions in joint funding allocated to sectors like agri-tech, logistics, and maritime innovation. This move not only brings in financial resources but also provides Omani entrepreneurs with valuable international exposure and access to overseas markets...",
            },
            {
              title:
                "Saudi Arabia Opens Startup Visa Program for Global Entrepreneurs",
              date: "Jul 5, 2025",
              img: "/news/s4.jpg",
              text: "To attract global talent, Saudi Arabia has introduced a Startup Visa program granting foreign entrepreneurs residency and access to local funding opportunities. The program is designed to fast-track innovative companies into the Saudi market, offering tailored business support, networking events, and integration into the Kingdom’s innovation clusters. This bold initiative is expected to significantly boost the country’s entrepreneurial ecosystem and support Vision 2030’s diversification goals...",
            },
            {
              title:
                "Qatar Invests in AI-Powered Healthcare Solutions for Startups",
              date: "Jul 1, 2025",
              img: "/news/q3.jpg",
              text: "Qatar has committed substantial funding toward startups developing AI-driven healthcare solutions, aiming to revolutionize patient care and medical research. The initiative includes grants, access to hospital networks for clinical trials, and partnerships with global medical technology leaders. By fostering innovation in telemedicine, diagnostics, and predictive analytics, Qatar positions itself at the forefront of healthcare technology in the Gulf region...",
            },
          ].map((news, index) => (
            <div
              key={index}
              className="w-full bg-white p-4 sm:p-8 flex flex-col md:flex-row md:items-start gap-8 text-left mt-8"
            >
              {/* Left side: Heading + content */}
              <div className="flex-1 flex flex-col gap-4">
                <h2 className="text-xl sm:text-3xl font-bold">{news.title}</h2>

                {/* Text */}
                <div className="text-sm sm:text-base">{news.text}</div>

                {/* Button + Date in one row */}
                <div className="flex items-center justify-between gap-4 mt-4 flex-wrap">
                  <button
                    type="submit"
                    className="bg-[#D4AF37] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#0D1B2A] hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition"
                  >
                    Read more
                  </button>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CalendarIcon className="h-5 w-5 text-gray-600" />
                    <span className="text-sm">{news.date}</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-[30%]">
                <img
                  src={news.img}
                  alt={news.title}
                  className="rounded shadow-md object-cover w-full h-48 sm:h-60"
                />
              </div>
            </div>
          ))}
          {/* Pagination Section */}
          <div className="flex justify-center items-center mt-10 gap-1 sm:gap-2 text-sm sm:text-base mb-3">
            {/* Previous Button */}
            <button
              className="px-2 sm:px-3 py-1 rounded-lg bg-[#D4AF37] text-white font-semibold hover:bg-[#0D1B2A] hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition disabled:opacity-50"
              disabled={true} // Change when not on first page
            >
              Prev
            </button>

            {/* Page Numbers */}
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className={`px-2 sm:px-3 py-1 rounded-lg font-semibold border border-transparent transition ${
                  num === 1
                    ? "bg-[#D4AF37] text-white hover:bg-[#0D1B2A] hover:text-[#D4AF37] hover:border-[#D4AF37]"
                    : "bg-white text-[#0D1B2A] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37]"
                }`}
              >
                {num}
              </button>
            ))}

            {/* Next Button */}
            <button className="px-2 sm:px-3 py-1 rounded-lg bg-[#D4AF37] text-white font-semibold hover:bg-[#0D1B2A] hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
