import transitionData from "./transitionData";
import Link from "next/link";

export default function TransitionDetailPage({ item, otherBlogs = [] }) {
  if (!item)
    return <p className="p-6 text-red-500 text-center">Item not found.</p>;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full sm:h-[500px] h-[350px]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div
          className="
    absolute 
    bottom-5 left-5  /* Mobile position */
    sm:bottom-auto sm:left-10 sm:top-1/2 sm:-translate-y-1/2 sm:right-auto
    mx-auto 
    p-4 sm:p-8 
    bg-[#0D1B2A]/50 backdrop-blur-sm 
    rounded-lg shadow-2xl 
    w-fit max-w-[90%] sm:max-w-[50%]
  "
        >
          {/* Gold Accent Bar */}
          <div className="absolute left-0 top-0 h-full w-2 bg-[#D4AF37] rounded-l-lg"></div>

          {/* Title */}
          <div className="flex flex-col font-bold text-lg sm:text-4xl text-[#D4AF37] mb-4 relative">
            <h1>{item.title}</h1>
            <hr className="absolute left-0 border-0 bottom-0 h-1 w-16 bg-[#D4AF37]" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 p-2 sm:p-6 max-w-7xl mx-auto w-full flex-1">
        {/* Left Content: Detail */}
        <div className="text-[#1C1C1C] leading-relaxed whitespace-pre-line">
          <div className="bg-white sm:bg-[#F9F9F9] sm:shadow-md p-0 sm:p-6 rounded-lg  border-l-4 border-[#D4AF37]">
            {item.desc}
          </div>
        </div>

        {/* Right Content: Other Blogs Grid */}
        {transitionData.length > 0 && (
          <aside>
            <h2 className="text-xl font-bold tracking-wider mb-4 text-[#0D1B2A] border-b-2 border-[#D4AF37] pb-1">
              More Activities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {transitionData.map((blog, index) => (
                <Link
                  key={blog.id || blog.slug || index}
                  href="/contact"
                  className="block"
                >
                  <div className="bg-[#F9F9F9] border border-[#D4AF37] rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
                    <img
                      src={blog.image || "/default-thumb.jpg"}
                      alt={blog.title}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="text-sm font-bold tracking-wide text-[#0D1B2A] line-clamp-2">
                        {blog.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
