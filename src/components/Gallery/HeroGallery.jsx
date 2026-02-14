import React from 'react'

const HeroGallery = () => {
  return (
    <div className='bg-[url(/gallery-banner.svg)] bg-cover bg-no-repeat'>
    <section className="relative h-75 flex items-center justify-center bg-linear-to-l from-[#C9A961] via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
          <h1 className="text-5xl md:text-6xl mb-4 font-bold">Gallery</h1>
          <p className="text-xl opacity-90">
            Explore our vibrant campus life and facilities
          </p>
        </div>
      </section>
    </div>
  )
}

export default HeroGallery;