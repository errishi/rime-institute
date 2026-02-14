import { ArrowRight, BookOpen, Clock, GraduationCap } from 'lucide-react';
import React from 'react'

const ProgramList = ({filteredPrograms}) => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {filteredPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#C9A961]/10 rounded-lg flex items-center justify-center shrink-0">
                          <GraduationCap className="w-6 h-6 text-[#C9A961]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                            {program.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{program.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" />
                              <span>{program.seats} seats</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Eligibility:</h4>
                        <p className="text-gray-600">{program.eligibility}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Program Highlights:</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {program.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <ArrowRight className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:w-48 flex lg:flex-col gap-3">
                      <button className="flex-1 lg:flex-none bg-[#C9A961] cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A961]/90 transition-colors">
                        Apply Now
                      </button>
                      <button className="flex-1 lg:flex-none cursor-pointer bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ProgramList;