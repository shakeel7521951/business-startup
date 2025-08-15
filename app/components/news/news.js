"use client";
import { CalendarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import newsData from "./newsData";

export default function News() {
  return (
    <>
      {/* Hero Section */}
      <div className=" w-full sm:h-[650px] h-[650px] overflow-hidden">
        {/* Background Image */}
        <img
          src="./news/newsMain.jpg"
          alt="News Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="flex justify-center select-none">
        {/* Main container */}
        <div className="bg-white pt-20 px-4 sm:pl-30 sm:pr-30 max-w-screen-xl mx-auto flex flex-col items-center text-center">
          {/* First text div */}
          <div className="text-3xl sm:text-4xl font-bold mb-4">News</div>
          <div className="text-sm sm:text-base w-full mb-8">
            We provide the latest insights on the business ecosystem and key
            developments across Oman, Saudi Arabia, and Qatar. Our coverage
            includes market trends, investment opportunities, and
            startup-friendly policies shaping the region. Connect with our
            experts to share your story, gain visibility, and explore new
            avenues for growth in one of the world’s most dynamic business
            landscapes.
          </div>

          {newsData.map((news, index) => (
            <div
              key={news.slug}
              className="w-full bg-white p-4 sm:p-8 flex flex-col md:flex-row md:items-start gap-8 text-left mt-8"
            >
              {/* Left side: Heading + content */}
              <div className="flex-1 flex flex-col gap-4">
                <h2 className="text-xl sm:text-3xl font-bold">{news.title}</h2>

                {/* Text */}
                <div className="text-sm sm:text-base">{news.text}</div>

                {/* Button + Date */}
                <div className="flex items-center justify-between gap-4 mt-4 flex-wrap">
                  <Link
                    href={`/news/${news.slug}`}
                    className="bg-[#D4AF37] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#0D1B2A] hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition duration-400"
                  >
                    Read more
                  </Link>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CalendarIcon className="h-5 w-5 text-gray-600" />
                    <span className="text-sm">{news.date}</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-[30%]">
                <img
                  src={news.img}
                  alt={news.title}
                  className="rounded shadow-md object-cover w-full h-48 sm:h-60"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
