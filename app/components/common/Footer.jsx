"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const footerData = {
  contact: {
    email: "info@businessstartup.com",
    phone: "+974 5034 3737",
    address:
      "Business Start Up in association with Shorouk Media, Level 18, Tornado Tower, West Bay, Doha, Qatar",
  },
  activities: ["Preparation", "Formation", "Expansion", "Transition"],
  explore: ["Home", "About", "Saudi Arabia", "Oman", "Qatar", "Initiatives", "News", "Events", "Contact"],
  network: [
    "Education Institutions",
    "Business Councils",
    "Government & Semi-Governmental Entities",
    "Experts & Specialists",
    "Financiers & Investors",
    "Banks & Financial Institutions",
    "Incubators & Accelerators",
  ],
  posts: [
    {
      date: "February 11, 2025",
      title: "Saudi Arabia and Cyprus strengthen maritime cooperation",
    },
    {
      date: "January 28, 2025",
      title: "Qatar strategic relations strengthening economic prosperity",
    },
    {
      date: "January 14, 2025",
      title: "Oman’s 2025 budget balances social welfare and economic growth",
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
    <footer className=" bg-gradient-to-b from-teal-600 to-sky-900 text-white pt-12 py-5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#AF1917] inline-block">Contact</h3>
          <p className="flex items-center gap-2 mb-2">
          <FaMailBulk/> {footerData.contact.email}
          </p>
          <p className="flex items-center gap-2 mb-2">
            <FaPhone/> {footerData.contact.phone}
          </p>
          <p className="flex items-start gap-2">
             <FiMapPin className="lg:text-5xl md:text-3xl text-xl lg:-mt-2" />  {footerData.contact.address}
          </p>
        {/* Newsletter */}
        <div className="mt-8 grid grid-cols-1 gap-4 items-center">
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-[#AF1917]  inline-block">
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
              className="p-2 rounded bg-white text-black"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 rounded bg-white text-black"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-fit"
            >
              Sign Up
            </button>
          </form>
        </div>
        </div>

        {/* Activities & Network */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#AF1917]  inline-block">Activities</h3>
          <ul className="mb-6">
            {footerData.activities.map((item) => (
              <li key={item} className="hover:underline cursor-pointer hover:text-[#45424297] transition-all  ease-in-out duration-300">{item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#AF1917]  inline-block md:mt-12">Network</h3>
          <ul>
            {footerData.network.map((item) => (
              <li key={item} className="hover:underline cursor-pointer hover:text-[#45424297] transition-all  ease-in-out duration-300">{item}</li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#AF1917]  inline-block">Explore our site</h3>
          <ul>
            {footerData.explore.map((item) => (
              <li key={item} className="hover:underline cursor-pointer hover:text-[#45424297] transition-all  ease-in-out duration-300">{item}</li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#AF1917]  inline-block">Recent posts</h3>
          {footerData.posts.map((post) => (
            <div key={post.title} className="mb-4">
              <p className="text-sm">{post.date}</p>
              <p className="hover:underline font-semibold cursor-pointer hover:text-[#45424297] transition-all  ease-in-out duration-300">{post.title}</p>
            </div>
          ))}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 border-b-2 border-[#AF1917]  inline-block">Follow us</h3>
            <div className="flex space-x-4 mt-2">
              {footerData.socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-white hover:text-[#45424297] text-2xl transition-transform transform hover:scale-110"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>



      {/* Copyright */}
      <div className="mt-12 text-center text-sm">
        Please <a href="#" className="underline">click here</a> to view our Terms of Use - Copyright © 2017 - 2025
      </div>
    </footer>
  );
}
