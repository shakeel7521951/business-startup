"use client";

import { useState } from "react";
import Link from "next/link";
import preparationData from "./preparationData";

export default function Preparation() {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full sm:h-[500px] h-[350px]">
        <img
          src="../activities/preparation.jpg"
          alt="Preparation Background"
          className="w-full h-full object-cover"
        />
        <div className="hidden sm:block absolute bottom-10 left-0 right-0 mx-auto p-8 bg-[#0D1B2A]/50 backdrop-blur-sm rounded-lg shadow-2xl w-full max-w-4xl transform -translate-y-1/2 sm:left-10 sm:right-auto sm:top-1/2 sm:bottom-auto sm:max-w-[50%]">
          {/* Gold Accent Bar */}
          <div className="absolute left-0 top-0 h-full w-2 bg-[#D4AF37] rounded-l-lg"></div>

          <div className="flex flex-col font-bold text-2xl sm:text-4xl text-[#D4AF37] mb-4 relative ">
            <h1 className="">Preparation</h1>
            <hr className="absolute left-0 border-0 bottom-0 h-1 w-16 bg-[#D4AF37]"></hr>
          </div>

          <p className="text-white text-justify text-lg leading-relaxed mb-6">
            We prepare and provide an overview of relevant events and
            initiatives for businesses and key stakeholders in the GCC ecosystem
            (Oman, Qatar, and Saudi Arabia). Please contact our local experts to
            submit your event for consideration. We're pleased to showcase
            valuable opportunities across the region.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-center select-none bg-[#F9F9F9] py-12">
        <div className="px-4 sm:px-8 max-w-screen-xl w-full flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-6">
            Preparation
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-12 text-center">
            <strong>Preparation</strong> involves thorough and strategic
            activities such as comprehensive market research, detailed risk
            assessment, and meticulous regulatory compliance planning. This
            phase focuses on gathering critical data to understand customer
            needs, industry trends, and competitive landscapes. It also includes
            developing clear operational plans, identifying potential
            challenges, and ensuring all legal and regulatory frameworks are
            addressed. Preparation lays the essential groundwork for successful
            implementation by aligning resources, setting achievable goals, and
            creating contingency strategies to navigate uncertainties in dynamic
            markets.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 w-full">
            {preparationData.slice(0, visibleCount).map((blog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition duration-500 flex flex-col h-full"
              >
                {/* Image */}
                <img
                  src={blog.image || "../activities/preparation.jpg"}
                  alt={blog.title}
                  className="w-full h-44 object-cover"
                />

                {/* Text Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0D1B2A] mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{blog.text}</p>
                    <p className="text-[#D4AF37] text-sm font-medium">
                      Saudi Arabia, Oman, Qatar
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-5">
                    {idx % 2 === 0 ? (
                      <Link
                        href={`/activities/preparation/${blog.slug}`}
                        className="block w-full bg-[#0D1B2A] text-white font-medium py-2
                        hover:bg-[#D4AF37] hover:text-[#0D1B2A] rounded-md border border-transparent hover:border-[#0D1B2A] 
                        transition duration-500 text-center"
                      >
                        Find out more
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        className="block w-full bg-[#0D1B2A] text-white font-medium py-2
                        hover:bg-[#D4AF37] hover:text-[#0D1B2A] rounded-md border border-transparent hover:border-[#0D1B2A] 
                        transition duration-500 text-center"
                      >
                        Contact
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < preparationData.length && (
            <button
              onClick={loadMore}
              className="bg-[#D4AF37] text-white font-medium px-6 py-2 rounded-md 
              hover:bg-[#0D1B2A] hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] 
              transition duration-500"
            >
              Load More
            </button>
          )}

          {/* Company Logo Section */}
          <div className="bg-[#F9F9F9] w-full py-10 mb-5 ">
            <div className="flex justify-center ">
              <img
                src="https://images.unsplash.com/photo-1637489981573-e45e9297cb21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nbyUyMGNvbXBhbmh8ZW58MHwwfDB8fHww" // Replace with your actual logo path
                alt="Company Logo"
                className="w-48 h-auto opacity-90 hover:opacity-100 transition duration-500 rounded-full"
              />
            </div>
          </div>

          {/* Remaining Activities Section */}
          <div className="max-w-screen-xl w-full mb-5 mx-auto">
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-8 text-center">
              Remaining Activities
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  title: "Transition",
                  img: "../activities/transition.jpg",
                  link: "/activities/transition",
                },
                {
                  title: "Formation",
                  img: "../activities/formation.jpg",
                  link: "/activities/formation",
                },
                {
                  title: "Expansion",
                  img: "../activities/expension.jpg",
                  link: "/activities/expension",
                },
              ].map((activity, idx) => (
                <div
                  key={idx}
                  className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-500 max-w-xs w-full"
                >
                  <Link href={activity.link} className="block relative group">
                    <img
                      src={activity.img}
                      alt={activity.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end text-[#D4AF37]">
                      <h4 className="relative text-lg font-semibold mb-10 bg-[#0D1B2A] inline-block px-1 text-center">
                        {activity.title}
                      </h4>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
