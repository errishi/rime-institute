import { Award, BookOpen, TrendingUp, Users } from 'lucide-react';
import React from 'react'

const Stats = () => {
    const stats = [
        { icon: Users, value: "10,000+", label: "Students Enrolled" },
        { icon: Award, value: "500+", label: "Expert Faculty" },
        { icon: BookOpen, value: "100+", label: "Programs Offered" },
        { icon: TrendingUp, value: "95%", label: "Placement Rate" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="text-center group cursor-pointer">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-50 rounded-full mb-4 group-hover:bg-[#C9A961] transition-colors">
                                    <Icon className="w-10 h-10 text-[#C9A961] group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats;