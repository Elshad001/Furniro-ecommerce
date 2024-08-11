import React  from 'react';
import { PageHeading, ShopPagination, Quality } from 'components';
import { motion } from 'framer-motion';



const Shop = () => {


  

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.5 }}
    >
      <div className='w-full h-auto pt-[100px]'>
        <PageHeading activePage='Shop' />
        <ShopPagination/>
        <Quality />
      </div>
    </motion.div>
  )
}

export default Shop
