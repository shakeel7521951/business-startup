export function CaseStudySpotlight() {
    const caseStudy = {
        title: "Tech Startup Expansion to Saudi Arabia",
        challenge: "A European fintech needed to establish regional HQ in Riyadh within 30 days to secure $15M funding",
        solution: "Our accelerated setup package including license, bank account, and 10 employee visas",
        results: [
            "28-day complete setup (including holidays)",
            "$250k tax savings through optimal structure",
            "Ongoing PRO support saving 20hrs/week"
        ]
    };

    return (
        <section className="py-10 ">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
                    <div className="md:flex">
                        <div
                            className="md:w-2/5 p-8 flex items-center relative overflow-hidden"
                            style={{
                                background: `linear-gradient(rgba(13, 27, 42, 0.8), rgba(28, 28, 28, 0.9)), url(/home/success.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/10 to-[#1C1C1C]/0 z-0"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
                                    Success Spotlight
                                </h2>
                                <h3 className="text-xl font-bold text-white mb-6">
                                    {caseStudy.title}
                                </h3>
                                <button className="px-6 py-2 bg-[#D4AF37] hover:bg-[#C9A227] text-[#0D1B2A] font-medium rounded-full transition-colors shadow-lg hover:shadow-xl">
                                    View All Case Studies
                                    <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="md:w-3/5 p-8">
                            <div className="mb-8">
                                <h4 className="text-sm font-semibold text-[#D4AF37] mb-2">THE CHALLENGE</h4>
                                <p className="text-gray-700">{caseStudy.challenge}</p>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-sm font-semibold text-[#D4AF37] mb-2">OUR SOLUTION</h4>
                                <p className="text-gray-700">{caseStudy.solution}</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-[#D4AF37] mb-2">KEY RESULTS</h4>
                                <ul className="space-y-2">
                                    {caseStudy.results.map((result, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="flex-shrink-0 w-5 h-5 mt-0.5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}