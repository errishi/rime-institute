import { CheckCircle, CreditCard, FileText } from 'lucide-react';
import React from 'react'

const AdmissionProcess = () => {
    const admissionProcess = [
        {
            icon: FileText,
            title: "Online Application",
            description: "Fill the online application form with accurate details and upload required documents.",
        },
        {
            icon: CreditCard,
            title: "Application Fee",
            description: "Pay the non-refundable application fee through our secure payment gateway.",
        },
        {
            icon: FileText,
            title: "Entrance Exam",
            description: "Appear for the entrance exam or submit valid JEE/GATE/CAT scores as applicable.",
        },
        {
            icon: CheckCircle,
            title: "Merit List & Counseling",
            description: "Check the merit list and attend counseling for document verification and seat allocation.",
        },
        {
            icon: CreditCard,
            title: "Fee Payment",
            description: "Pay the admission fee to confirm your seat within the stipulated time.",
        },
        {
            icon: CheckCircle,
            title: "Enrollment",
            description: "Complete the enrollment process and join the orientation program.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl mb-4 text-blue-900 font-bold">Admission Process</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Follow these simple steps to secure your admission at RIME
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {admissionProcess.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg relative">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#C9A961] text-white rounded-full flex items-center justify-center font-bold text-lg">
                                    {index + 1}
                                </div>
                                <div className="w-14 h-14 bg-[#C9A961]/10 rounded-lg flex items-center justify-center mb-4 ml-auto">
                                    <Icon className="w-7 h-7 text-[#C9A961]" />
                                </div>
                                <h3 className="text-xl font-semibold text-blue-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default AdmissionProcess;