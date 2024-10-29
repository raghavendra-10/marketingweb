'use client'
import React from 'react';
import Image from 'next/image';

import web from '../app/images/web.png';
import phoneShadow from '../app/images/phoneShadow.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Main from './components/main';
import Slidercomp from './components/slidercomp';
import WhyCare from './components/whyCare';
import TwoImage from './components/twoImage';
import HCMPlatformFeatures from './components/hcmplatform';
import Platform from './components/platform';
import Tenantplatform from './components/tenantplatform';
import Testinomals from './components/testinomals';
import FreeTrialSection from './components/freetrail';
import Footer from './components/footer';

const Home = () => {
  const heading = "Get started with";
  const subheading = "CareAutomate today";
  const description = "Experience the difference in managing your Home Care Business with our all-in-one platform. Sign up for a free trial today and see how CareAutomate can transform your business.";
  const buttonText = "Start Free Trial";

  return (
    <div className="flex flex-col">
      <Main/>

      {/* New Slider Section */}
     <Slidercomp/>

      {/* Why CareAutomate Section */}
      <WhyCare/>
      
      {/* Two-Image Section */}
      <TwoImage/>
      <HCMPlatformFeatures/>

      <Platform/>
      <Tenantplatform/>
      <Testinomals/>
      <FreeTrialSection
        heading={heading}
        subheading={subheading}
        description={description}
        buttonText={buttonText}
        // onButtonClick={() => alert('Starting your free trial...')}
      />

      <Footer/>
    </div>
  );
};

export default Home;


