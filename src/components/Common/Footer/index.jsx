import React from 'react'

const Footer = () => {
    return (
        <div className='w-full pt-12 px-5  lg:pl-24 lg:pr-52 border-2  pb-5'>
            <div className='grid gap-y-8 gap-x-36 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                <ul>
                    <li className='font-bold text-lg'>Funiro.</li>
                    <li className='mt-12 w-[285px] h-18 font-normal text-sm text-gray6'>
                        400 University Drive Suite 200 Coral
                        <br />
                        Gables,
                        <br />
                        FL 33134 USA
                    </li>
                </ul>
                <ul>
                    <li className='font-medium text-sm text-gray6'>Links</li>
                    <li className='mt-5 lg:mt-12'>Home</li>
                    <li className='mt-5 lg:mt-12'>Shop</li>
                    <li className='mt-5 lg:mt-12'>About</li>
                    <li className='mt-5 lg:mt-12'>Contact</li>
                </ul>
                <ul>
                    <li className='font-medium text-sm text-gray6'>Help</li>
                    <li className='mt-5 lg:mt-12 whitespace-nowrap'>Payment Options</li>
                    <li className='mt-5 lg:mt-12'>Returns</li>
                    <li className='mt-5 lg:mt-12 whitespace-nowrap'>Privacy Policies</li>
                </ul>
                <ul>
                    <li className='font-medium text-sm text-gray6 mb-5'>Newsletter</li>
                    <span className='lg:flex flex-col items-center gap-3'>
                      <input className='w-52 text-gray6 border-b-[1px] border-[#333]' placeholder='Enter Your Email Address'/>
                        <li className='underline mt-5 lg:mt-0'>Subscribe</li>
                    </span>
                </ul>
            </div>
            <hr  className='w-full mt-5' />
            <p className='pt-5'>
            2023 furino. All rights reverved
            </p>
        </div>
    )
}

export default Footer