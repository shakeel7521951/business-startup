"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";


export default function Header() {

  return (
    <section className="relative h-screen bg-[#0D1B2A] overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-30">
        <source src="/home/home.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[url('/gold-particles.png')] opacity-10" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-16">


        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Complete Business Solution Across the GCC
          </h1>
          <p className="text-xl text-[#F9F9F9] mb-10">
            Government approved company formation • Strategic advisory • Digital growth systems
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link href='/contact'>
              <button className="bg-[#D4AF37] hover:bg-[#C9A227] text-[#0D1B2A] font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                Start in Qatar
              </button>
            </Link>
            <Link href='/contact'>
              <button className="bg-[#0D1B2A] border-2 border-white hover:bg-white hover:text-[#0D1B2A] text-white font-bold py-3 px-8 rounded-full transition-all">
                Launch in Saudia
              </button>
            </Link>
            <Link href='/contact'>
              <button className="bg-[#0D1B2A] border-2 border-white hover:bg-white hover:text-[#0D1B2A] text-white font-bold py-3 px-8 rounded-full transition-all">
                Begin in Oman
              </button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 opacity-90">
            {[
              "Licensed by QFC/MOCI/SAGIA",
              "500+ Successful Registrations",
              "24-48h Emergency PRO Service"
            ].map((badge) => (
              <div key={badge} className="flex items-center text-white">
                <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating WhatsApp CTA */}
        <a href="https://wa.me/97412345678" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
          <FaWhatsapp className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}