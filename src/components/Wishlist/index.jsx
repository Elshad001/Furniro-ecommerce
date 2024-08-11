import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { WishlistCard } from 'components';
import { useEffect } from 'react';
import { fetchWishlistItems } from 'redux/features/wishlist/wishlistSlice';




const Wishlist = () => {

    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist?.wishlistItems);
    console.log(wishlistItems);
    const wishlist =wishlistItems?.[0]?.favorites
    console.log(wishlist);
  
    const userId=localStorage.getItem('userId');
  


    useEffect(() => {
        dispatch(fetchWishlistItems(userId))
    }, []);


  
  


  console.log(wishlist);
  return (

    wishlistItems.length > 0 ?
    <div className='flex flex-col w-full justify-center lg:justify-start gap-4 lg:gap-8  mt-8 px-12 lg:px-36'>

      {
        wishlist?.map((item) =>
        (

          <WishlistCard key={item.productId} product={item} />

        )
        )}
    </div>
    :
    <div className='flex items-center justify-center  min-h-[300px]'>
    <p className=' font-bold text-3xl text-center text-red-400'>
        Your Wishlist Is Empty
    </p>
    </div>
  )
}

export default Wishlist
