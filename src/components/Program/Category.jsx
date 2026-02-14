import React, { useEffect, useState } from 'react'

const Category = ({ setFilteredPrograms }) => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const programs = [
        {
            category: "ug",
            title: "B.Tech in Computer Science & Engineering",
            duration: "4 Years",
            seats: "180",
            eligibility: "10+2 with Physics, Chemistry & Mathematics (60% minimum)",
            highlights: [
                "Industry-oriented curriculum",
                "Hands-on projects and internships",
                "Expert faculty from IITs and NITs",
                "Excellent placement record",
            ],
        },
        {
            category: "ug",
            title: "B.Tech in Electronics & Communication",
            duration: "4 Years",
            seats: "120",
            eligibility: "10+2 with PCM (60% minimum)",
            highlights: [
                "State-of-the-art laboratories",
                "Focus on VLSI and Embedded Systems",
                "Industry collaborations",
                "Research opportunities",
            ],
        },
        {
            category: "ug",
            title: "B.Tech in Mechanical Engineering",
            duration: "4 Years",
            seats: "120",
            eligibility: "10+2 with PCM (60% minimum)",
            highlights: [
                "Modern workshops and labs",
                "CAD/CAM training",
                "Industry visits and internships",
                "Robotics and automation focus",
            ],
        },
        {
            category: "ug",
            title: "Bachelor of Business Administration (BBA)",
            duration: "3 Years",
            seats: "60",
            eligibility: "10+2 in any stream (50% minimum)",
            highlights: [
                "Comprehensive business curriculum",
                "Case study methodology",
                "Industry mentorship program",
                "Entrepreneurship development",
            ],
        },
        {
            category: "pg",
            title: "Master of Business Administration (MBA)",
            duration: "2 Years",
            seats: "180",
            eligibility: "Bachelor's degree in any discipline (50% minimum)",
            highlights: [
                "Dual specialization options",
                "Industry-experienced faculty",
                "Live projects and internships",
                "Global exposure programs",
            ],
        },
        {
            category: "pg",
            title: "Master of Computer Applications (MCA)",
            duration: "2 Years",
            seats: "60",
            eligibility: "Bachelor's degree with Mathematics (50% minimum)",
            highlights: [
                "Advanced programming and development",
                "Cloud computing and AI/ML modules",
                "Industry certifications",
                "100% placement assistance",
            ],
        },
        {
            category: "pg",
            title: "M.Tech in Computer Science",
            duration: "2 Years",
            seats: "40",
            eligibility: "B.Tech/BE in relevant field (60% minimum)",
            highlights: [
                "Research-oriented curriculum",
                "Specializations in AI, ML, Cybersecurity",
                "Publications and conferences",
                "Industry partnerships",
            ],
        },
        {
            category: "pg",
            title: "M.Tech in VLSI Design",
            duration: "2 Years",
            seats: "30",
            eligibility: "B.Tech/BE in ECE/EEE (60% minimum)",
            highlights: [
                "Advanced VLSI labs",
                "Industry-standard tools",
                "Research projects",
                "Semiconductor industry tie-ups",
            ],
        },
        {
            category: "research",
            title: "Ph.D. in Engineering",
            duration: "3-5 Years",
            seats: "Variable",
            eligibility: "M.Tech/ME with minimum 60% or equivalent CGPA",
            highlights: [
                "Full-time and part-time options",
                "Research scholarships available",
                "Access to advanced facilities",
                "Publications in reputed journals",
            ],
        },
        {
            category: "research",
            title: "Ph.D. in Management",
            duration: "3-5 Years",
            seats: "Variable",
            eligibility: "MBA/PGDM with minimum 60% or equivalent CGPA",
            highlights: [
                "Interdisciplinary research",
                "Industry collaboration",
                "Conference participation",
                "Teaching assistantship opportunities",
            ],
        },
    ];

    const filteredPrograms =
        selectedCategory === "all"
            ? programs
            : programs.filter((p) => p.category === selectedCategory);

    const categories = [
        { id: "all", label: "All Programs" },
        { id: "ug", label: "Undergraduate" },
        { id: "pg", label: "Postgraduate" },
        { id: "research", label: "Research" },
    ];

    useEffect(() => {
        return () => {
            setFilteredPrograms(filteredPrograms)
        }
    }, [])

    return (
        <section className="py-8 bg-white sticky top-30 z-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap gap-4 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setSelectedCategory(category.id)
                            }}
                            className={`px-6 py-3 cursor-pointer rounded-lg font-semibold transition-colors ${selectedCategory === category.id
                                    ? "bg-[#C9A961] text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Category;