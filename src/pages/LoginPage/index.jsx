import React from 'react'
import { motion } from 'framer-motion'
import { PageHeading } from 'components'
import Login from 'components/Login'


const LoginPage = () => {
  return (
    
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
         <div className='pt-[100px]'>
            <PageHeading activePage='Login' />
            <Login/>
        </div>
      </motion.div>
  )
}

export default LoginPage
