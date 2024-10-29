import React from 'react'
import Image from 'next/image'
import testinomal from '../images/testinomal.png'
import review from '../images/reviews.png'
import Double from '../images/qoutes.png'
import stars from '../images/stars.png'

function Testinomals() {
    return (
        <div>
            <div className='flex flex-col items-center justify-center h-[10rem] gap-5 relative'>
                <p className='md:absolute left-0 text-xl font-medium md:-top-10 px-14 mt-2'>Testimonals</p>
                <p className='flex flex-col items-center justify-center text-xl font-extrabold text-gray-400 '>Trusted by people working in <span>these companies</span></p>
                <Image
                    src={testinomal}
                    alt="Frame194"
                    width={1700}
                    height={500}
                    className='w-[80rem] h-[20rem]'
                />
            </div>
            <div className='flex flex-col items-center justify-center mt-4 gap-5'>
                <p className='flex flex-col items-center justify-center text-3xl font-medium text-blue-400'>Reviews</p>
                <Image
                    src={review}
                    alt="Frame194"
                    className='w-[600px]'
                />
            </div>
            <p className=' text-blue-400 flex justify-end px-10'>view more</p>
            <div className=' relative flex flex-col md:flex-row items-center  justify-center gap-10 '>
                
                <div style={styles.reviewer} className='flex flex-col items-center  bg-blue-50 p-4 rounded-[10px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <Image
                            src={Double}
                            alt="Reviewer"
                            width={50}
                            height={50}
                        />
                        <p className='mt-4 font-bold text-center'>It’s been great to get to my dream house in less than 3 months with the help of CareAutomate</p>
                    </div>

                    <div className='flex justify-start w-full mt-4'>
                        <div className='text-left'>
                            <p className='font-bold text-blue-500'>Krishika Iyer</p>
                            <p className='font-medium'>IT Engineer</p>
                            <Image
                                src={stars}
                                alt="Stars"
                                width={50}
                                height={50}
                                style={styles.reviewerImage}
                                className='mix-blend-multiply'
                            />
                        </div>
                    </div>
                </div>
                <div style={styles.reviewer} className='flex flex-col items-center  bg-blue-50 p-4 rounded-[10px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <Image
                            src={Double}
                            alt="Reviewer"
                            width={50}
                            height={50}
                        />
                        <p className='mt-4 font-bold text-center'>It’s been great to get to my dream house in less than 3 months with the help of CareAutomate</p>
                    </div>

                    <div className='flex justify-start w-full mt-4'>
                        <div className='text-left'>
                            <p className='font-bold text-blue-500'>Krishika Iyer</p>
                            <p className='font-medium'>IT Engineer</p>
                            <Image
                                src={stars}
                                alt="Stars"
                                width={50}
                                height={50}
                                style={styles.reviewerImage}
                                className='mix-blend-multiply'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testinomals

const styles = {
    reviewer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
      },
      reviewerImage: {
        borderRadius: '50%',
        marginRight: '10px',
      },
      reviewerName: {
        fontWeight: 'bold',
        marginBottom: '2px',
      },
      reviewerTitle: {
        fontSize: '14px',
        color: '#777',
      },
}