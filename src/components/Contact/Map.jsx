import { MapPin } from 'lucide-react';
import React from 'react'
import MapTiler from './MapTiler';

const Map = () => {
    return (
        <div>
            <h2 className="text-4xl mb-6 text-gray-900 font-bold">Find Us on Map</h2>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-150 flex items-center justify-center">
                <MapTiler />
            </div>
        </div>
    )
}

export default Map;