import React from 'react'

const HeroContact = () => {
  return (
    <div className='bg-[url(/contact-banner.png)] bg-cover bg-no-repeat'>
      <section className="relative h-75 flex items-center justify-center  bg-linear-to-r from-[#1a2847]/70 to-[#1a2847]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-4 font-bold">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We're here to help and answer any questions you may have
          </p>
        </div>
      </section>
    </div>
  )
}

export default HeroContact;