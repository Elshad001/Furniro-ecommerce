import React from 'react'
import { NavLink } from 'react-router-dom'
import leftIcon from 'assets/icons/leftIcon.svg'
import banner from 'assets/images/banner.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const PageHeading = ({ activePage }) => {
  return (
    <div className="relative">
      <LazyLoadImage src={banner} alt="" className="w-full h-[316px] object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute top-[50%]">
          <h1 className="text-4xl md:text-3xl sm:text-2xl  mx-2">{activePage}</h1>
          <div className='flex gap-2'>
            <NavLink to="/" className="flex items-center">
              <span>Home</span>
            </NavLink>
            <img src={leftIcon} alt='' />
              <p>{activePage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeading
