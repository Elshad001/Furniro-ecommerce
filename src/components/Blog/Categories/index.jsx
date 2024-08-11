import React from 'react'
import { useEffect } from 'react';
import { fetchBlogCategories } from 'redux/features/blogs/blogsSlice';
import { useDispatch,useSelector } from 'react-redux';

const Categories = () => {

    const dispatch = useDispatch();
    const blogCategories = useSelector((state) => state.blogs?.blogCategories);
   
  
    console.log(blogCategories)
    
    useEffect(() => {
              dispatch(fetchBlogCategories());
      }, []);

  return (
    <div className='w-full h-auto  lg:w-[393px] lg:h-[537px] pt-5 px-3 lg:px-10   mt-5 lg:mt-20'>
    <input className=' w-full lg:w-[311px] h-14 rounded border  text-gray6 ' />
    <div className='lg:pl-12'>
      <h2 className='text-2xl font-medium mt-11'>Categories</h2>
      {
        blogCategories?.map((category) => (

          <div key={category?.id} className='flex justify-between w-[250px] h-6 mt-8 text-gray6'>
            <p className='font-medium cursor-pointer'  >{category?.categoryName}</p>
            <p className=' cursor-pointer'>{category?.blogCount}</p>
          </div>
        ))
      }

    </div>
  </div>
  )
}

export default Categories
