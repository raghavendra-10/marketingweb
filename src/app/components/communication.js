// Communication.js
import React from 'react';
import Image from 'next/image';
import phone2 from '../images/phone2.png'

const features = [
    "Centralized communication hub",
    "Instant notifications",
    "Message history tracking",
    "In-app messaging",
];

const Communication = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center py-12 px-6 bg-white">
            <div className="lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                <h2 className="text-gray-900 text-xl font-semibold">CONNECTIVITY</h2>
                <h1 className="text-indigo-600 text-3xl font-bold mt-2">Communication</h1>
                <div className="mt-6 text-gray-700">
                    <p className="mb-6">
                        Eliminate paperwork by storing and accessing <span className="text-indigo-600">tenant agreements</span>,
                        ID cards, and service records digitally. Our secure platform centralizes essential documents for
                        <span className="text-indigo-600"> easy management and retrieval</span>.
                    </p>
                </div>
            </div>
            <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
                <div className="relative">
                    <Image src={phone2} alt="Communication App" className="w-48 h-auto" />
                </div>
            </div>
            <div className="lg:w-1/3">
                <div className="space-y-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <p className="text-gray-700">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Communication;
