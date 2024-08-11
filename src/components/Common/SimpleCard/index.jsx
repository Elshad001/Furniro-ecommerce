import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'


const SimpleCard = ({cardImg,cardTitle}) => {
  return (
    <div>
      <LazyLoadImage src={cardImg} alt='' className='rounded-md'/>
      <p className='w-20 h-16 mx-auto mt-5 font-semibold text-2xl'>{cardTitle}</p>
    </div>
  )
}

export default SimpleCard
