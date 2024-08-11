import React from 'react'
import { PageHeading , Quality ,Wishlist } from 'components'
import { motion } from 'framer-motion'



const WishlistPage = () => {
    return (

        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
         <div className='pt-[100px]'>
            <PageHeading activePage='Wishlist' />
            <Wishlist/>
            <Quality />
        </div>
      </motion.div>
       
    )
}

export default WishlistPage
