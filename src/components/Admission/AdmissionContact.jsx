import React from 'react'

const AdmissionContact = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl mb-4 font-bold">Need Assistance?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Our admission team is ready to help you with any queries
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold mb-2">Admission Office</h4>
                <p className="text-blue-100">Phone: +91 8810676551</p>
                <p className="text-blue-100">Email: admission@rime.co.in</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold mb-2">Office Hours</h4>
                <p className="text-blue-100">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-blue-100">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AdmissionContact;