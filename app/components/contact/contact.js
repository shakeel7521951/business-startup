"use client";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { FaHandshake } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] bg-[#0D1B2A]/80  overflow-hidden">
        {/* Background elements with Image tags */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {/* Header Image */}
          <Image
            src="/contact/contact.jpg"
            alt="Luxury gold texture"
            fill
            className="object-cover opacity-80 priority"
            quality={10}
            unoptimized
          />
        </div>

        <div className="container mx-auto h-full flex flex-col justify-center px-6 lg:ml-12 relative z-10">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#F9F9F9] mb-6 leading-tight animate-slideUp">
            Your Growth <span className="text-[#D4AF37]">Is Our Mission</span>
            <br />
            <span className="text-4xl">Start Your Journey with Us Today</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#F9F9F9]/80 max-w-2xl mb-10 animate-fadeIn delay-100">
            Together, we’ll transform today’s challenges into tomorrow’s
            opportunities, guiding your vision with strategy, innovation, and
            dedication so every step forward becomes a milestone in your success
            story
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fadeIn delay-200">
            <button className="bg-[#D4AF37] hover:bg-[#C19B2E] text-[#0D1B2A] font-bold py-3.5 px-7 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl">
              <FaHandshake className="mr-3 text-lg" />
              <span>Connect With Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className=" flex justify-center select-none bg-[#F9F9F9] font-sans  ">
        <div className="bg-[#F9F9F9] p-1 w-full max-w-[1140px] rounded-lg rounded-tr-lg">
          <div className="flex flex-col lg:flex-row justify-center py-3 gap-6">
            {/* Left side */}
            <div className="flex-1 bg-[#F9F9F9] p-6 sm:p-10 rounded-lg">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0D1B2A] mb-6">
                Contact
              </h2>

              {/* Contact Info */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <EnvelopeIcon className="h-4 w-4 text-[#D4AF37]" />
                  <span className="text-sm sm:text-base">
                    info@businessstartupsaudiarabia.com
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <PhoneIcon className="h-4 w-4 text-[#D4AF37]" />
                  <span className="text-sm sm:text-base">+966535455461</span>
                </div>
                <div className="flex gap-3">
                  <MapPinIcon className="h-6 w-6 text-[#D4AF37]" />
                  <span className="text-sm sm:text-base">
                    Business Start Up Saudi Office No: 28, First floor, Raden
                    Commercial Center, Al Muruj, Olaya Street, Near KAFD, Riyadh
                    12281
                  </span>
                </div>
              </div>

              {/* Keep in Touch */}
              <h3 className="text-xl sm:text-3xl font-semibold text-[#0D1B2A] mb-3">
                Keep in touch
              </h3>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Information on the most recent developments in the (business)
                ecosystem in the Kingdom of Saudi Arabia.
              </p>

              {/* Form */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="block w-full rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm 
             focus:border-[#D4AF37] focus:ring-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.5)] focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="block w-full rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm 
             focus:border-[#D4AF37] focus:ring-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.5)] focus:outline-none"
                />

                {/* Captcha */}
                <div className="col-span-2">
                  <div className="w-full !bg-[#f4eeeec7] max-w-xs border border-[#0D1B2A] rounded shadow-sm p-2 flex items-center justify-between">
                    <div className="flex items-center space-x-3 ml-3">
                      <input
                        type="checkbox"
                        className="w-7 h-7 sm:w-7 sm:h-7 border-2 border-[#D4AF37] rounded-sm bg-white appearance-none"
                      />
                      <span className="text-sm sm:text-sm font-semibold text-[#0D1B2A] tracking-tight">
                        I'm not a robot
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-[10px] sm:text-[10px] text-gray-500">
                      <img
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                        alt="reCAPTCHA"
                        className="w-7 h-7 sm:w-7 sm:h-7"
                      />
                      <span className="font-semibold text-[#D4AF37]">
                        reCAPTCHA
                      </span>
                      <div className="flex space-x-1">
                        <a href="#" className="hover:underline text-[#0D1B2A]">
                          Privacy
                        </a>
                        <span>-</span>
                        <a href="#" className="hover:underline text-[#0D1B2A]">
                          Terms
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#D4AF37] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#0D1B2A] hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition"
                >
                  Sign Up
                </button>
              </form>
            </div>

            {/* Right side */}
            <div className="flex-1 flex justify-center items-center">
              <div className="border-4 border-[#D4AF37] hover:border-[#0D1B2A] duration-700 rounded-full w-[250px] sm:w-[363px] h-[250px] sm:h-[363px] flex items-center justify-center">
                <div
                  className="w-[230px] sm:w-[350px] h-[230px] sm:h-[350px] rounded-full flex flex-col justify-center items-center text-center p-4 shadow-lg"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(250, 240, 200, 0.8) 0%, rgba(255, 255, 252, 1) 100%)",
                  }}
                >
                  <h2 className="text-xl sm:text-3xl font-bold text-[#0D1B2A] mb-3">
                    Contact
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0D1B2A] mb-5">
                    Please click on the link and reach out to our experts and
                    specialists to discuss your requirements.
                  </p>
                  <button className="bg-[#D4AF37] text-[#0D1B2A] px-4 py-2 rounded-xl hover:bg-[#0D1B2A] hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second form */}
          <div className="bg-[#F9F9F9] px-4 sm:px-10 pt-5">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Inputs */}
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-lg sm:rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm 
             focus:border-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.5)] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Industry"
                className="w-full rounded-lg sm:rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm 
             focus:border-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.5)] focus:outline-none"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-lg sm:rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm 
             focus:border-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.5)] focus:outline-none"
              />
              <select
                className="w-full rounded-lg sm:rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm 
             focus:border-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.5)] focus:outline-none"
              >
                <option value="">Company Size</option>
                <option value="0-10">0-10 Employees</option>
                <option value="10-50">10-50 Employees</option>
                <option value="50-200">50-200 Employees</option>
                <option value="200-500">200-500 Employees</option>
                <option value="500+">&gt; 500 Employees</option>
              </select>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg sm:rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm 
             focus:border-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.5)] focus:outline-none"
              />
              <select
                className="w-full rounded-lg sm:rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm 
             focus:border-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.5)] focus:outline-none"
              >
                <option value="">services interested in</option>
                <option value="Preparation">Preparation</option>
                <option value="Formation">Formation</option>
                <option value="Expension">Expension</option>
                <option value="Transition">Transition</option>
              </select>

              <input
                type="tel"
                placeholder="Telephone"
                className="w-full rounded-lg sm:rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm 
             focus:border-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.5)] focus:outline-none"
              />
              <select
                className="w-full rounded-lg sm:rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm 
             focus:border-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.5)] focus:outline-none"
              >
                <option value="">Sub Activity interested in</option>
                <option value="market-research">Market Research</option>
                <option value="financial">Financial Planning</option>
                <option value="team">Team Recruitment</option>
                <option value="bussiness">Bussiness Launch</option>
                <option value="digital">Digital Transformation</option>
              </select>

              <input
                type="text"
                placeholder="Organization"
                className="w-full rounded-lg sm:rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm 
             focus:border-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.5)] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg sm:rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm 
             focus:border-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.5)] focus:outline-none"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className=" focus:border-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.5)] focus:outline-none p-2  col-span-1 sm:col-span-2 rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm w-full"
              ></textarea>

              {/* Captcha */}
              <div className="col-span-1 sm:col-span-2 ">
                <div className="w-full !bg-[#f4eeeec7] max-w-xs border border-[#0D1B2A] rounded shadow-sm p-2 flex items-center justify-between">
                  <div className="flex items-center space-x-3 ml-3">
                    <input
                      type="checkbox"
                      className="w-7 h-7 sm:w-7 sm:h-7 border-2 border-[#D4AF37] bg-white rounded-sm appearance-none"
                    />
                    <span className="text-sm sm:text-sm font-semibold text-[#0D1B2A] tracking-tight">
                      I'm not a robot
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-[10px] sm:text-[10px] text-gray-500">
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="reCAPTCHA"
                      className="w-7 h-7 sm:w-7 sm:h-7"
                    />
                    <span className="font-semibold text-[#D4AF37]">
                      reCAPTCHA
                    </span>
                    <div className="flex space-x-1">
                      <a href="#" className="hover:underline text-[#0D1B2A]">
                        Privacy
                      </a>
                      <span>-</span>
                      <a href="#" className="hover:underline text-[#0D1B2A]">
                        Terms
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="col-span-1 sm:col-span-2 flex mb-3 justify-center sm:justify-start">
                <button
                  type="submit"
                  className="bg-[#D4AF37] text-[#0D1B2A] font-semibold px-5 py-2 rounded-lg hover:bg-[#0D1B2A] hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition duration-200 w-full sm:w-auto"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className=" overflow-hidden bg-[#0D1B2A] py-10">
        <h2 className="text-[#F9F9F9] text-center text-3xl mb-6">
          The Destination
        </h2>
        <div className="overflow-hidden px-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633980.8511495897!2d47.897305984169386!3d25.354826105903088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03ba0dd04c2d%3A0x17cdafc216545f12!2sQatar!5e0!3m2!1sen!2s!4v1753500000000!5m2!1sen!2s"
            loading="lazy"
            className="w-full h-[400px] border-4 border-[#D4AF37] rounded-lg"
          ></iframe>
        </div>
      </div>
    </>
  );
}
