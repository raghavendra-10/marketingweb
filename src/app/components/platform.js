import React from 'react'
import Image from 'next/image'
import Frame194 from '../images/Frame149.png'
import Frame177 from '../images/Frame177.png'

function Platform() {
  return (
    <div>
      <div className='md:flex  hidden flex-col justify-center h-[55rem]'>
        <p className='px-[6rem] text-xl font-medium'>Office Staff Web/Mobile Platform</p>
        <div className="flex items-center justify-center">
          <Image
            src={Frame194}
            alt="Frame194"
            width={1400}
            className='h-[36rem]'
          />
        </div>
      </div>
      <div className='md:hidden flex  pl-6'>
        <div >
          <Image
            src={Frame177}
            alt="Frame177"
           
          />
        </div>
      </div>

    </div>
  )
}

export default Platform
