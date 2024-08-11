import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeCartSidebar } from 'redux/features/cart/cartSlice';
import { IoIosCloseCircleOutline } from "react-icons/io";
import deleteIcon from 'assets/icons/deleteIcon.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchDeleteCartItem  } from 'redux/features/cart/cartSlice';
import { fetchCartItems } from 'redux/features/cart/cartSlice';
import { toast } from 'react-toastify';

const CartSidebar = () => {

    const dispatch = useDispatch();
    const isCartSidebarOpen = useSelector((state) => state.cart.isCartSidebarOpen);
    const { deleteItem ,  deleteItemMessage } = useSelector((state)=>state.cart);


    const handleCloseSidebar = () => {
        dispatch(closeCartSidebar());
    }
   
    const userId = localStorage.getItem('userId');
    const cartData = useSelector((state) => state.cart?.cartData)
   

    const handleDeleteCartItem = (userId, productId, colorId) => {

        console.log(deleteItem,deleteItemMessage)
        dispatch(fetchDeleteCartItem({ userId, productId, colorId }));
        dispatch(fetchCartItems(userId));
        if(deleteItem===true){
            console.log(deleteItemMessage)
            toast.error(deleteItemMessage)
        }
    }

    return (
        <AnimatePresence>
            {isCartSidebarOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.5, type: 'tween' }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        background: '#fff',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        zIndex: 1000,
                    }}
                >
                    <div className='w-[450px] h-[700px] bg-white overflow-y-scroll  lg:px-2 py-5'>
                        <div className='flex items-center justify-between px-8 lg:pr-12'>
                            <h2 className='font-semibold text-2xl'>Shopping Cart</h2>
                            <IoIosCloseCircleOutline size={22} onClick={handleCloseSidebar} />
                        </div>
                        <hr className='w-full mt-6 border-[1px]' />
                        <div className='w-full min-h-[300px]'>
                            {

                                cartData?.map((item) =>
                                (
                                    <div key={item?.cartItems?.[0]?.id} className='mt-10'>
                                        <div className='flex gap-8 justify-between items-center rounded-md px-5'>
                                            <div className='w-20 h-20 lg:w-24 lg:h-24  bg-[#F9F1E7] rounded-lg'>
                                                <LazyLoadImage src={item?.cartItems?.[0]?.productImages?.imageFiles?.[0]} className='w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-md' alt='' />
                                            </div>
                                            <div>
                                                <p className='w-48 text-md '>{item?.cartItems[0]?.productTitle}</p>
                                                <div className='flex gap-2 mt-3'>
                                                    <span >{item?.cartItems?.[0]?.count}</span>
                                                    <span>X</span>
                                                    <span className=' text-primary'>  {item?.cartItems?.[0]?.salePrice} $</span>
                                                </div>
                                            </div>
                                            <button onClick={() => handleDeleteCartItem(userId, item?.cartItems?.[0]?.productId, item?.cartItems?.[0]?.productImages?.id)}>
                                                <img src={deleteIcon} alt='' />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='flex gap-32 mt-12 px-12'>
                            <h3>Subtotal:</h3>
                            <p className=' text-primary'>{cartData?.totalPriceWithoutDiscount} $</p>
                        </div>
                        <div className='flex gap-32 mt-12 px-12'>
                            <h3>Total:</h3>
                            <p className=' text-primary'>{cartData?.totalPrice} $</p>
                        </div>
                        <hr className='w-full border-[1px] mt-8' />
                        <div className='flex justify-center items-center px-12'>
                            <div className='w-full flex gap-2 mt-8'>
                                <Link to='cart'>
                                    <button className='px-8 py-1 rounded-[50px] border-[1px] border-black '>Cart</button>
                                </Link>
                                <Link to='checkout'>
                                    <button className='px-6 py-1 rounded-[50px]  border-[1px]  border-black'>Checkout</button>
                                </Link>
                                <button className='px-2 py-1 rounded-[50px]  border-[1px]  border-black'>Comparison</button>
                            </div>
                        </div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>

    )
}

export default CartSidebar
