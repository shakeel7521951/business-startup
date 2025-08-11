'use client';
import { useState } from "react";

export default function ServicePillars() {
  const [activeTab, setActiveTab] = useState(0);
  
  const services = [
    {
      category: "Company Formation",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      ),
      items: [
        "100% Foreign Ownership",
        "Free Zone & Mainland Setup",
        "Trade License Acquisition",
        "PRO & Government Services",
        "Visa Processing",
        "Bank Account Opening"
      ],
      cta: "Start My Business"
    },
    {
      category: "Business Advisory",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
        </svg>
      ),
      items: [
        "Market Entry Strategy",
        "Feasibility Studies",
        "Business Planning",
        "Tax Advisory",
        "Financial Valuation",
        "Audit & Assurance"
      ],
      cta: "Get Expert Advice"
    },
    {
      category: "Digital Solutions",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
        </svg>
      ),
      items: [
        "Custom Website Development",
        "Mobile Apps (iOS/Android)",
        "CRM & Business Portals",
        "WhatsApp Automation",
        "AI Chat & Voice Agents",
        "Digital Marketing"
      ],
      cta: "Explore Tech Solutions"
    }
  ];

  return (
    <section className="py-10 bg-[#F9F9F9]">
      <div className="container w-full sm:w-10/12 mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0D1B2A] mb-4">
          From Business Setup to Growth
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive services covering all aspects of establishing and expanding your GCC business
        </p>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg shadow p-1">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === index 
                    ? 'bg-[#D4AF37] text-[#0D1B2A]' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {service.category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Service Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-3">
            {/* Left Column - Icon & CTA */}
            <div className="bg-[#0D1B2A] p-8 flex flex-col items-center justify-center">
              <div className="text-[#D4AF37] mb-6">
                {services[activeTab].icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {services[activeTab].category}
              </h3>
              <button className="px-8 py-3 bg-[#D4AF37] hover:bg-[#C9A227] text-[#0D1B2A] font-bold rounded-full transition-colors">
                {services[activeTab].cta}
              </button>
            </div>
            
            {/* Right Column - Services List */}
            <div className="md:col-span-2 p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {services[activeTab].items.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            "Licensed in Qatar, Oman & SA",
            "500+ Successful Business Launches",
            "Government-Approved PRO Services",
           
          ].map((item, index) => (
            <div key={index} className="flex items-center text-[#0D1B2A]">
              <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}