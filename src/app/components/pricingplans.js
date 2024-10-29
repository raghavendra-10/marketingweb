import React from 'react';
import Vector from '../images/vector.png';
import Image from 'next/image';

function PricingPlans() {
  const plans = [
    {
      title: 'Starter',
      price: '$8.00',
      perUser: 'per user',
      monthlyPrice: '$40.00 per month',
      billingCycle: 'Billed Annually',
      features: [
        'Billed yearly',
        'Caregiver App',
        'Staff Scheduling',
        'Submit Care Notes',
        'Manage Team Availability',
        'Time & Attendance',
      ],
    },
    {
      title: 'Pro',
      price: '$13.00',
      perUser: 'per user',
      monthlyPrice: '$60.00 per month',
      billingCycle: 'Billed Annually',
      features: [
        'Billed yearly',
        'Caregiver App',
        'Staff Scheduling',
        'Submit Care Notes',
        'Manage Team Availability',
        'Time & Attendance',
      ],
      popular: true,
    },
    {
      title: 'Enterprise',
      price: '$9.00',
      perUser: '/tenant/month',
      monthlyPrice: '$60.00 per month',
      billingCycle: 'Billed Annually',
      features: [
        'Billed yearly',
        'Caregiver App',
        'Staff Scheduling',
        'Submit Care Notes',
        'Manage Team Availability',
        'Time & Attendance',
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center py-12">
      <h3 className="text-lg font-medium mb-2">Pay annually and save up to 20%</h3>
      <h2 className="text-2xl font-semibold mb-8">Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-85% px-12 py-4 border rounded-xl  shadow-lg ${
              plan.popular ? 'border-indigo-500 ' : 'border-gray-200'
            } bg-white transform ${
              plan.popular ? 'md:translate-y-6' : ''
            }`}
          >
            {plan.popular && (
              <div className="text-center  text-sm font-semibold text-indigo-600 mb-2">
                Most popular
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2 text-center">{plan.title}</h3>
            <div className="text-center mb-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-sm text-gray-500"> {plan.perUser}</span>
            </div>
            <div className="text-center text-gray-600 mb-4">
              <span>{plan.monthlyPrice}</span>
              <div>{plan.billingCycle}</div>
            </div>
            <ul className="text-sm text-gray-600 mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2">
                    <Image src={Vector} alt="Vector" width={24} height={24} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all">
              Try premium for free
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlans;
