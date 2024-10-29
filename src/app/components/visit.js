import React from 'react';
import Image from 'next/image';
import phoneImage from '../images/phone2.png'; // Replace with your phone image path
import polygon1 from '../images/polygon1.png';
import polygon2 from '../images/polygon2.png';
import polygon3 from '../images/polygon3.png';
import polygon4 from '../images/polygon4.png';
import polygon from '../images/polygon.png';

const VisitManagement = () => {
    return (
        <div>
            <div className="m-10 mb-6 hidden md:block">
                <h2 className=" font-semibold">DIRECT CONNECTIVITY</h2>
                <h1 className="text-3xl font-bold">
                    <span className="text-blue-500">Visit</span> Management
                </h1>
            </div>
            <div className=" text-center block md:hidden">
                <h2 className=" font-semibold">DIRECT CONNECTIVITY</h2>
                <h1 className="text-2xl font-bold">
                    <span className="text-blue-500">Visit</span> Management
                </h1>
            </div>
            <div className="flex flex-col items-center py-10 px-4 relative">
                {/* Title Section */}

                <div className='text-center hidden md:block'>
                    <p className=" mt-4 max-w-lg mx-auto">
                        Efficiently manage and <span className="text-blue-500">document tenant visits</span> with real-time
                        <span className="text-blue-500"> tracking and approval</span> processes. CareAutomate streamlines visit
                        workflows, allowing Housing Case Managers (HCMs) to focus on tenant care
                        <span className="text-blue-500"> over administrative</span> tasks.
                    </p>
                </div>
                <div className='text-center block md:hidden'>
                    <p className=" mt-2 mx-auto">
                        Efficiently manage and <span className="text-blue-500">document tenant visits</span> with real-time
                        <span className="text-blue-500"> tracking and approval</span> processes. CareAutomate streamlines visit
                        workflows, allowing Housing Case Managers (HCMs) to focus on tenant care
                        <span className="text-blue-500"> over administrative</span> tasks.
                    </p>
                </div>


                {/* Main Content Section */}
                <div className="relative hidden md:flex justify-center items-center mt-10">
                    {/* Gradient Circle */}
                    <div className="absolute w-60 h-60 rounded-full bg-gradient-to-r from-blue-900 to-blue-300 opacity-40 blur-3xl -z-10"></div>

                    {/* Phone Image */}
                    <Image src={phoneImage} alt="Phone" width={240} className="relative z-10" />

                    {/* Tracking of Visits (Left Top) */}
                    <div className="absolute -left-28 top-4 transform -translate-x-16 flex items-center space-x-2">
                        <div className="p-3  rounded-full shadow-md">
                            <p className="text-gray-700 font-semibold">Tracking of visits</p>
                        </div>
                        <Image src={polygon1} alt="Arrow" className="w-4" />
                    </div>

                    {/* Centralized Records (Left Bottom) */}
                    <div className="absolute -left-32 bottom-4 transform -translate-x-16 flex items-center space-x-2">
                        <div className="p-3  rounded-full shadow-md">
                            <p className="text-gray-700 font-semibold">Centralized records</p>
                        </div>
                        <Image src={polygon4} alt="Arrow" className="w-4" />
                    </div>

                    {/* Real-time Documentation (Right Top) */}
                    <div className="absolute -right-28 top-4 transform translate-x-32 flex items-center space-x-2">
                        <Image src={polygon2} alt="Arrow" className="w-4" />
                        <div className="p-3  rounded-full shadow-md">
                            <p className="text-gray-700 font-semibold">Real-time documentation</p>
                        </div>
                    </div>

                    {/* Approval Workflows (Right Bottom) */}
                    <div className="absolute -right-32 bottom-4 transform translate-x-16 flex items-center space-x-2">
                        <Image src={polygon3} alt="Arrow" className="w-4" />
                        <div className="p-3  rounded-full shadow-md">
                            <p className="text-gray-700 font-semibold">Approval workflows</p>
                        </div>
                    </div>
                </div>
                <div className=" relative flex flex-col md:hidden justify-center items-center mt-10">
                    {/* Gradient Circle */}
                    <div className="absolute top-10 w-60 h-60 rounded-full bg-gradient-to-r from-blue-900 to-blue-300 opacity-40 blur-3xl -z-10"></div>

                    {/* Phone Image */}
                    <Image src={phoneImage} alt="Phone" width={240} className="relative z-10" />
                    <div className='w-full'>
                        {/* Tracking of Visits (Left Top) */}
                        <div className=" transform flex items-center space-x-2">
                            <Image src={polygon} alt="Arrow" className="w-4" />
                            <div className="p-3  rounded-full shadow-md">
                                <p className="text-gray-700 font-semibold">Tracking of visits</p>
                            </div>

                        </div>

                        {/* Centralized Records (Left Bottom) */}
                        <div className=" flex items-center space-x-2">
                            <Image src={polygon} alt="Arrow" className="w-4" />
                            <div className="p-3  rounded-full shadow-md">
                                <p className="text-gray-700 font-semibold">Centralized records</p>
                            </div>

                        </div>

                        {/* Real-time Documentation (Right Top) */}
                        <div className="flex items-center space-x-2">
                            <Image src={polygon} alt="Arrow" className="w-4" />
                            <div className="p-3  rounded-full shadow-md">
                                <p className="text-gray-700 font-semibold">Real-time documentation</p>
                            </div>
                        </div>

                        {/* Approval Workflows (Right Bottom) */}
                        <div className="flex items-center space-x-2">
                            <Image src={polygon} alt="Arrow" className="w-4" />
                            <div className="p-3  rounded-full shadow-md">
                                <p className="text-gray-700 font-semibold">Approval workflows</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitManagement;
