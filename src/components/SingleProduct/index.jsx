import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import SimplePageHeading from 'components/Common/SimplePageHeading';
import starIcon from 'assets/icons/starIcon.svg'
import facebookIcon from 'assets/icons/facebookIcon.svg';
import linkedinIcon from 'assets/icons/linkedinIcon.svg';
import twitterIcon from 'assets/icons/twitterIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSingleProduct } from 'redux/features/products/productsSlice';
import { CounterButton } from 'components';
import {fetchAddToCart } from 'redux/features/cart/cartSlice';
import { setSelectedColor } from 'redux/features/cart/cartSlice';
import Rating from 'components/Common/Raiting';
import { fetchCartItems } from 'redux/features/cart/cartSlice';
import { toast } from 'react-toastify';

const SingleProduct = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const singleProduct = useSelector((state) => state.products?.singleProduct);
    const selectedColor = useSelector((state)=>state.cart?.selectedColor);
    const { success ,successMessage} = useSelector((state)=>state.cart);
    const userId=localStorage.getItem('userId');
    


    console.log(success);
    console.log(successMessage);

    const quantity = useSelector((state)=>state.cart?.quantity)
    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, []);
   
    useEffect(() => {
        dispatch(setSelectedColor(singleProduct?.colors?.[0]))
    }, [singleProduct]);
    
    
        const handleColorButtonClick = (id) => {
            const selectedNewColor = singleProduct?.colors?.find(color => color?.id === id);
            dispatch(setSelectedColor(selectedNewColor));
        };
        
        const handleAddToCart = () => {
                dispatch(fetchAddToCart({ productId:singleProduct?.id,colorId:selectedColor?.id,userId:userId,count:quantity, }));
                dispatch(fetchCartItems(userId));
                if(success===true)
                {
                    toast.success(successMessage)
                }
            };
            
            console.log(selectedColor);
      
    return (
        <div>
            <SimplePageHeading pageName='Shop' contentName={singleProduct?.title} />
            <div className='flex flex-col md:px-36 lg:flex lg:flex-row gap-12   w-full pt-9 pl-5 lg:pl-24'>
                <div className='flex gap-2 lg:gap-9 w-full lg:w-1/2 '>
                    <div>
                        {
                            selectedColor?.imageFiles?.map((img,index) =>
                            (
                                <div key={index} className='bg-[#FFF3E3] w-12 h-12 md:w-20 md:h-20  lg:w-20 lg:h-20 my-8'>
                                    <img src={img} alt='foto' />
                                </div>
                            ))
                        }
                    </div>
                    <div className='bg-[#FFF3E3] w-60 h-72  md:w-[423px] md:h-[500px] lg:w-[423px] lg:h-[500px]'>
                        <img src={selectedColor?.imageFiles?.[0]} alt='' className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:mt-8'>
                    <h2 className='text-2xl md:text-3xl lg:text-[42px] font-medium'>{singleProduct?.title}</h2>
                    {/* <p className='text-sm  lg:text-2xl font-medium text-gray6 mt-5'>{selectedVariation?.price}</p> */}
                    <div className='flex justify-between gap-12 lg:gap-4 items-center mt-4'>
                        <span className='flex gap-1'>
                            <img src={starIcon} alt='' />
                            <img src={starIcon} alt='' />
                            <img src={starIcon} alt='' />
                            <img src={starIcon} alt='' />
                            <img src={starIcon} alt='' />
                        </span>
                        {/* <Rating rating={singleProduct?.rating}/> */}
                        <p className='w-full lg:w-[424px] text-xs lg:text-sm font-medium'>{singleProduct?.reviewCount} Customer Rewiew</p>
                    </div>
                    <p className='w-full pr-8 md:pr-0 md:w-96 lg:w-[424px] mt-4 text-xs md:text-sm lg:text-sm text-gray6'>
                        {singleProduct?.introduction}
                    </p>
                    <div className='mt-5'>
                        <h3 className='text-sm text-gray6'>Size</h3>
                        <div className='flex gap-4 text-sm font-medium mt-3'>
                            {
                                singleProduct?.sizes?.map((size) =>
                                (
                                    <button key={size?.id} className='w-8 h-8 rounded-md bg-primary'>{size?.sizeName}</button>
                                ))

                            }
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h3 className='text-sm text-gray6'>Color</h3>
                        <div className='flex gap-4 mt-3'>
                            {singleProduct?.colors?.map((color) => (
                                <button
                                    key={color?.id}
                                    className={`w-8 h-8 rounded-full`}
                                    style={{ backgroundColor: `${color?.colorHexCode}` }}
                                    onClick={() => handleColorButtonClick(color?.id)}
                                ></button>
                            ))}
                        </div>
                    </div>
                    <div className='flex items-center mt-8 '>
                        <CounterButton/>
                        <button className='w-28 h-12 text-sm lg:w-32  lg:h-14 border border-gray6 rounded-lg ml-4'
                            onClick={handleAddToCart}
                        >Add To Cart</button>
                        <button className='w-28 h-12 text-sm lg:w-32  lg:h-14 border border-gray6 rounded-lg ml-2'>+ Compare</button>
                    </div>
                    <div className='text-sm  text-gray6 mt-10'>
                        <p className='flex gap-4'><span className='w-[75px]'>SKU</span>:<span>{singleProduct?.sku}</span></p>
                        <p className='flex gap-4  my-3'><span className='w-[75px]'>Category</span>:<span>{singleProduct?.category?.categoryName}</span></p>
                        <div className='flex gap-4'><span className='w-[75px]'>Tags</span>:
                            <div>

                                {singleProduct?.tags?.map((tag) =>
                                (
                                    <span key={tag?.id}> {tag?.tagName} ,</span>
                                ))}
                            </div>
                        </div>
                        <p className='flex items-center gap-4 mt-4'>
                            <span className='w-[75px]'>Share</span>:
                            <span className='flex items-center gap-6'>
                                <img src={facebookIcon} alt='facebbok icon' />
                                <img src={linkedinIcon} className='w-[25px] h-[25px]' alt='linkedin icon' />
                                <img src={twitterIcon} alt='twitter icon' />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleProduct
