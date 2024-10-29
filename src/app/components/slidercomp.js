import React from 'react'
import Image from 'next/image'
import reviewimage from '../images/reviewimage.png'
import reviewer from '../images/reviewer.png'
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'), {
    ssr: false,
  });


function Slidercomp() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    return (
        <div>
            <div className="px-4 md:px-24 py-8 bg-indigo-100/40 ">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Tale of Success</h2>
                    <p className="text-indigo-600 cursor-pointer">View more</p>
                </div>
                <div className="flex flex-col md:flex-row items-center  gap-10 md:gap-32 px-24">
                    <div className="max-w-xs">
                        <h3 className="text-lg font-medium mb-4">What our clients have to say</h3>
                        <Image src={reviewimage} alt="Review Image" width={300} height={300} />
                    </div>

                    <Slider {...sliderSettings} className="max-w-xs md:max-w-lg">
                        {[1, 2, 3].map((index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left">
                                <blockquote className="italic text-lg mb-4">
                                    "It's been great to get to my dream house in less than 3 months with help of CareAutomate"
                                </blockquote>
                                <div className="flex items-center mt-4">
                                    <Image src={reviewer} alt="Reviewer" width={50} height={50} className="rounded-full mr-4" />
                                    <div>
                                        <p className="font-semibold">Krishika Iyer</p>
                                        <p className="text-gray-500 text-sm">IT Engineer</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Slidercomp
