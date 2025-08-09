"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0D1B2A] text-[#F9F9F9] relative">
      {/* Luxury background elements - light version */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/about/bg (3).jpg"
          alt="Subtle gold texture background"
          priority
          fill
          className="object-cover opacity-5"
          quality={10}
          unoptimized={true}
        />
      </div>
      <div className="flex justify-between gap-15 items-center px-4 py-4 pb-5 max-w-7xl mx-auto relative z-100">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <img src="../navbar/logo.svg" alt="Logo" className="h-14 w-full" />
          </div>
        </Link>

        <div>
          {/* Call Now */}
          <div className="hidden md:block text-[#D4AF37]/80 font-medium text-end mb-4 max-lg:my-auto">
            Free Consultation: <a href="tel:+97450343737" className="hover:underline">+97450343737</a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
            <Link href="/about" className="hover:text-[#D4AF37]">About</Link>
            <Link href="/oman" className="hover:text-[#D4AF37]">Oman</Link>

            <div className="relative group">
              <button className="flex items-center hover:text-[#D4AF37]">
                Activites <FaChevronDown className="ml-1 text-xs" />
              </button>
              <div className="absolute top-6 left-0 hidden group-hover:block bg-white rounded px-6 py-2 z-10 text-nowrap shadow-lg">
                <Link href="/activity1" className="block py-1 hover:text-[#D4AF37] text-[#0D1B2A]">Preparation</Link>
                <Link href="/activity1" className="block py-1 hover:text-[#D4AF37] text-[#0D1B2A]">Formation</Link>
                <Link href="/activity1" className="block py-1 hover:text-[#D4AF37] text-[#0D1B2A]">Expansion</Link>
                <Link href="/activity2" className="block py-1 hover:text-[#D4AF37] text-[#0D1B2A]">Transition</Link>
              </div>
            </div>

            <Link href="/initiatives" className="hover:text-[#D4AF37]">Initiatives</Link>

            <div className="relative group ">
              <button className="flex items-center hover:text-[#D4AF37]">
                Network <FaChevronDown className="ml-1 text-xs" />
              </button>
              <div className="absolute top-6 left-0 hidden group-hover:block bg-white rounded px-5 py-2 z-10 text-nowrap shadow-lg">
                <Link href="/partner1" className="block py-1 hover:text-[#D4AF37] text-[#0D1B2A]">Education Institutions</Link>
                <Link href="/partner1" className="block py-1 hover:text-[#D4AF37] text-[#0D1B2A]">Business Councils</Link>
                <Link href="/partner1" className="block py-1 hover:text-[#D4AF37] text-[#0D1B2A]">Government & Semi-Governmental Entities</Link>
                <Link href="/partner1" className="block py-1 hover:text-[#D4AF37] text-[#0D1B2A]">Experts & Specialists</Link>
                <Link href="/partner1" className="block py-1 hover:text-[#D4AF37] text-[#0D1B2A]">Financiers & Investors</Link>
                <Link href="/partner1" className="block py-1 hover:text-[#D4AF37] text-[#0D1B2A]">Banks & Financial Institutions</Link>
                <Link href="/partner2" className="block py-1 hover:text-[#D4AF37] text-[#0D1B2A]">Incubators & Accelerators</Link>
              </div>
            </div>

            <Link href="/news" className="hover:text-[#D4AF37]">News</Link>
            <Link href="/events" className="hover:text-[#D4AF37]">Events</Link>
            <Link href="/contact" className="hover:text-[#D4AF37]">Contact</Link>
          </nav>
        </div>

        {/* Mobile Icon */}
        <button className="lg:hidden text-[#F9F9F9]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden px-4 pb-4 space-y-2 relative z-[100] transition-all duration-500 transform origin-top ">

          <Link href="/" className="block hover:text-[#D4AF37] py-2">Home</Link>
          <Link href="/about" className="block hover:text-[#D4AF37] py-2">About</Link>
          <Link href="/oman" className="block hover:text-[#D4AF37] py-2">Oman</Link>
          <Link href="/activities" className="block hover:text-[#D4AF37] py-2">Activities</Link>
          <Link href="/initiatives" className="block hover:text-[#D4AF37] py-2">Initiatives</Link>
          <Link href="/network" className="block hover:text-[#D4AF37] py-2">Network</Link>
          <Link href="/news" className="block hover:text-[#D4AF37] py-2">News</Link>
          <Link href="/events" className="block hover:text-[#D4AF37] py-2">Events</Link>
          <Link href="/contact" className="block hover:text-[#D4AF37] py-2">Contact</Link>
        </nav>
      )
      }
    </header >
  );
}