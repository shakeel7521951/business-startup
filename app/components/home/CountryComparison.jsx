import Link from "next/link";

export function CountryComparison() {
  const countries = [
    {
      name: "Qatar",
      flag: "🇶🇦",
      ownership: "100% Foreign",
      setupTime: "5-7 Days",
      capital: "No Minimum",
      vat: "5% Standard",
      zones: "3 Free Zones"
    },
    {
      name: "Saudi Arabia",
      flag: "🇸🇦",
      ownership: "Regional HQ Benefits",
      setupTime: "10-14 Days",
      capital: "SAR 500k (RHQ)",
      vat: "15% Standard",
      zones: "5 Economic Cities"
    },
    {
      name: "Oman",
      flag: "🇴🇲",
      ownership: "51% Local Required",
      setupTime: "7-10 Days",
      capital: "OMR 20k Minimum",
      vat: "5% Standard",
      zones: "2 Free Zones"
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container sm:w-10/12 w-full mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0D1B2A] mb-2">
          GCC Business Setup Comparison
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the optimal location for your business expansion
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0D1B2A] text-white">
                <th className="p-4 text-left rounded-tl-lg">Criteria</th>
                {countries.map((country) => (
                  <th key={country.name} className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-1">{country.flag}</span>
                      <span>{country.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Ownership", key: "ownership" },
                { label: "Setup Time", key: "setupTime" },
                { label: "Minimum Capital", key: "capital" },
                { label: "VAT Rate", key: "vat" },
                { label: "Special Zones", key: "zones" }
              ].map((row, rowIndex) => (
                <tr
                  key={row.label}
                  className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="p-4 font-medium border-b border-gray-200">
                    {row.label}
                  </td>
                  {countries.map((country) => (
                    <td
                      key={`${country.name}-${row.key}`}
                      className="p-4 text-center border-b border-gray-200"
                    >
                      {country[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link href='/contact'>
            <button className="px-8 py-3 bg-[#D4AF37] hover:bg-[#C9A227] text-[#0D1B2A] font-bold rounded-full transition-colors inline-flex items-center">
              Get Personalized Recommendation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}