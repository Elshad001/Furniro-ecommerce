import React from 'react'
import { fetchCartItems } from 'redux/features/cart/cartSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteIcon from 'assets/icons/deleteIcon.svg'
import { fetchDeleteCartItem } from 'redux/features/cart/cartSlice'
import { toast } from 'react-toastify';

const Cart = () => {

    
    const userId=localStorage.getItem('userId');

   
    const cartData=useSelector((state)=>state.cart?.cartData)
    const { deleteItem ,  deleteItemMessage } = useSelector((state)=>state.cart);
    console.log(cartData);
   
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchCartItems(userId)) 

    }, []);

    const handleDeleteCartItem = (userId,productId,colorId) => {
        dispatch(fetchDeleteCartItem({userId,productId,colorId}));
        dispatch(fetchCartItems(userId));
        if(deleteItem===true){
            console.log(deleteItemMessage)
            toast.error(deleteItemMessage)
        }

    }
    return (
        cartData?.length > 0 ?  
            <div className='flex gap-8   h-auto pt-16 px-24'>
                <div className=' w-full h-auto '>
                    <table>
                        <thead className=''>
                            <tr className='w-[817px] h-14 bg-[#F9F1E7]'>
                                <th className='px-14'>Product</th>
                                <th className='px-14'>Price</th>
                                <th className='px-14'>Quantity</th>
                                <th className='px-14'>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {cartData?.map((item) => (
                                <tr key={item?.cartItems?.[0]?.id} className=''>
                                    <td className='pr-14'>
                                        <div className='flex gap-5 items-center justify-between rounded-md py-5'>
                                            <div className=' bg-[#F9F1E7]'>
                                                <LazyLoadImage src={item?.cartItems?.[0]?.productImages?.imageFiles?.[0]} className='w-[111px] h-[90px] rounded-md ' alt='' />
                                            </div>
                                            <p className='w-1/2 text-center'>{item?.cartItems[0]?.productTitle}</p>
                                        </div>
                                    </td>
                                    <td className='px-14 text-center'>
                                    {item?.cartItems?.[0]?.salePrice} $
                                    </td>
                                    <td className='px-14 text-center'>
                                        <button className='w-8 h-8 rounded  border border-gray-700'>{item?.cartItems?.[0]?.count}</button>
                                    </td>
                                    <td className='flex items-center justify-between gap-5 pl-14 pr-5 py-12'>
                                        <span>{item?.cartItems?.[0]?.subtotal} $</span>
                                        <button onClick={()=>handleDeleteCartItem(userId,item?.cartItems?.[0]?.productId,item?.cartItems?.[0]?.productImages?.id)}>
                                            <img src={deleteIcon} alt='' />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                </div>
                <div className='w-[450px] h-[390px] bg-[#F9F1E7] pt-[15px] px-[50px]'>
                    <h2 className='w-full text-center font-Poppins font-[600] text-[32px]'>Cart Totals</h2>
                    <div className='flex flex-col justify-center'>
                        <div className='flex gap-8 mt-[61px]'>
                            <p className='font-semibold'>Subtotal</p>
                            <p className=' text-[#9F9F9F]'>{cartData?.totalPrice} $</p>
                        </div>
                        <div className='flex gap-8 items-center mt-[31px]'>
                            <p className='font-semibold'>Total</p>
                            <p className='font-medium text-xl text-primary'>{cartData?.totalPriceWithoutDiscount} $</p>
                        </div>
                    </div>
                    <button className='px-12 py-4 mx-7  border-[1px] border-[#000] rounded-md mt-14'>Check Out</button>
                </div>
            </div>
            :
            <div className='flex items-center justify-center  min-h-[300px]'>
                <p className=' font-bold text-3xl text-center text-red-400'>
                    Your Product Cart Is Empty
                </p>
            </div>



    )
}

export default Cart
