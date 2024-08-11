import React from 'react'
import { fetchDeleteWishlistItem, fetchWishlistItems } from 'redux/features/wishlist/wishlistSlice'
import deleteIcon from 'assets/icons/deleteIcon.svg'
import { useDispatch } from 'react-redux'


const WishlistCard = ({ product }) => {

    const dispatch = useDispatch();
    const userId = localStorage.getItem('userId');

    const handleRemoveFromWishlist = () => {
        dispatch(fetchDeleteWishlistItem({ userId:userId ,productId:product?.productId,colorId:product?.productImages?.id}))
        dispatch(fetchWishlistItems(userId))
    }


    return (
        <div className='flex flex-col md:flex md:flex-row lg:flex lg:flex-row md:gap-12 lg:gap-96 w-full  bg-[#fbf7f0] p-2 md:p-4 lg:p-6'>
            <div className='flex gap-12 lg:gap-36 lg:w-1/2'>
                <div>
                    <img src={product?.productImages?.imageFiles?.[0]} alt='' className='w-32 h-32 lg:w-48 lg:h-48 bg-center rounded-md' />
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='text-sm md:text-lg lg:text-lg font-semibold'>{product?.title}</p>
                    <p className='text-xs md:text-xs lg:text-lg mt-2 lg:mt-3 '>{product?.subTitle}</p>
                    <div className='mt-2'>
                        <button
                            className={`w-8 h-8 rounded-full`}
                            style={{ backgroundColor: `${product?.productImages?.colorHexCode}` }}
                        ></button>
                    </div>
                    <p className='text-xs md:text-xs font-semibold lg:text-lg mt-5'>{product?.salePrice} $</p>
                </div>
            </div>
                <div className='flex justify-center items-center'>
                    <button onClick={handleRemoveFromWishlist}>
                        <img src={deleteIcon} alt='' />
                    </button>
                </div>
        </div>
    )
}

export default WishlistCard
