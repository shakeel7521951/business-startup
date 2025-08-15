"use client";

import { useState } from "react";
import Link from "next/link";
import expensionData from "./expensionData";

export default function Expension() {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full sm:h-[500px] h-[350px]">
        <img
          src="../activities/expension.jpg"
          alt="Expension Background"
          className="w-full h-full object-cover"
        />
        <div className="hidden sm:block absolute bottom-10 left-0 right-0 mx-auto p-8 bg-[#0D1B2A]/50 backdrop-blur-sm rounded-lg shadow-2xl w-full max-w-4xl transform -translate-y-1/2 sm:left-10 sm:right-auto sm:top-1/2 sm:bottom-auto sm:max-w-[50%]">
          {/* Gold Accent Bar */}
          <div className="absolute left-0 top-0 h-full w-2 bg-[#D4AF37] rounded-l-lg"></div>

          <div className="flex flex-col font-bold text-2xl sm:text-4xl text-[#D4AF37] mb-4 relative ">
            <h1 className="">Expension</h1>
            <hr className="absolute left-0 border-0 bottom-0 h-1 w-16 bg-[#D4AF37]"></hr>
          </div>

          <p className="text-white text-justify text-lg leading-relaxed mb-6">
            <strong>Expansion</strong> involves comprehensive market research,
            meticulous risk assessment, and detailed regulatory compliance
            planning. It requires a deep understanding of target markets,
            including customer behaviors, competitive landscapes, and emerging
            trends. Successful expansion also demands strategic allocation of
            resources, development of robust operational frameworks, and the
            ability to adapt to local legal and cultural nuances. Moreover,
            continuous monitoring and evaluation ensure that the growth
            trajectory remains sustainable and aligned with overall business
            objectives, enabling companies to capitalize on new opportunities
            while mitigating potential challenges effectively.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-center select-none bg-[#F9F9F9] py-12">
        <div className="px-4 sm:px-8 max-w-screen-xl w-full flex flex-col items-center">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 w-full">
            {expensionData.slice(0, visibleCount).map((blog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition duration-500 flex flex-col h-full"
              >
                {/* Image */}
                <img
                  src={blog.image || "../activities/expension.jpg"}
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
                        href={`/activities/expension/${blog.slug}`}
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
          {visibleCount < expensionData.length && (
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
                src="/navbar/logo.png"
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
                  title: "Praparation",
                  img: "../activities/preparation.jpg",
                  link: "/activities/preparation",
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
