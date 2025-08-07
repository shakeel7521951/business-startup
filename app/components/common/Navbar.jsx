"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <div className="flex justify-between gap-15 items-center px-4 py-4  max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center ">
            <img src="../navbar/logo.svg" alt="Logo" className="h-14 w-full" />
          </div>
        </Link>

        <div>
          {/* Call Now */}
          <div className="hidden md:block text-sm text-teal-600/80 font-medium text-end mb-4">
            Free Consultation: <a href="tel:+97450343737" className="hover:underline">+97450343737</a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="hover:text-teal-600">Home</Link>
            <Link href="/about" className="hover:text-teal-600">About</Link>
            <Link href="/oman" className="hover:text-teal-600">Oman</Link>

            <div className="relative group">
              <button className="flex items-center  hover:text-teal-600">
                Activites <FaChevronDown className="ml-1  text-xs" />
              </button>
              <div className="absolute top-6 left-0 hidden group-hover:block bg-white rounded px-6 py-2 z-10 text-nowrap">
                <Link href="/activity1" className="block py-1 hover:text-teal-600">Preparation</Link>
                <Link href="/activity1" className="block py-1 hover:text-teal-600">Formation</Link>
                <Link href="/activity1" className="block py-1 hover:text-teal-600">Expansion</Link>
                <Link href="/activity2" className="block py-1 hover:text-teal-600">Transition</Link>
              </div>
            </div>

            <Link href="/initiatives" className="hover:text-teal-600">Initiatives</Link>

            <div className="relative group">
              <button className="flex items-center hover:text-teal-600">
                Network <FaChevronDown className="ml-1 text-xs" />
              </button>
              <div className="absolute top-6 left-0 hidden group-hover:block bg-white  rounded px-5 py-2 z-10 text-nowrap">
                <Link href="/partner1" className="block py-1 hover:text-teal-600">Education Institutions</Link>
                <Link href="/partner1" className="block py-1 hover:text-teal-600">Business Councils</Link>
                <Link href="/partner1" className="block py-1 hover:text-teal-600">Government & Semi-Governmental Entities</Link>
                <Link href="/partner1" className="block py-1 hover:text-teal-600">Experts & Specialists</Link>
                <Link href="/partner1" className="block py-1 hover:text-teal-600">Financiers & Investors</Link>
                <Link href="/partner1" className="block py-1 hover:text-teal-600">Banks & Financial Institutions</Link>
                <Link href="/partner2" className="block py-1 hover:text-teal-600">Incubators & Accelerators</Link>
              </div>
            </div>

            <Link href="/news" className="hover:text-teal-600">News</Link>
            <Link href="/events" className="hover:text-teal-600">Events</Link>
            <Link href="/contact" className="hover:text-teal-600">Contact</Link>
          </nav>
        </div>

        {/* Mobile Icon */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-teal-600">Home</Link>
          <Link href="/about" className="block hover:text-teal-600">About</Link>
          <Link href="/oman" className="block hover:text-teal-600">Oman</Link>
          <Link href="/activities" className="block hover:text-teal-600">Activities</Link>
          <Link href="/initiatives" className="block hover:text-teal-600">Initiatives</Link>
          <Link href="/network" className="block hover:text-teal-600">Network</Link>
          <Link href="/news" className="block hover:text-teal-600">News</Link>
          <Link href="/events" className="block hover:text-teal-600">Events</Link>
          <Link href="/contact" className="block hover:text-teal-600">Contact</Link>
          {/* <p className="text-sm text-teal-600 pt-2">Call: +97450343737</p> */}
        </nav>
      )}
    </header>
  );
}
