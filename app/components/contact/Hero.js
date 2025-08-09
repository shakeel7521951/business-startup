"use client";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import React, { useState } from "react";
import "./contact.css";

export default function Hero() {
  const [verified, setVerified] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-white text-2xl " />,
      bgClass: "facebook-bg",
      followLink: "#",
      viewLink: "#",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-white text-2xl" />,
      bgClass: "insta-bg",
      followLink: "#",
      viewLink: "#",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-white text-2xl" />,
      bgClass: "twitter-bg",
      followLink: "#",
      viewLink: "#",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[850px] overflow-hidden">
        {/* Background Image */}
        <img
          src="/contact/contact3.jpg"
          alt="Luxury Business Background"
          className="w-full h-full object-cover"
        />

        {/* Bottom white fade */}
        <div className="absolute bottom-0 left-0 w-full h-[450px] bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Form Section */}
      <div className="relative z-20 -mt-[150px] flex justify-center pb-20">
        {/* first form */}
        <div className="bg-white p-1">
          <div className="flex justify-center py-3 ">
            <div className="w-[1140px] flex gap-6  ml-4">
              {/* Left side - Text & Form */}
              <div className="flex-1 bg-white p-10 rounded-lg">
                <h2 className="text-4xl font-bold text-[#0D1B2A] mb-8 font-gotham">
                  Contact
                </h2>

                {/* Contact Info */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-2">
                    <EnvelopeIcon className="h-4 w-4 text-blue-500" />
                    <span>info@businessstartupsaudiarabia.com</span>
                  </div>

                  <div className="flex items-center gap-4 mb-2">
                    <PhoneIcon className="h-4 w-4 text-blue-500" />
                    <span>+966535455461</span>
                  </div>
                  <div className="flex gap-4">
                    <MapPinIcon className="h-8 w-8 text-blue-500" />
                    <span>
                      Business Start Up Saudi Office No: 28, First floor, Raden
                      Commercial Center, Al Muruj, Olaya Street, Near KAFD,
                      Riyadh 12281
                    </span>
                  </div>
                </div>

                {/* Keep in Touch */}
                <h3 className="text-3xl font-semibold text-[#1B263B] mb-4  font-gotham">
                  Keep in touch
                </h3>
                <p className="text-gray-600 mb-6">
                  Information on the most recent developments in the (business)
                  ecosystem in the Kingdom of Saudi Arabia.
                </p>
                {/* Form */}
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      id="name"
                      className="block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-[#0D1B2A] focus:ring focus:ring-[#0D1B2A] focus:ring-opacity-50"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-[#0D1B2A] focus:ring focus:ring-[#0D1B2A] focus:ring-opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="w-full max-w-xs border border-gray-300 rounded shadow-sm p-2 flex items-center justify-between bg-white">
                    <div className="flex items-center space-x-3 ml-3">
                      <input
                        type="checkbox"
                        className="w-7 h-7 border-2 border-black rounded-sm appearance-none"
                      />
                      <span className="text-sm font-semibold tracking-tight ">
                        I'm not a robot
                      </span>
                    </div>

                    <div className="flex flex-col items-center text-[10px] text-gray-500">
                      <img
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                        alt="reCAPTCHA"
                        className="w-7 h-7"
                      />
                      <span>reCAPTCHA</span>
                      <div className="flex space-x-1">
                        <a href="#" className="">
                          Privacy
                        </a>
                        <span>-</span>
                        <a href="#" className="">
                          Terms
                        </a>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#0D1B2A] text-white font-gotham font-semibold px-5 py-2 rounded-lg hover:bg-[#1B263B] transition duration-200 w-fit"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
              {/* Right side - Circular Div */}
              <div className="flex-1 flex justify-end bg-white mt-10 mr-3 items-start">
                <div className="mr-8 flex items-center justify-center border-4 border-amber-500 rounded-full w-[363px] h-[363px]">
                  <div className="w-[350px] h-[350px] bg-green-400 rounded-full flex flex-col justify-center items-center text-center p-4 shadow-lg">
                    <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3">
                      Contact
                    </h2>
                    <p className="text-sm text-[#0D1B2A] mb-5">
                      Please click on the link and reach out to our experts and
                      specialists to discuss your requirements. It would be our
                      pleasure to assist you!
                    </p>
                    <button className="bg-amber-500 text-white px-5 py-2 rounded-xl hover:bg-amber-600 transition">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second form */}
          <div className="bg-white pl-5 pr-5 pt-5">
            <form className="grid grid-cols-2 gap-8 space-y-2">
              {/* Left Side */}
              <div className="space-y-5">
                <div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-[#0D1B2A] focus:ring focus:ring-[#0D1B2A] focus:ring-opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-[#0D1B2A] focus:ring focus:ring-[#0D1B2A] focus:ring-opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-[#0D1B2A] focus:ring focus:ring-[#0D1B2A] focus:ring-opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-[#0D1B2A] focus:ring focus:ring-[#0D1B2A] focus:ring-opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-[#0D1B2A] focus:ring focus:ring-[#0D1B2A] focus:ring-opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-5">
                <div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-[#0D1B2A] focus:ring focus:ring-[#0D1B2A] focus:ring-opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-[#0D1B2A] focus:ring focus:ring-[#0D1B2A] focus:ring-opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-[#0D1B2A] focus:ring focus:ring-[#0D1B2A] focus:ring-opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-[#0D1B2A] focus:ring focus:ring-[#0D1B2A] focus:ring-opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-[#0D1B2A] focus:ring focus:ring-[#0D1B2A] focus:ring-opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Message Block spanning both columns */}
              <div className="col-span-2">
                <textarea
                  rows="5"
                  className="block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-[#0D1B2A] focus:ring focus:ring-[#0D1B2A] focus:ring-opacity-50"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Captcha */}
              <div className="col-span-2">
                <div>
                  <div className="w-full max-w-xs border border-gray-300 rounded shadow-sm p-2 flex items-center justify-between bg-white">
                    <div className="flex items-center space-x-3 ml-3">
                      <input
                        type="checkbox"
                        className="w-7 h-7 border-2 border-black rounded-sm appearance-none"
                      />
                      <span className="text-sm font-semibold tracking-tight ">
                        I'm not a robot
                      </span>
                    </div>

                    <div className="flex flex-col items-center text-[10px] text-gray-500">
                      <img
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                        alt="reCAPTCHA"
                        className="w-7 h-7"
                      />
                      <span>reCAPTCHA</span>
                      <div className="flex space-x-1">
                        <a href="#" className="">
                          Privacy
                        </a>
                        <span>-</span>
                        <a href="#" className="">
                          Terms
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-5 mb-4">
                <button
                  type="submit"
                  className="bg-[#0D1B2A] text-white font-gotham font-semibold px-5 py-2 rounded-lg hover:bg-[#1B263B] transition duration-200 w-fit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pl-25 pr-25 pb-10">
        {socials.map((social, index) => (
          <div
            key={index}
            className={`shadow-lg rounded-lg overflow-hidden border border-gray-200 space-y-16`}
            style={{ aspectRatio: "12 / 13" }}
          >
            {/* Top Section */}
            <div
              className={`h-1/2 flex items-start justify-between pr-4 pt-3 gap-35 ${social.bgClass}`}
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center space-x-3 px-6">
                <div className="bg-black/10 p-1 rounded-full">
                  {social.icon}
                </div>
                <span className="text-white font-semibold text-xl">
                  {social.name}
                </span>
              </div>

              <a
                href={social.followLink}
                className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium hover:bg-gray-100"
              >
                Follow
              </a>
            </div>

            {/* Bottom Section */}
            <div className="h-1/3 p-6 bg-white text-center flex flex-col justify-end">
              <p className="text-gray-600 mb-4 text-sm">
                Nothing to see here - yet. <br />
                When they post, their posts will show up here.
              </p>
              <a
                href={social.viewLink}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
              >
                View on {social.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
