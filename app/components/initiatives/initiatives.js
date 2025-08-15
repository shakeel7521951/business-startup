"use client";

export default function Initiative() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full sm:h-[850px] h-[650px] overflow-hidden">
        {/* Background Image */}
        <img
          src="./initiatives/iMain.jpg"
          alt="Initiatives Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="flex justify-center select-none mt-5">
        {/* Main container */}
        <div className="bg-white pt-20 px-6 sm:px-12 lg:px-20 max-w-screen-xl mx-auto flex flex-col items-center text-center rounded-2xl shadow-lg">
          {/* Title + Intro */}
          <div className="text-4xl sm:text-5xl font-extrabold mb-8 text-[#0D1B2A] tracking-tight">
            Initiatives
          </div>
          <div className="text-sm sm:text-base w-full mb-12 space-y-4 text-[#1C1C1C] leading-relaxed">
            <div>
              Our initiatives celebrate some of the most promising startups and
              SMEs from Qatar, Saudi Arabia, and Oman — businesses that are
              redefining industries and shaping the Gulf’s future economy.
            </div>
            <div>
              We are a connector, growth partner, and ecosystem enabler. Our
              mission is to help entrepreneurs scale sustainably, foster
              partnerships, and secure funding — with a special focus on the
              crucial stages before and after incubation or acceleration
              programs.
            </div>
            <div>
              From amplifying brand visibility to opening new markets, we create
              the conditions for long-term success, grounded in innovation and
              regional collaboration.
            </div>
            <div>
              Whether you’re in the idea phase or ready for global expansion,
              we’re here to support your vision in Qatar, Saudi Arabia, and
              Oman.
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="w-full mb-16">
            <h2 className="text-2xl font-bold mb-6 text-[#0D1B2A]">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "150+", label: "Startups Supported" },
                { value: "$20M+", label: "Funding Facilitated" },
                { value: "3", label: "Countries" },
                { value: "50+", label: "Partners & Investors" },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F9F9] border border-[#D4AF37] rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl font-bold text-[#0D1B2A]">
                    {metric.value}
                  </div>
                  <div className="text-sm text-[#1C1C1C]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* How We Support */}
          <div className="w-full mb-16">
            <h2 className="text-2xl font-bold mb-6 text-[#0D1B2A]">
              How We Support Initiatives
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-sm">
              {[
                "Awareness & Branding",
                "Funding Support",
                "Strategic Partnerships",
                "Market Access",
                "Scaling & Growth",
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F9F9] border border-transparent rounded-lg shadow p-6 duration-300 hover:bg-[#0D1B2A] hover:text-[#D4AF37] hover:border-[#D4AF37] text-[#1C1C1C] font-medium cursor-pointer"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div className="w-full mb-16">
            <h2 className="text-2xl font-bold mb-6 text-[#0D1B2A]">
              Our Ecosystem Partners
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-[#F9F9F9] border border-[#D4AF37] rounded-lg w-32 h-16 flex items-center justify-center shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 text-[#0D1B2A] font-semibold">
                <img src="../navbar/logo.png" alt="logo" />
              </div>
            </div>
          </div>

          {/* One Success Story */}
          <div className="w-full mb-8 text-left">
            <h2 className="text-2xl font-bold mb-6 text-[#0D1B2A]">
              Success Story
            </h2>
            <div className="bg-[#F9F9F9] border border-[#D4AF37] rounded-lg shadow p-6 hover:shadow-xl transition duration-300">
              <div className="text-lg font-semibold mb-2 text-[#0D1B2A]">
                HealthBridge - Qatar
              </div>
              <div className="text-sm text-[#1C1C1C] mb-4 leading-relaxed">
                HealthBridge transformed Qatar’s healthcare technology landscape
                by leveraging AI-driven solutions. With our strategic support,
                they secured major partnerships, raised significant funding, and
                expanded into Saudi Arabia and Oman within two years.
              </div>
            </div>
            <button className="bg-[#D4AF37] text-[#0D1B2A] font-semibold px-6 py-2 rounded-lg hover:bg-[#0D1B2A] hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition duration-500 mt-4">
              Find Out More
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#0D1B2A] text-white shadow p-10 w-full text-center mb-3">
        <h3 className="text-xl font-bold mb-4">Join Our Initiatives</h3>
        <p className="text-sm sm:text-base mb-6 max-w-2xl mx-auto text-[#F9F9F9]">
          Are you a founder in Qatar, Saudi Arabia, or Oman looking to grow your
          startup? Partner with us and access funding, mentorship, and new
          markets.
        </p>
        <button className="bg-[#D4AF37] text-[#0D1B2A] font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition duration-500">
          Apply Now
        </button>
      </div>
    </>
  );
}
