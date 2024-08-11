import {Hero ,BrowseRange ,OurProducts ,FurniroSlider,GridGallery} from 'components';
import { motion } from 'framer-motion';
const Home = () => {

  
  

  return (
    <motion.div
    initial={{ opacity: 0, x: '100%' }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: '100%' }}
    transition={{ duration: 0.5 }}
  >
    <div className='pt-[100px]'>
      <Hero/>
      <BrowseRange/>
      <OurProducts/> 
      <FurniroSlider/>
      <GridGallery/>
    </div>
  </motion.div>
   
  )
}

export default Home
