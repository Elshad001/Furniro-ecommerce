import React from 'react'

const ProductListCard = ({product}) => {
  return (
    <div className='flex flex-col md:flex md:flex-row lg:flex lg:flex-row md:gap-12 lg:gap-96 w-full  bg-[#fbf7f0] p-2 md:p-4 lg:p-6'>
            <div className='flex gap-12 lg:gap-36 lg:w-1/2'>
                <div>
                    <img src={product?.imageFiles} alt='' className='w-32 h-32 lg:w-48 lg:h-48 bg-center rounded-md' />
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='text-sm md:text-lg lg:text-lg font-semibold'>{product?.title}</p>
                    <p className='text-xs md:text-xs lg:text-lg mt-2 lg:mt-3 '>{product?.subTitle}</p>
                    <div className='mt-2'>
                    <p className='text-xs  text-gray3 md:text-xs font-semibold lg:text-lg mt-5 line-through'>{product?.salePrice} $</p>
                    </div>
                    <p className='text-xs md:text-xs font-semibold lg:text-lg mt-5 '>{product?.discountedPrice} $</p>
                </div>
            </div>
        </div>
  )
}

export default ProductListCard
