export function DualCTA() {
  return (
    <section className="py-10 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Added Title Section */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
              Ready to Start Your GCC Business Journey?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to begin working with our experts
            </p>
            <div className=" mt-2 text-gray-500">
            <p>Both options include a free preliminary market assessment</p>
          </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Consultation CTA */}
            <div className="md:w-1/2 bg-[#0D1B2A] rounded-xl p-8 text-white hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#D4AF37] text-4xl mb-4 font-bold">1</div>
              <h3 className="text-2xl font-bold mb-4">Free Initial Consultation</h3>
              <p className="mb-6 text-gray-300">
                Speak with our business setup experts about your GCC expansion plans during a 30-minute discovery call
              </p>
              <button className="w-full py-3 bg-[#D4AF37] hover:bg-[#C9A227] text-[#0D1B2A] font-bold rounded-lg transition-colors flex items-center justify-center group">
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Book 30-Minute Call
              </button>
            </div>
            
            {/* Proposal CTA */}
            <div className="md:w-1/2 bg-[#D4AF37] rounded-xl p-8 text-[#0D1B2A] hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#0D1B2A] text-4xl mb-4 font-bold">2</div>
              <h3 className="text-2xl font-bold mb-4">Custom Proposal</h3>
              <p className="mb-6">
                Receive a tailored business setup plan with exact costs, timeline, and government requirements
              </p>
              <button className="w-full py-3 bg-[#0D1B2A] hover:bg-black text-white font-bold rounded-lg transition-colors flex items-center justify-center group">
                <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Request Proposal
              </button>
            </div>
          </div>
          
          {/* Added Footer Note */}
          
        </div>
      </div>
    </section>
  );
}