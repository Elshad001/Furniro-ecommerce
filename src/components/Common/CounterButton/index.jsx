import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increaseQuantity ,decreaseQuantity } from 'redux/features/cart/cartSlice'

const CounterButton = () => {

    const dispatch = useDispatch();
    const quantity = useSelector((state)=>state.cart.quantity)



    const handleIncreaseQuantity = () => {
          
        dispatch(increaseQuantity())
    }

    const handleDecreaseQuantity = () => {

        dispatch(decreaseQuantity())
    }




    return (
        <div type='number' className='flex justify-between items-center w-24 h-12 px-1 text-md lg:w-32 lg:h-14 border border-gray6 rounded-lg'>
            <button className='w-1/3 text-center' onClick={handleDecreaseQuantity}>-</button>
            <div className='w-1/3 text-center'>{quantity} </div>
            <button className='w-1/3 text-center' onClick={handleIncreaseQuantity}>+</button>
        </div>
    )
}

export default CounterButton
