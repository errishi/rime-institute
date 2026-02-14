import React from 'react'

const ScholarshipFinancialAid = () => {
    const scholarships = [
        {
            title: "Merit Scholarship",
            description: "Up to 100% tuition fee waiver based on entrance exam performance",
            eligibility: "Top 10 rankers in entrance exam",
        },
        {
            title: "Sports Scholarship",
            description: "50% tuition fee waiver for state/national level sports persons",
            eligibility: "Certificate from recognized sports authority",
        },
        {
            title: "SC/ST Scholarship",
            description: "As per government norms",
            eligibility: "Valid caste certificate",
        },
        {
            title: "Financial Aid",
            description: "Need-based financial assistance for deserving students",
            eligibility: "Income certificate and academic performance",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl mb-4 text-blue-900 font-bold">Scholarships & Financial Aid</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We believe in rewarding merit and supporting deserving students
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {scholarships.map((scholarship, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-semibold text-blue-900 mb-3">{scholarship.title}</h3>
                            <p className="text-gray-700 mb-4">{scholarship.description}</p>
                            <div className="text-sm text-gray-600">
                                <strong>Eligibility:</strong> {scholarship.eligibility}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ScholarshipFinancialAid;