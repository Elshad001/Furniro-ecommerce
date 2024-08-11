import React from 'react'
import { SingleProduct ,Quality ,Description ,} from 'components'
import { motion } from 'framer-motion'
import { RelatedProducts } from 'components'

const SingleProductPage = () => {
  return (

    <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3 }}
  >
     <div className='pt-[100px]'>
      <SingleProduct/>
      <Description/>
      <RelatedProducts/>
      <Quality/>
    </div>
  </motion.div>
   
  )
}

export default SingleProductPage
