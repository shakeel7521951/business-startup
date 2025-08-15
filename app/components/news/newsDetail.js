import newsData from "./newsData";

export default function NewsDetail({ params }) {
  const { slug } = params;
  const newsItem = newsData.find((item) => item.slug === slug);

  if (!newsItem) {
    return (
      <p className="p-6 text-red-500 text-center">News article not found.</p>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto bg-[#F8F9FA] rounded-xl shadow-xl">
      {/* Hero Image Section */}
      <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
        <img
          src={newsItem.img}
          alt={newsItem.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Title Overlay */}
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl font-extrabold drop-shadow-lg leading-snug max-w-3xl">
            {newsItem.title}
          </h1>
          <p className="mt-2 text-[#F8F9FA] text-sm font-medium uppercase tracking-wide">
            {newsItem.date}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-10 bg-white p-4">
        <div className="text-lg text-[#1B263B] leading-relaxed space-y-6">
          {newsItem.desc}
        </div>
      </div>
    </div>
  );
}
