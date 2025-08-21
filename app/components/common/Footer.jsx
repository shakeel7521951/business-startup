"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const footerData = {
  contact: {
    email: "info@businessstartup.com",
    phone: "+974 5034 3737",
    address: "Business Start Up in association with Shorouk Media, Level 18, Tornado Tower, West Bay, Doha, Qatar",
  },
  services: [
    { name: "Preparation", path: "/services" },
    { name: "Formation", path: "/services" },
    { name: "Expansion", path: "/services" },
    { name: "Transition", path: "/services" }
  ],
  explore: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Initiatives", path: "/initiatives" },
    { name: "News", path: "/news" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" }
  ],
  network: [
    { name: "Education Institutions", path: "/networks/education-institutions" },
    { name: "Business Councils", path: "/networks/business-councils" },
    { name: "Government & Semi-Governmental Entities", path: "/networks/government-entities" },
    { name: "Experts & Specialists", path: "/networks/experts-and-specialists" },
    { name: "Financiers & Investors", path: "/networks/finance-investors" },
    { name: "Banks & Financial Institutions", path: "/networks/banks-financial-institutions" },
    { name: "Incubators & Accelerators", path: "/networks/incubators-accelerators" }
  ],
  posts: [
    {
      date: "February 11, 2025",
      title: "Saudi Arabia and Cyprus strengthen maritime cooperation",
      path: "/news/saudi-cyprus-cooperation"
    },
    {
      date: "January 28, 2025",
      title: "Qatar strategic relations strengthening economic prosperity",
      path: "/news/qatar-economic-prosperity"
    },
    {
      date: "January 14, 2025",
      title: "Oman's 2025 budget balances social welfare and economic growth",
      path: "/news/oman-budget-2025"
    },
  ],
  socialIcons: [
    { icon: FaFacebookF, link: "#" },
    { icon: FaTwitter, link: "#" },
    { icon: FaYoutube, link: "#" },
    { icon: FaLinkedinIn, link: "#" },
    { icon: FaInstagram, link: "#" },
  ],
};

export default function Footer() {
  return (
    <div className="bg-[#0D1B2A] relative overflow-hidden">
      {/* Luxury background elements - light version */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/about/bg (3).jpg"
          alt="Subtle gold texture background"
          fill
          className="object-cover opacity-6"
          quality={10}
          unoptimized={true}
        />
      </div>
      <footer className=" text-[#F9F9F9] pt-12 py-5 px-6 relative z-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#D4AF37] inline-block">Contact</h3>
            <p className="flex items-center gap-2 mb-2">
              <FaMailBulk className="text-[#D4AF37]" /> 
              <Link href={`mailto:${footerData.contact.email}`} className="hover:underline hover:text-[#D4AF37] transition-colors duration-300">
                {footerData.contact.email}
              </Link>
            </p>
            <p className="flex items-center gap-2 mb-2">
              <FaPhone className="text-[#D4AF37]" /> 
              <Link href={`tel:${footerData.contact.phone.replace(/\s+/g, '')}`} className="hover:underline hover:text-[#D4AF37] transition-colors duration-300">
                {footerData.contact.phone}
              </Link>
            </p>
            <p className="flex items-start gap-2">
              <FiMapPin className="text-[#D4AF37] lg:text-xl mt-1" /> 
              {footerData.contact.address}
            </p>

            {/* Newsletter */}
            <div className="mt-8 grid grid-cols-1 gap-4 items-center">
              <div>
                <h3 className="text-lg font-semibold mb-4 border-b-2 border-[#D4AF37] inline-block">
                  Keep in touch with us
                </h3>
                <p>
                  Information on the most recent developments in the (business) ecosystem in the Sultanate of Oman, Saudi Arabia, and Qatar.
                </p>
              </div>
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-2 rounded bg-white/10 text-[#F9F9F9] placeholder-[#F9F9F9]/70 border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-2 rounded bg-white/10 text-[#F9F9F9] placeholder-[#F9F9F9]/70 border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#D4AF37] hover:bg-[#C19B2E] text-[#0D1B2A] font-bold py-2 px-4 rounded w-fit transition-colors duration-300"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          {/* services & Network */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#D4AF37] inline-block">Services</h3>
            <ul className="mb-6 space-y-2">
              {footerData.services.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path} 
                    className="hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#D4AF37] inline-block md:mt-6">Network</h3>
            <ul className="space-y-2">
              {footerData.network.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path} 
                    className="hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#D4AF37] inline-block">Explore our site</h3>
            <ul className="space-y-2">
              {footerData.explore.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path} 
                    className="hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#D4AF37] inline-block">Recent posts</h3>
            <div className="space-y-4">
              {footerData.posts.map((post) => (
                <div key={post.path} className="border-b border-[#D4AF37]/20 pb-4">
                  <p className="text-sm text-[#F9F9F9]/70">{post.date}</p>
                  <Link 
                    href={post.path} 
                    className="hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {post.title}
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#D4AF37] inline-block">Follow us</h3>
              <div className="flex space-x-4">
                {footerData.socialIcons.map((social, index) => (
                  <Link
                    key={index}
                    href={social.link}
                    className="text-[#F9F9F9] hover:text-[#D4AF37] text-xl transition-colors duration-300"
                  >
                    <social.icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-[#F9F9F9]/80">
          Please <Link href="/terms" className="text-[#D4AF37] hover:underline">click here</Link> to view our Terms of Use - Copyright © 2017 - 2025
        </div>
      </footer>
    </div>
  );
}