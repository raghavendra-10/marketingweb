import React from 'react';

const Benefits = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-2xl font-bold mb-8">Benefits</h2>
      
      <div className="relative flex items-center justify-center">
        {/* Central Icon Box */}
        <div className="w-24 h-24 border-2 border-blue-300 rounded-md flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-blue-300 rounded-md"></div>
        </div>

        {/* Top Center */}
        <div className="absolute top-0 transform -translate-y-10 flex flex-col items-center text-center">
          <p className="font-semibold">Zero clients = Zero dollars</p>
          <p className="text-blue-500">Only pay for active clients.</p>
        </div>

        {/* Top Left */}
        <div className="absolute top-1/4 left-0 transform -translate-x-10 flex flex-col items-end text-right">
          <p className="font-semibold">Zero efforts on billing processes</p>
          <p className="text-blue-500">Automated billing saves time and reduces manual work</p>
        </div>

        {/* Top Right */}
        <div className="absolute top-1/4 right-0 transform translate-x-10 flex flex-col items-start text-left">
          <p className="font-semibold">Zero billing errors</p>
          <p className="text-blue-500">Ensure 100% accuracy with automated calculations.</p>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-1/4 left-0 transform -translate-x-10 flex flex-col items-end text-right">
          <p className="font-semibold">Zero migration cost</p>
          <p className="text-blue-500">Free and easy migration from existing systems</p>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-1/4 right-0 transform translate-x-10 flex flex-col items-start text-left">
          <p className="font-semibold">Zero errors on unit calculation</p>
          <p className="text-blue-500">Track units seamlessly without mistakes</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
