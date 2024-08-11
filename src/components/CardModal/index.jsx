import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseCardModal } from 'redux/features/products/productsSlice'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CounterButton } from 'components';
import { fetchAddToCart, fetchSingleProduct, fetchCartItems } from 'redux/features/cart/cartSlice';
import { setSelectedColor } from 'redux/features/cart/cartSlice';
import { toast } from 'react-toastify';


const CardModal = () => {

   
    const handleCloseCardModal = (e) => {

        e.preventDefault();
        e.stopPropagation();
        dispatch(CloseCardModal());
    }


    const dispatch = useDispatch();
    const singleProduct = useSelector((state) => state.products?.singleProduct);
    const selectedColor = useSelector((state)=>state.cart?.selectedColor);
    const userId=localStorage.getItem('userId');
    const quantity = useSelector((state)=>state.cart?.quantity)
    const { success ,successMessage} = useSelector((state)=>state?.cart);

   

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
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pt-12 rounded-md bg-slate-100 z-[10000]'>
            {/* <h3 className='text-lg font-medium text-center'>{singleProduct?.name}</h3> */}
            <div className='mt-5 pl-8 pr-8 text-center'>
                <h3 className='text-sm text-gray6'>Select Size</h3>
                <div className='flex justify-center items-center'>
                    <div className='flex gap-8 text-sm font-medium mt-3'>
                    {
                                singleProduct?.sizes?.map((size) =>
                                (
                                    <button key={size?.id} className='w-8 h-8 rounded-md bg-primary'>{size?.sizeName}</button>
                                ))

                            }

                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <h3 className='text-sm text-gray6 text-center'>Select Color</h3>
                <div className='flex justify-center items-center'>
                    <div className='flex gap-8 mt-3'>
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
            </div>
            <div className='flex justify-center items-center mt-5'>
                <CounterButton />
                <button className='w-28 h-12 text-sm lg:w-32  lg:h-16 border border-gray6 rounded-lg ml-4'
                    onClick={handleAddToCart}
                >Add To Cart
                </button>
            </div>
            <div className='absolute top-3 right-3'>
                <IoIosCloseCircleOutline size={22} onClick={handleCloseCardModal} />
            </div>

        </div>
    )
}

export default CardModal
