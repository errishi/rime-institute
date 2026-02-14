import { Award, BookOpen, Globe, Users } from 'lucide-react';
import React from 'react'

const CoreValues = () => {
    const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for academic and professional excellence in everything we do.",
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "Fostering creativity and innovative thinking in education and research.",
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Maintaining the highest standards of ethics and transparency.",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "Creating a diverse and welcoming environment for all students.",
    },
  ];

  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#C9A961] text-white px-4 py-1 text-sm mb-4">
              OUR VALUES
            </div>
            <h2 className="text-4xl mb-4 text-gray-900 font-bold">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at RIME
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C9A961]/10 rounded-full mb-6">
                    <Icon className="w-10 h-10 text-[#C9A961]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default CoreValues;