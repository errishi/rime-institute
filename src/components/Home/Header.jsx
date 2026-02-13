import React from 'react'
import { ImageWithFallback } from '../utils/ImageWithFallback';

const Header = () => {
  return (
    <section className="relative h-150 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30 z-1" />
      <ImageWithFallback
        src="/rime-image.jpeg"
        alt="RIME Institute"
        className="absolute inset-0 -z-1 w-full h-full object-cover"
      />
      <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-4 text-lg tracking-wider uppercase">
          Explore the Advantages of
        </div>
        <h1 className="text-5xl md:text-7xl mb-8 font-bold leading-tight">
          Quality Education at <span className="text-[#C9A961]">RIME</span>
        </h1>
        <button className="bg-[#C9A961] cursor-pointer text-white px-10 py-4 rounded text-lg font-semibold hover:bg-[#b89851] transition-colors">
          REGISTER NOW
        </button>
      </div>
    </section>
  )
}

export default Header;