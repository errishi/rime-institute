import React from 'react'

const Hero = () => {
    return (
        <section className="relative h-75 flex items-center justify-center bg-linear-to-r from-[#C9A961]/90 to-[#C9A961]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-5xl md:text-6xl mb-4 font-bold">About RIME</h1>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                    Building a legacy of excellence in education and research
                </p>
            </div>
        </section>
    )
}

export default Hero;