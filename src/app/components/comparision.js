// components/ComparisonTable.js
import React from 'react';
import Image from 'next/image';
import Vector from '../images/Vector.png';
import Vector2 from '../images/Vector2.png';
import calogo from '../images/calogo.png';

const ComparisonTable = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-2">Why Choose us?</h2>
      <p className="text-center text-gray-500 mb-6">What makes the difference?</p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse" align="center">
          <thead>
            <tr>
              <th className="text-left p-3 text-gray-600">Features</th>
              <th className="p-3 text-center">
                <Image src={calogo} alt="Care Automate" width={120} />
              </th>
              <th className="p-3 text-center text-gray-600">Other Softwares</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="p-3 text-gray-700">{row.feature}</td>
                <td className="p-3 text-center ">
                  {row.careAutomate ? (
                    <Image src={Vector} alt="Check" width={24} height={24} />
                  ) : (
                    <Image src={Vector2} alt="Cross" width={24} height={24} />
                  )}
                </td>
                <td className="p-3 text-center ">
                  {row.otherSoftware ? (
                    <Image src={Vector} alt="Check" width={24} height={24} />
                  ) : (
                    <Image src={Vector2} alt="Cross" width={24} height={24} />
                  )}
                </td>
              </tr>
            ))}
            <tr className="border-t">
              <td className="p-3 text-gray-700">Pricing</td>
              <td className="p-3 text-center text-green-500">$8/month/tenant</td>
              <td className="p-3 text-center text-red-500">Higher</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const tableData = [
  { feature: 'Housing Case Manager Mobile App', careAutomate: true, otherSoftware: false },
  { feature: 'Housing Provider Mobile App', careAutomate: true, otherSoftware: false },
  { feature: 'Scheduling', careAutomate: true, otherSoftware: false },
  { feature: 'Digital Documentation', careAutomate: true, otherSoftware: true },
  { feature: 'Automated Billing', careAutomate: true, otherSoftware: false },
  { feature: 'Visit Notes by Voice Recording', careAutomate: true, otherSoftware: false },
  { feature: 'Text Communication', careAutomate: true, otherSoftware: false },
  { feature: 'Auto-generated Reports', careAutomate: true, otherSoftware: false },
  { feature: 'Free Trial', careAutomate: true, otherSoftware: false },
  { feature: 'Tenant App', careAutomate: true, otherSoftware: false },
];

export default ComparisonTable;
