import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ellipseIcon from 'assets/icons/ellipseIcon.svg';
import greenEllipse from 'assets/icons/greenEllipse.svg';
import shareIcon from 'assets/icons/shareIcon.svg';
import compareIcon from 'assets/icons/compareIcon.svg';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { OpenCardModal } from 'redux/features/products/productsSlice';
import { addToWishlist, removeFromWishlist } from 'redux/features/wishlist/wishlistSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { fetchSingleProduct } from 'redux/features/products/productsSlice';
import { fetchCartItems } from 'redux/features/cart/cartSlice';
import { fetchAddWishlist } from 'redux/features/wishlist/wishlistSlice';
import { openWishlistModal } from 'redux/features/wishlist/wishlistSlice';

const ProductCard = ({ product }) => {

  
    const dispatch = useDispatch();
   

    const [overlayActive, setOverlayActive] = useState(false);

    const navigate = useNavigate();

    
    const handleClick = (e,id) => {
        e.preventDefault();
        if (overlayActive) {
            navigate(`/products/${product.id}`)
            dispatch(fetchSingleProduct(id));
        }
    };

    const handleMouseEnter = () => {
        setOverlayActive(true);
    };

    const handleMouseLeave = () => {
        setOverlayActive(false);
    };

    const handleAddToCart = (e,id) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(OpenCardModal());
        dispatch(fetchSingleProduct(id));
    }

    const handleWishlistToggle = (e,id) => 
    {
        e.preventDefault();
        e.stopPropagation();
        dispatch(openWishlistModal());
        dispatch(fetchSingleProduct(id));
    }

    return (
        <div key={product.id} onClick={(e)=>handleClick(e,product.id)}>
            <div className='relative w-[285px] h-[446px] group' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='w-[285px] h-[275px]'>
                    <LazyLoadImage src={product?.imageFiles} alt='' className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col gap-2 bg-[#F4F5F7] p-6'>
                    <p className='font-medium text-2xl truncate'>{product?.title}</p>
                    <p className='font-medium  text-gray3 my-2 truncate'>{product?.subTitle}</p>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold text-lg'>{product?.discountedPrice} $</p>
                        { product?.discountPercent>0 ?<p className='text-lg text-gray3  line-through'>{product?.salePrice} $</p> : ''}
                    </div>
                    <div className='w-12 h-12 absolute top-6 right-6'>
                        {product.isNew && <img src={greenEllipse} alt='' className='' /> }
                        {(product.isNew===false && product?.discountPercent >0) && <img src={ellipseIcon} alt='' className='' />}
                        {product.isNew && <p className='absolute top-3 right-2 text-white'>New</p>}
                        {(product.isNew===false &&product?.discountPercent>0) && <p className='absolute top-3 right-2 text-white'>{product.discountPercent}% </p>}
                        {product.isNew===false  && product?.discountPercent===0 && null}
                    </div>
                </div>
                <div >
                </div>

                <div className={overlayActive ? ' absolute w-full h-full bg-black -bottom-0 opacity-50 transition-all duration-300' : 'hidden'}>

                </div>
                {
                    overlayActive ?
                    <div className='absolute top-[38%] z-[1000] transition-all duration-300'>
                    <button className='w-[202px] h-12 mx-12 bg-white  text-primary z-50 border-2 border-primary hover:bg-primary hover:text-white'
                        onClick={(e)=>handleAddToCart(e,product.id)}>
                        Add To Cart
                    </button>
                    <div className='flex justify-center items-center gap-2 mt-2 '>
                        <span className='flex gap-1 items-center text-white'>
                            <img src={shareIcon} alt='Shareicon' />
                            <p className='font-semibold'>Share</p>
                        </span>
                        <span className='flex gap-1 items-center text-white'>
                            <img src={compareIcon} alt='Compareicon' />
                            <p className='font-semibold'>Compare</p>
                        </span>
                        <div>
                            <div onClick={(e)=>handleWishlistToggle(e,product.id)} className='flex items-center justify-center gap-1 font-semibold text-white'>
                                 <FaHeart color='white' />

                                {/* {isProductInWishlist ? <span>Liked</span> : <span>Like</span>} */}

                            </div>
                        </div>
                    </div>
                </div>
                :
                null
                }
               
            </div>
        </div>

    )
}

export default ProductCard