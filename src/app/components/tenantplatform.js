import React from 'react';
import Image from 'next/image';
import image from '../images/webimage.png';
import polygon from '../images/polygon.png';

function TenantPlatform() {
  return (
    <div className="relative flex flex-col items-center px-4 py-8 md:py-0 md:h-[50rem] bg-white">
      {/* Header */}
      <p className="text-xl font-medium mb-6 md:mb-10">Tenant Platform:</p>

      {/* Main Image - Centered */}
      <div className="relative flex items-center justify-center mb-12 mt-10 md:mb-16">
        <Image
          src={image}
          alt="Tenant Platform"
          className="w-full max-w-[22rem] md:max-w-[50rem]"
        />

        {/* Feature Boxes around the Image */}
        {/* Document Access */}
        <div className="text-sm md:text-lg absolute top-[-60px] left-6 flex items-center gap-2 p-3 w-[14rem] md:w-1/2 bg-white border rounded-lg shadow-lg">
          <Image src={polygon} alt="Polygon Icon" width={20} height={20} />
          <div className="text-left">
            <p className="font-bold ">Document Access: <span className="font-normal">View important</span></p>
            <p>housing-related documents.</p>
          </div>
        </div>

        {/* Visit Schedules */}
        <div className=" text-sm md:text-lg absolute bottom-[-80px] left-4 flex items-center gap-2 p-3 w-[14rem] md:w-1/2 bg-white border rounded-lg shadow-lg">
          <div className="text-left">
            <p className="font-bold">Visit Schedules: <span className="font-normal">Stay informed</span></p>
            <p>on upcoming visits.</p>
          </div>
          <Image src={polygon} alt="Polygon Icon" width={20} height={20} className="rotate-180" />
        </div>

        {/* Direct Communication */}
        <div className="text-sm md:text-lg absolute bottom-0 right-0 flex items-center gap-2 p-3 w-[14rem] md:w-1/2 bg-white border rounded-lg shadow-lg">
          <Image src={polygon} alt="Polygon Icon" width={20} height={20} />
          <div className="text-left">
            <p className="font-bold">Direct Communication: <span className="font-normal">Chat with</span></p>
            <p>your HCM or housing provider easily.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TenantPlatform;
