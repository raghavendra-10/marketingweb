import React from 'react'
import FreeTrialSection from '../components/freetrail'
import PricingPlans from '../components/pricingplans'
import ComparisonTable from '../components/comparision'
import Footer from '../components/footer'
import Benefits from '../components/benifits'

function page() {
    const heading = 'Start your'
    const subheading = '7-day free trail'
    const description = "We’re confident you’ll see the value in Care Automate as soon as you start using it.  sign up for a free 7 day trial."
    const buttonText = 'Compare Plans'

  return (
    <div>
      <FreeTrialSection
        heading={heading}
        subheading={subheading}
        description={description}
        buttonText={buttonText}
        // onButtonClick={() => alert('Starting your free trial...')}
      />
      <PricingPlans/>
      <ComparisonTable/>
      {/* <Benefits/> */}
      <Footer/>
    </div>
  )
}

export default page
