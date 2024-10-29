import VisitManagement from '@/app/components/visit'
import React from 'react'
import BillingAndRemittances from '../components/billing'
import Documentation from '../components/documentation'
import Communication from '../components/communication'
import Footer from '../components/footer'

function Page() {
  return (
    <div>
      <VisitManagement/>
      <BillingAndRemittances/>
      <Documentation/>
      <Communication/>
      <Footer/>
    </div>
  )
}

export default Page
