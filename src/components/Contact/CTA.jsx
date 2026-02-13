import React from 'react'

const CTA = () => {
  return (
    <section className="py-20 bg-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl mb-6">Visit Our Campus</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience RIME firsthand. Schedule a campus tour to explore our facilities,
              meet faculty, and get a feel for student life.
            </p>
            <button className="bg-[#C9A961]/90 text-white px-8 py-4 rounded font-semibold hover:bg-[#C9A961] cursor-pointer transition-colors">
              Schedule a Campus Tour
            </button>
          </div>
        </div>
      </section>
  )
}

export default CTA;