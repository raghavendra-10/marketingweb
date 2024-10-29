import React from 'react'
import Image from 'next/image'
import mac from '../images/mac.png'
import phone from '../images/phone.png'


function Main() {
    return (
        
            <div className=" flex flex-col md:flex-row items-center justify-between px-4 md:px-24 py-8">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                    <h1 className="text-xl md:text-3xl font-bold leading-tight mb-4">
                        Revolutionize your{' '}
                        <span className="text-indigo-600">Housing Stabilization</span> Services.
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Automate everything from daily workflows to Billing and Enhance Housing Case Managers and Tenant Satisfaction
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="bg-white text-indigo-600 border-2 border-indigo-600 px-4 md:px-6 py-2 rounded-full md:text-lg">
                            Start Free Trial
                        </button>
                        <button className="bg-indigo-600 text-white px-4 md:px-6 py-2 rounded-full md:text-lg">
                            Book a Demo
                        </button>
                    </div>
                </div>
                <div className="relative flex items-center justify-center ">
                    <div className="absolute top-0 left-[-60px] z-10 hidden md:block">
                        <Image src={phone} alt="Smartphone" width={230} height={400} />
                    </div>
                    <div className="relative z-0 hidden md:block">
                        <Image src={mac} alt="Laptop" width={480} height={300} />
                    </div>
                </div>
            </div>
       
    )
}

export default Main
