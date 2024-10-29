// Documentation.js
import Image from 'next/image';
import React from 'react';
import twophones from '../images/twophones.png';
const Documentation = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center py-12 px-6 bg-white">
            <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                <h2 className="text-gray-900 text-xl font-semibold">PAYMENTS</h2>
                <h1 className="text-indigo-600 text-3xl font-bold mt-2">Digital Documentation</h1>
                <div className="mt-6 text-gray-700 mdw-2/3">
                    <p className="mb-6">
                        Eliminate paperwork by storing and accessing <span className="text-indigo-600">tenant agreements</span>,
                        ID cards, and service records digitally. Our secure platform centralizes essential documents for
                        <span className="text-indigo-600"> easy management and retrieval</span>.
                    </p>
                    
                </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
                <div className="relative flex flex-col items-center space-y-6">
                    <div className="absolute top-10 -left-20  ">Instant document<br></br> uploads</div>
                    <div className="absolute bottom-10 -right-28  ">Automatic<br/> organization</div>
                    <div className="absolute bottom-10 -left-28 ">Secure digital<br/> storage</div>
                    <Image src={twophones} alt="Document Display" className="md:w-64 w-32 h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Documentation;
