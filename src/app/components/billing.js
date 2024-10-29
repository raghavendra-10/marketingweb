import React from 'react';
import Vector from '../images/Vector.png';
import Image from 'next/image';

const BillingAndRemittances = () => {
    return (
        <div className='m-10'>
            <div>
                <h2 className="text-gray-500 font-semibold">PAYMENTS</h2>
                <h1 className="text-3xl font-bold mb-4">
                    <span className="text-blue-500">Billing</span> and Remittances
                </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center py-10 px-6 space-y-6 md:space-y-0 md:space-x-12">
                {/* Left Box with Features */}
                <div className="bg-white shadow-md rounded-lg p-10  border border-gray-900">
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2">
                            <Image src={Vector} alt="Check" width={24} height={24} />
                            <span className="text-gray-800 font-medium">Automated billing</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image src={Vector} alt="Check" width={24} height={24} />
                            <span className="text-gray-800 font-medium">EDI file generation</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image src={Vector} alt="Check" width={24} height={24} />
                            <span className="text-gray-800 font-medium">Remittance tracking</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image src={Vector} alt="Check" width={24} height={24} />
                            <span className="text-gray-800 font-medium">Error-free calculations</span>
                        </li>
                    </ul>
                </div>

                {/* Right Text Section */}
                <div className="md:w-1/2 text-center md:text-left">

                    <p className="text-center w-50%">
                        Save time and reduce errors with <span className="text-blue-500">automated billing processes</span>. CareAutomate generates claims based on approved visits and accurately tracks <span className="text-blue-500">remittances</span>, providing <span className="text-blue-500">Housing Providers</span> peace of mind.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BillingAndRemittances;
