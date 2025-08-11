"use client";

export default function Initiative() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full sm:h-[850px] h-[650px] overflow-hidden">
        {/* Background Image */}
        <img
          src="./initiatives/iMain.jpg"
          alt="News Background"
          className="w-full h-full object-cover"
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-[450px] bg-gradient-to-t from-[#F9F9F9] to-transparent"></div>
      </div>

      {/* Form Section */}
      <div className="relative z-20 -mt-[150px] flex justify-center select-none">
        {/* Main container */}
        <div className="bg-white pt-20 px-4 sm:pl-25 sm:pr-25 max-w-screen-xl mx-auto flex flex-col items-center text-center">
          {/* Title + Intro */}
          <div className="text-3xl sm:text-4xl font-bold mb-8">Initiatives</div>
          <div className="text-sm sm:text-base w-full mb-12 space-y-4">
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
            <h2 className="text-2xl font-bold mb-6">Our Impact</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "150+", label: "Startups Supported" },
                { value: "$20M+", label: "Funding Facilitated" },
                { value: "3", label: "Countries" },
                { value: "50+", label: "Partners & Investors" },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F9F9] rounded-lg shadow p-6 hover:shadow-lg transition"
                >
                  <div className="text-2xl font-bold text-[#0D1B2A]">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* How We Support */}
          <div className="w-full mb-16">
            <h2 className="text-2xl font-bold mb-6">
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
                  className="bg-[#F9F9F9] rounded-lg shadow p-6 duration-400 hover:bg-[#D4AF37] hover:text-white transition"
                >
                  <div className="font-semibold">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div className="w-full mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Ecosystem Partners</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="bg-gray-100 rounded-lg w-32 h-16 flex items-center justify-center shadow hover:shadow-lg transition"
                >
                  Logo {num}
                </div>
              ))}
            </div>
          </div>

          {/* One Success Story */}
          <div className="w-full mb-8">
            <h2 className="text-2xl font-bold mb-6">Success Story</h2>
            <div className="bg-[#F9F9F9] rounded-lg shadow p-6 text-left hover:shadow-lg transition">
              <div className="text-lg font-semibold mb-2">
                HealthBridge - Qatar
              </div>
              <div className="text-sm text-gray-600 mb-4">
                HealthBridge transformed Qatar’s healthcare technology landscape
                by leveraging AI-driven solutions. With our strategic support,
                they secured major partnerships, raised significant funding, and
                expanded into Saudi Arabia and Oman within two years.
              </div>
            </div>
            <button className="bg-[#D4AF37] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#0D1B2A] hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition mt-4 duration-500">
              Find Out More
            </button>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="bg-[#0D1B2A] text-white shadow p-8 w-full text-center mb-3">
        <h3 className="text-xl font-bold mb-4">Join Our Initiatives</h3>
        <p className="text-sm sm:text-base mb-6">
          Are you a founder in Qatar, Saudi Arabia, or Oman looking to grow your
          startup? Partner with us and access funding, mentorship, and new
          markets.
        </p>
        <button className="bg-[#D4AF37] text-white font-semibold px-5 py-2 rounded-lg hover:bg-white hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition duration-500">
          Apply Now
        </button>
      </div>
    </>
  );
}
