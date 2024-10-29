import React from 'react';
import Image from 'next/image';
import frame from '../images/frame.png'; // Adjust the path based on your project structure

function HCMPlatformFeatures() {
  return (
    <div>
      
      {/* Desktop Layout */}
      <div className="md:flex relative hidden items-center justify-center h-[53rem]">

        <div className="relative z-10">
          <Image
            src={frame}
            alt="Frame"
            width={550}
            height={100}
            className='h-[36rem]'
          />
        </div>
        <div className="absolute inset-0 ">
          <p className='absolute text-xl font-medium left-12'>HCM’s Mobile Platform:</p>
          <p style={styles.featureTitle} className="text-left left-[41rem] w-[20rem] top-12 absolute">
            Custom Scheduling <br />Create your <span style={styles.highlightText}>own schedule</span> and reminders for tenant visits.
          </p>
          <p style={styles.featureTitle} className="absolute  text-left top-[15rem] w-[20rem] right-[10rem]">
            Quick Visit Entry <br /> Add visit <span style={styles.highlightText}>details directly</span> <br /> from your schedule
          </p>
          <p style={styles.featureTitle} className="text-left absolute top-[34rem] w-[20rem] right-[10rem]">
            Communication Hub <br /> Message tenants and <span style={styles.highlightText}>office <br /> staff directly</span> from the app.
          </p>
          <p style={styles.featureTitle} className=" text-left absolute top-[45rem] w-[20rem] right-[34rem]">
            Complete Documentation <br /> Access <span style={styles.highlightText}>all tenant documents</span> instantly.
          </p>
          <p style={styles.featureTitle} className="left-[10rem] text-right top-[33rem] absolute w-[20rem]">
            On-the-go Management <br /> Manage <span style={styles.highlightText}>everything</span> from <br /> your phone.
          </p>
          <p style={styles.featureTitle} className="absolute text-right top-[14rem] w-[20rem] left-[10rem]">
            Track Usage <br /> Easily view <span style={styles.highlightText}>remaining <br /> units/hours</span> for each tenant.
          </p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center space-y-8">
        <h2 className="text-xl font-semibold mb-6">HCM’s Mobile Platform:</h2>
        <div className="text-center space-y-4">
          <h3 className="font-semibold text-lg">Custom Scheduling</h3>
          <p className="text-gray-600">
            Create your <span className="text-indigo-600 font-semibold">own schedule</span> and reminders for tenant visits.
          </p>
        </div>
        <Image src={frame} alt="Frame" width={300} height={300} />

        

        <div className="text-center space-y-4">
          <h3 className="font-semibold text-lg">Track Usage</h3>
          <p className="text-gray-600">
            Easily view <span className="text-indigo-600 font-semibold">remaining units/hours</span> for each tenant.
          </p>
        </div>

        <div className="text-center space-y-4">
          <h3 className="font-semibold text-lg">On-the-go Management</h3>
          <p className="text-gray-600">
            Manage <span className="text-indigo-600 font-semibold">everything</span> from your phone.
          </p>
        </div>

        <div className="text-center space-y-4">
          <h3 className="font-semibold text-lg">Quick Visit Entry</h3>
          <p className="text-gray-600">
            Add visit <span className="text-indigo-600 font-semibold">details directly</span> from your schedule.
          </p>
        </div>

        <div className="text-center space-y-4">
          <h3 className="font-semibold text-lg">Communication Hub</h3>
          <p className="text-gray-600">
            Message tenants and <span className="text-indigo-600 font-semibold">office staff directly</span> from the app.
          </p>
        </div>

        <div className="text-center space-y-4">
          <h3 className="font-semibold text-lg">Complete Documentation</h3>
          <p className="text-gray-600">
            Access <span className="text-indigo-600 font-semibold">all tenant documents</span> instantly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HCMPlatformFeatures;

const styles = {
  featureTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  highlightText: {
    color: '#6F84F8',
    fontWeight: 'bold',
  },
};
