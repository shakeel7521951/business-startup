"use client";

import { useState } from "react";
import Link from "next/link";
import ServicesData from "./ServicesData";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full  h-[550px] bg-black ">
        <img
          src="../services/services (2).jpg"
          alt="Preparation Background"
          className="w-full h-full object-cover opacity-30 "
        />
        <div className=" absolute -bottom-10 left-0 right-0 mx-auto md:p-8 py-4 px-7  bg-[#0D1B2A]/50 backdrop-blur-sm rounded-lg shadow-2xl w-full transform -translate-y-1/2 sm:left-10 sm:right-auto sm:top-1/2 sm:bottom-auto max-w-[90%] md:max-w-[70%] lg:max-w-[50%]">
          {/* Gold Accent Bar */}
          <div className="absolute left-0 top-0 h-full w-2 bg-[#D4AF37] rounded-l-lg"></div>

          <div className="flex flex-col font-bold text-2xl sm:text-4xl text-[#D4AF37] mb-4 relative ">
            <h1 className="">Our Professional Services</h1>
            <hr className="absolute left-0 border-0 -bottom-1 h-1 w-15
             bg-[#D4AF37]"></hr>
          </div>

          <p className="text-white text-justify font-light lg:text-lg lg:leading-relaxed mb-6">
            From company formation to PRO and government services, visa and
            licensing, and business strategy, we provide end-to-end support to
            help your business grow in competitive markets. Our digital
            expertise includes marketing, website and app development by Nerou,
            and CRM and automation powered by Nerou System. We also amplify your
            brand voice with podcast and media branding, ensuring your business
            stands out across the GCC and beyond.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-center select-none bg-[#F9F9F9] py-16">
        <div className="px-4 sm:px-6 max-w-8xl w-full flex flex-col items-center">
          {/* Heading Section */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1B2A] mb-4 relative inline-block">
              Our Services
              {/* Golden underline */}
              <span className="block w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Explore our professional services designed to help businesses
              thrive across industries and regions with excellence and
              innovation.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-12 sm:px-10 w-full">
            {ServicesData.map((blog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 shadow-md 
                hover:shadow-xl transition-all duration-500 flex flex-col h-full cursor-pointer group"
              >
                {/* Image with hover zoom */}
                <div className="overflow-hidden rounded-t-xl">
                  <img
                    src={blog.image || "../services/preparation.jpg"}
                    alt={blog.title}
                    className="w-full h-auto object-cover rounded-t-xl transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="p-6 pt-3 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0D1B2A] mb-2 line-clamp-1 transition-colors duration-300 hover:text-[#D4AF37]">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {blog.text}
                    </p>
                    <p className="text-[#D4AF37] text-sm font-medium">
                      Saudi Arabia, Oman, Qatar
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-5">
                    <Link
                      href={`/services/${blog.slug}`}
                      className="block w-full bg-[#0D1B2A] text-white font-medium py-2
                  hover:bg-[#D4AF37] hover:text-[#0D1B2A] rounded-md border border-transparent 
                  hover:border-[#0D1B2A] transition duration-500 text-center"
                    >
                      View Full Service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
