import React from 'react'
import { PageHeading, ContactUs, ContactForm, Quality } from 'components'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.5 }}
    >
      <div className='pt-[100px]'>
        <PageHeading activePage='Contact' />
        <div className='flex gap-5 '>
          <ContactUs />
          <ContactForm />
        </div>
        <Quality />
      </div>
    </motion.div>
  )
}

export default Contact
