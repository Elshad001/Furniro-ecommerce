import React from 'react'
import bgh from 'assets/images/bgh.jpg';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='relative flex w-full h-auto'>
      <img src={bgh} alt='Heroimage' className='w-full object-fit' />
      <div className='absolute top-[20%] right-[4%] rounded-[10px] w-[45%] h-[70%] lg:w-[643px] lg:h-[443px] bg-[#FFF3E3] pl-[5%] pt-[2%] lg:pt-[4%]'>
        <p className='font-semibold text-[8px] md:text-sm  lg:text-base  tracking-[3px]'>New Arrival</p>
        <h2 className='text-primary text-xs md:text-xl lg:text-[52px] leading-4 md:leading-8 lg:leading-[65px] font-semibold lg:font-bold mt-1'>Discover Our <br /> New Collection</h2>
        <p className='mt-1 lg:mt-4 text-[6px] md:text-sm lg:text-lg font-medium pr-5 lg:pr-16 leading-1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <Link to='/shop'>
          <button className='bg-primary  px-4 py-1 md:py-2 lg:px-[72px] lg:py-6 mt-1 md:mt-10 lg:mt-12  font-bold text-[8px] sm:text-xs  md:text-sm lg:text-base text-white'>Buy Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
