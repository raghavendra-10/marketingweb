import React from 'react';

function FreeTrialSection({ heading, subheading, description, buttonText, onButtonClick }) {
  return (
    <div className="flex flex-col mt-8 items-center justify-center bg-blue-50 text-center py-10 px-6 md:px-20 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">
        {heading} <span className="text-indigo-600 font-semibold">{subheading}</span>
      </h2>
      <p className="text-gray-600 mb-6">
        {description}
      </p>
      <button
        className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-indigo-700"
        // onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default FreeTrialSection;
