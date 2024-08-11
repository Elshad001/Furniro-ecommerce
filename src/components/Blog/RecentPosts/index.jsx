import React from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect } from 'react';
import { fetchRecentPosts } from 'redux/features/blogs/blogsSlice';
import { useDispatch,useSelector } from 'react-redux';

const RecentPosts = () => {


    const dispatch = useDispatch();
    const recentPosts = useSelector((state) => state.blogs?.recentPosts);
  
  
    console.log(recentPosts)
    
    
    useEffect(() => {
              dispatch(fetchRecentPosts());
      }, []);
  
    
   
    return (
        
        <div className='w-full lg:w-96 h-auto px-2 pl-20 mt-[800px] my-12'>
            <h2 className='text-6 font-medium'>Recent Posts</h2>
            {
               recentPosts?.map((post) =>
                (
                    <Link key={post?.id} to={`${post?.id}`}>
                     <div className='flex gap-3 items-center  h-20 my-12'>
                        <LazyLoadImage src={post?.imageUrls[0]} className='w-20 h-20 rounded-lg' alt='' />
                        <div className=''>
                            <p className='w-[119px] h-auto font-Poppins text-sm truncate'>{post?.header}</p>
                            <p className='text-xs text-gray6'>{post?.createdDate}</p>
                        </div>
                    </div>

            </Link>
                    
                ))
            }
        </div>
    )
}

export default RecentPosts
