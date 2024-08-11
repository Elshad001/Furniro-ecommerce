import React from 'react'
import { motion } from 'framer-motion'
import { SingleBlog ,Quality } from 'components'


const SingleBlogPage = () => {
  return (
   
    <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3 }}
  >
     <div className='pt-[100px]'>
      <SingleBlog/>
      <Quality/>
    </div>
  </motion.div>
  )
}

export default SingleBlogPage
