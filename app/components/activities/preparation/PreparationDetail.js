export default function PreparationDetailPage({ item, otherBlogs = [] }) {
  if (!item)
    return <p className="p-6 text-red-500 text-center">Item not found.</p>;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Hero Image full width */}
      <div className="w-full h-64 sm:h-96 relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 right-6 text-white bg-black bg-opacity-50 px-4 py-2 rounded-md max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold"> {item.title}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-7xl mx-auto w-full flex-1">
        {/* Left Content: Detail */}
        <div className="flex-1">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {item.text}
          </p>
        </div>

        {/* Right Content: Other Blogs Grid */}
        <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <h2 className="text-xl font-semibold mb-4">More Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherBlogs.length === 0 ? (
              <p className="text-gray-500">No other blogs found.</p>
            ) : (
              otherBlogs.map((blog) => (
                <div
                  key={blog.id || blog.slug}
                  className="border rounded-md overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                >
                  <img
                    src={blog.image || "/default-thumb.jpg"}
                    alt={blog.title}
                    className="w-full h-24 object-cover"
                  />
                  <div className="p-2">
                    <h3 className="font-semibold text-sm line-clamp-2">
                      {blog.title}
                    </h3>
                  </div>
                </div>
              ))
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
