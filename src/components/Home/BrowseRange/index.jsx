import React from 'react'
import SimpleCard from 'components/Common/SimpleCard'
import dining from 'assets/images/dining.png';
import living from 'assets/images/living.png';
import bedroom from 'assets/images/bedroom.png';

const BrowseRange = () => {
  return (
    <div className='w-full h-auto mt-12 px-5'>
          <h2 className=' w-full text-center font-bold  text-xl  md:text-2xl  lg:text-3xl text-[#333]'>Browse The Range</h2>
          <p className='w-full text-center   text-sm md:text-lg lg:text-xl text-[#666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className='flex flex-wrap gap-5 text-xs lg:text-lg justify-center w-full mt-16 mx-auto'>
            <SimpleCard cardImg={dining} cardTitle='Dining' />
            <SimpleCard cardImg={living} cardTitle='Living' />
            <SimpleCard cardImg={bedroom} cardTitle='Bedroom' />
          </div>
        </div>
  )
}

export default BrowseRange
