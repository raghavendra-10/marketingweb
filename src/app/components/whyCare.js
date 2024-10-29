import React from 'react'

function WhyCare() {
  return (
    <div className="px-4 md:px-24 py-8 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-10 hidden md:block">Why CareAutomate?</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center max-w-5xl mx-auto">
          <div className="flex flex-col items-end mb-8 lg:mb-0 space-y-10 lg:pr-10">
            <div className="md:text-right">
              <h3 className="font-semibold text-lg mb-2">Mobile-first Platform</h3>
              <p className="text-gray-600">Manage everything on the go by both <span className="text-indigo-600 font-semibold">Housing Providers</span> and Case Managers.</p>
            </div>
            <div className="md:text-right px-16">
              <h3 className="font-semibold text-lg mb-2">Tenant Documentation</h3>
              <p className="text-gray-600">Access and manage tenant details with just a few taps.</p>
            </div>
            <div className="md:text-right">
              <h3 className="font-semibold text-lg mb-2">Revenue Focus</h3>
              <p className="text-gray-600">Stress-free <span className="text-indigo-600 font-semibold">revenue generation</span>, allowing you to focus on <span className="text-indigo-600 font-semibold">tenant satisfaction</span>.</p>
            </div>
          </div>

          <div className="hidden md:block" style={styles.centralLine}>
            <div style={styles.circleTop}></div>
            <div style={styles.gradientCircle}></div>
            <div style={styles.circleBottom}></div>
          </div>

          <div className='block md:hidden' style={styles.gradientCircleMobile}></div>
          <h2 className="text-2xl font-semibold mb-10 block md:hidden absolute mt-16">Why CareAutomate?</h2>

          <div className="flex flex-col items-start mt-8 lg:mt-0 space-y-10 lg:pl-10">
            <div className='md:text-left'>
              <h3 className="font-semibold text-lg mb-2">Centralized Communication</h3>
              <p className="text-gray-600">All records are stored in one place for <span className="text-indigo-600 font-semibold">easy reference</span>.</p>
            </div>
            <div className='px-16 md:text-left'>
              <h3 className="font-semibold text-lg mb-2">Automated Billing</h3>
              <p className="text-gray-600">Save 90% of your time with <span className="text-indigo-600 font-semibold">seamless billing</span>.</p>
            </div>
            <div className='md:text-left'>
              <h3 className="font-semibold text-lg mb-2">Mobile-first Platform</h3>
              <p className="text-gray-600">Manage everything on the go—by both Housing Providers and Case Managers.</p>
            </div>
          </div>
        </div>
      </div>

  )
}

export default WhyCare
const styles = {
    centralLine: {
      width: '2px',
      backgroundColor: '#6F84F8',
      height: '400px',
      position: 'relative',
      zIndex: 1,
    },
    circleTop: {
      width: '20px',
      height: '20px',
      backgroundColor: '#6F84F8',
      borderRadius: '50%',
      position: 'absolute',
      top: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    circleBottom: {
      width: '20px',
      height: '20px',
      backgroundColor: '#6F84F8',
      borderRadius: '50%',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    gradientCircle: {
      width: '150px',
      height: '150px',
      background: 'radial-gradient(circle, rgba(111, 132, 248, 0.7), rgba(255, 255, 255, 0))',
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 0,
    },
    gradientCircleMobile: {
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(111, 132, 248, 0.7), rgba(255, 255, 255, 0))',
        borderRadius: '50%',
        // position: 'absolute',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        zIndex: 0,
      },
  }