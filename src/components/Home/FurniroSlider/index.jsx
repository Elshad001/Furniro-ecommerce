import React from 'react'
import './CustomSlider.css'
import Slider from "react-slick";
import sldimg1 from 'assets/images/sldimg1.png'
import sldimg2 from 'assets/images/sldimg2.png'



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
};

const FurniroSlider = () => {
  return (
    <div className='flex-col md:flex md:flex-row lg:flex lg:flex-row lg:items-center bg-[#FCF8F3] px-5 md:px-12 lg:px-24 py-5 overflow-x-hidden'>
      <div className='w-full md:w-1/2 lg:w-1/3 '>
        <div className='overflow-x-hidden'>
          <h2 className='w-full font-bold text-xl md:text-3xl lg:text-4xl heading-[48px] px-8'>
            50+ Beautiful rooms
            inspiration
          </h2>
          <p className='w-full px-8 h-12'>
            Our designer already made a lot of beautiful
            prototipe of rooms that inspire you
          </p>
          <div className='w-full text-start px-8'>
            <button className='px-6 py-2 lg:px-9 lg:py-3 bg-primary mt-9 text-white'>
              Explore More
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3">
        <div className="px-2 py-2 ">
          <Slider {...settings}>
            <div className='w-full'>
              <img src={sldimg1} alt='' className='w-full h-full' />
            </div>
            <div>
              <img src={sldimg2} alt='' className='w-full h-full' />
            </div>

            <div>
              <img src={sldimg2} alt='' className='w-full h-full' />
            </div>
          </Slider>
        </div>
      </div>

    </div>
  )
}

export default FurniroSlider
