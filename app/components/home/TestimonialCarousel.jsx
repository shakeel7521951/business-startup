'use client';
import { useState } from "react";

export function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "Nerou helped us establish our regional HQ in Riyadh within 2 weeks. Their PRO services saved us countless hours with government paperwork.",
      author: "Ahmed Al-Mansoori",
      company: "TechSolutions MENA",
      avatar: "/avatar1.jpg"
    },
    {
      quote: "From company formation to CRM implementation, their end-to-end solution made our Oman expansion completely seamless.",
      author: "Sarah Johnson",
      company: "Global Logistics Partners",
      avatar: "/avatar2.jpg"
    },
    {
      quote: "Their tax advisory service helped us optimize our structure across Qatar and Saudi entities, saving 30% in compliance costs.",
      author: "Mohammed Khan",
      company: "Arabian Ventures",
      avatar: "/avatar3.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-10 bg-gradient-to-r from-[#0D1B2A] to-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#D4AF37] mb-4">
          Success Stories
        </h2>
        <p className="text-lg text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Trusted by 500+ businesses across the GCC
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-2xl p-8 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="relative">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author}
                    className="w-32 h-32 rounded-full border-4 border-[#D4AF37] object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#D4AF37] rounded-full p-2">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <blockquote className="text-lg italic text-gray-700 mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="text-right">
                  <p className="font-bold text-[#0D1B2A]">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#D4AF37]' : 'bg-gray-500'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}