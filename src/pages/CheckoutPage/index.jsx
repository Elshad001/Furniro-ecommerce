import React from 'react'
import { PageHeading, BillingDetails, PlaceOrder, Quality } from 'components'
import { motion } from 'framer-motion'

const Checkout = () => {
  return (

    <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3 }}
  >
    <div className='pt-[100px]'>
      <PageHeading activePage='Checkout'/>
      <div className='flex flex-col justify-center items-center lg:flex lg:flex-row lg:items-start gap-12'>
        <BillingDetails />
        <PlaceOrder />
      </div>
      <Quality />
    </div>
  </motion.div>
  )
}

export default Checkout
