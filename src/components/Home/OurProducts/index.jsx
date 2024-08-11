import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ProductCard from 'components/Common/ProductCard'
import { fetchProducts } from 'redux/features/products/productsSlice';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';


const OurProducts = () => {


const [page,setPage] = useState(1);
const [showMoreTake,setshowMoreTake] = useState(8);


  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products?.productsData);
  console.log(productsData?.[0]?.totalProductCount)
  console.log(productsData?.[0]?.products?.length);
  useEffect(() => {
			dispatch(fetchProducts({page:1,showMoreTake:showMoreTake}));
	}, [page, showMoreTake]);

 const handleShowMore = () =>
 {
    // setPage(page+1) 
    setshowMoreTake(showMoreTake+4)
    // dispatch(fetchProducts({page:page,showMoreTake:showMoreTake}));
 }

 
 const handleShowLess = () =>
 {
    setPage(page-1) 
    setshowMoreTake(showMoreTake-4)
    // dispatch(fetchProducts({page:page,showMoreTake:showMoreTake}));
 }


  return (
    <div>
      <h3 className='w-full text-center font-bold text-2xl  md:text-3xl lg:text-4xl pt-12'>Our Products</h3>
      <div className='flex flex-wrap justify-center gap-8  mt-8'>
        {
          productsData[0]?.products?.map((product) =>
          (
              <ProductCard key={product?.id} product={product} />
          ))}
      </div>
      <div className='flex items-center py-5'>
        {
          productsData?.[0]?.products?.length < productsData?.[0]?.totalProductCount &&  <button className='px-14 py-2 lg:px-20 lg:py-3 border-2 border-primary mx-auto hover:bg-primary hover:text-white'
          onClick={handleShowMore}
          >
            Show More
          </button>
       
        }
        {
          productsData?.[0]?.products?.length >=12 && <button className='px-14 py-2 lg:px-20 lg:py-3 border-2 border-primary mx-auto hover:bg-primary hover:text-white'
          onClick={handleShowLess}
          >
            Show Less
          </button>
        }
        
      </div>
    </div>
  )
}

export default OurProducts

