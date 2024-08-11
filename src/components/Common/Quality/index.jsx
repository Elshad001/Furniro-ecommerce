import React from 'react'
import trophy1 from 'assets/icons/trophy1.svg';
import guarantee from 'assets/icons/guarantee.svg';
import shipping from 'assets/icons/shipping.svg';
import customerSupportIcon from 'assets/icons/customer-support.svg'; 

const Quality = () => {
  return (
    <div className=''>
       <div className='grid justify-items-start items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12  lg:justify-between px-5 w-full h-auto bg-[#FAF3EA] mt-5  lg:px-[50px] lg:py-[100px]'>
                    <div className='flex items-center gap-[10px]'>
                        <img src={trophy1} alt='' className='w-[60px] h-[60px] my-8 lg:my-0'/>
                        <div className='w-[267px h-[70px]'>
                            <p className='text-2xl font-semibold'>High Quality</p>
                            <p className='text-xl font-medium text-gray3'>crafted from top materials</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3  my-8 lg:my-0'>
                        <img src={guarantee} alt='' className='w-[60px] h-[60px]'/>
                        <div className='w-[267px h-[70px]'>
                            <p className='text-2xl font-semibold'>Warranty Protection</p>
                            <p className='text-xl font-medium text-gray3'>Over 2 years</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3  my-8 lg:my-0'>
                        <img src={shipping} alt='' className='w-[60px] h-[60px]'/>
                        <div className='w-[267px h-[70px]'>
                            <p className='text-2xl font-semibold'>Free Shipping</p>
                            <p className='text-2xl font-medium text-gray3'>Order over 150 $</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3  my-8 lg:my-0'>
                        <img src={customerSupportIcon} alt='' className='w-[60px] h-[60px]'/>
                        <div className='w-[267px h-[70px]'>
                            <p className='text-2xl font-semibold'>24 / 7 Support</p>
                            <p className='text-xl font-medium text-gray3'>Dedicated support</p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Quality
