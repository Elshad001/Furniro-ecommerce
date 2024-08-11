import React from 'react'

const PlaceOrder = () => {
    return (
        <div className='w-full md:w-full  lg:w-[608px]  px-9 py-20'>
            <div className='flex justify-between  text-2xl font-medium '>
                <p>Product</p>
                <p>Subtotal</p>
            </div>
            <div className='flex justify-between pt-4'>
                <div className='flex gap-2 items-center'>
                    <p className=' text-gray6'>Asgaard sofa</p>
                    <p>xl</p>
                </div>
                <p>Rs. 250,000.00</p>
            </div>
            <div className='flex justify-between pt-5'>
                <p>Subtotal</p>
                <p>Rs. 250,000.00</p>
            </div>
            <div className='flex justify-between pt-5'>
                <p>Total</p>
                <p className='text-2xl font-bold text-primary'>Rs. 250,000.00</p>
            </div>
            <hr className='w-full mt-9 border-[1px] border-[#D9D9D9]' />
            <div>
                <div className='flex gap-4 items-center mt-5'>
                    <input type='radio' />
                    <p>Direct Bank Transfer</p>
                </div>
                <p className='mt-3 font-light text-gray6'>
                    Make your payment directly into our bank account.
                    Please use your Order ID as the payment reference.
                    Your order will not be shipped until the funds have cleared in our account.
                </p>
            </div>
            <div className='mt-6'>
                <div className='flex gap-4 items-center mt-5'>
                    <input type='radio' />
                    <p>Direct Bank Transfer</p>
                </div>
                <div className='flex gap-4 items-center mt-5'>
                    <input type='radio' />
                    <p>Direct Bank Transfer</p>
                </div>
            </div>
            <p className='mt-5 font-light'>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account,
                and for other purposes described in our <span className='font-bold'>privacy policy.</span>
            </p>
            <div className='w-full text-center'>
            <button className='w-1/2 mt-10 py-4 border border-black text-5  rounded-2xl text-center  hover:bg-primary hover:text-white'>Place Order</button>
            </div>
        </div>

    )
}

export default PlaceOrder
