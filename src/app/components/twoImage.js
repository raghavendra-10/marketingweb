import React from 'react'
import Image from 'next/image'
import phoneShadow from '../images/phoneShadow.png'
import web from '../images/web.png'


const TwoImage = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-center gap-8 py-8">
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-center justify-center gap-6 w-full md:w-3/4 lg:w-2/3">
          <Image src={phoneShadow} alt="Phone Display" width={280} height={400} className="backdrop-blur-md mt-8 md:mt-0" />
          <Image src={web} alt="Mac Display" width={550} height={200} className="mt-4" />
        </div>
      </div>
  )
}

export default TwoImage