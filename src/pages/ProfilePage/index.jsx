import React from 'react'
import { Profile } from 'components'
import { PageHeading } from 'components'
import { Quality } from 'components'
import { motion } from 'framer-motion'







const ProfilePage = () => {

    

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3 }}
  >
     <div className='pt-[100px]'>
        <PageHeading activePage='Profile' />
        <Profile/>
        <Quality />
    </div>
  </motion.div>
  )
}

export default ProfilePage
