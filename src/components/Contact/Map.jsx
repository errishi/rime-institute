import { MapPin } from 'lucide-react';
import React from 'react'

const Map = () => {
    return (
        <div>
            <h2 className="text-4xl mb-6 text-gray-900">Find Us on Map</h2>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-150 flex items-center justify-center">
                <div className="text-center text-gray-500 p-8">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg">Interactive map would be displayed here</p>
                    <p className="text-sm mt-2">
                        Sikri, Ballabhgarh, Faridabad, Haryana 121004
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Map;