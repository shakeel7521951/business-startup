"use client";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import "./contact.css";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[850px] overflow-hidden">
        <img
          src="./contact/contact.jpg"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-[200px] sm:h-[450px] bg-gradient-to-t from-[#F9F9F9] to-transparent"></div>
      </div>

      {/* Form Section */}
      <div className="relative z-20 -mt-[80px] sm:-mt-[150px] flex justify-center pb-10 sm:pb-20 px-4 select-none ">
        <div className="bg-[#F9F9F9] p-1 w-full max-w-[1140px] rounded-tl-lg rounded-tr-lg">
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
                  className="block w-full rounded-lg border !bg-[#f4eeeec7] border-[#0D1B2A] px-3 py-2 text-sm focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="block w-full rounded-lg border !bg-[#f4eeeec7] border-[#0D1B2A] px-3 py-2 text-sm focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                />

                {/* Captcha */}
                <div className="col-span-2 ">
                  <div className="w-full !bg-[#f4eeeec7] max-w-xs border border-[#0D1B2A] rounded shadow-sm p-2 flex items-center justify-between ">
                    <div className="flex items-center space-x-3 ml-3">
                      <input
                        type="checkbox"
                        className="w-7 h-7 border-2 border-[#0D1B2A] rounded-sm appearance-none"
                      />
                      <span className="text-sm font-semibold tracking-tight">
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
                        <a href="#">Privacy</a>
                        <span>-</span>
                        <a href="#">Terms</a>
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
                className="rounded-tl-lg sm:rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm w-full"
              />
              <input
                type="text"
                placeholder="Industry"
                className="rounded-tr-lg sm:rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm w-full"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm w-full"
              />
              <select className="rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm w-full">
                <option disabled selected>
                  Company Size
                </option>
                <option value="0-10">0-10 Employees</option>
                <option value="10-50">10-50 Employees</option>
                <option value="50-200">50-200 Employees</option>
                <option value="200-500">200-500 Employees</option>
                <option value="500+">&gt; 500 Employees</option>
              </select>

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm w-full"
              />
              <select className="rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm w-full">
                <option value="" disabled>
                  Activities interested in
                </option>
                <option value="Preparation">Preparation</option>
                <option value="Formation">Formation</option>
                <option value="Expension">Expension</option>
                <option value="Transition">Transition</option>
              </select>

              <input
                type="tel"
                placeholder="Telephone"
                className="rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm w-full"
              />
              <select className="rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm w-full">
                <option value="" disabled>
                  Sub Activity interested in
                </option>
                <option value="market-research">Market Research</option>
                <option value="financial">Financial Planning</option>
                <option value="team">Team Recruitment</option>
                <option value="bussiness">Bussiness Launch</option>
                <option value="digital">Digital Transformation</option>
              </select>

              <input
                type="text"
                placeholder="Organization"
                className="rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm w-full"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="col-span-1 sm:col-span-2 rounded-lg border border-[#0D1B2A] bg-[#f4eeeec7] px-3 py-2 text-sm w-full"
              ></textarea>

              {/* Captcha */}
              <div className="col-span-1 sm:col-span-2 ">
                <div className="w-full !bg-[#f4eeeec7] max-w-xs border border-[#0D1B2A] rounded shadow-sm p-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-6 h-6 border-2 border-[#0D1B2A] rounded-sm appearance-none"
                    />
                    <span className="text-sm font-semibold tracking-tight">
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
                      <a href="#">Privacy</a>
                      <span>-</span>
                      <a href="#">Terms</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="col-span-1 sm:col-span-2 flex justify-center sm:justify-start">
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
      <div className="location-section overflow-hidden bg-[#0D1B2A] py-10">
        <h2 className="location-title text-[#F9F9F9] text-center text-3xl mb-6">
          The Destination
        </h2>
        <div className="map-container overflow-hidden px-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.59449794296!2d71.60761016532268!3d29.377064565810574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Pakistan!5e0!3m2!1sen!2s!4v1754719121764!5m2!1sen!2s"
            loading="lazy"
            style={{ border: "4px solid #D4AF37", borderRadius: "8px" }}
          ></iframe>
        </div>
      </div>
    </>
  );
}
