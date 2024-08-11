import React from 'react'
import adminIcon from 'assets/icons/adminIcon.svg';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import calendarIcon from 'assets/icons/calendarIcon.svg';
import ci_tag from 'assets/icons/ci_tag.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SimplePageHeading from 'components/Common/SimplePageHeading';
import { useSelector } from 'react-redux';
import { fetchBlogs } from 'redux/features/blogs/blogsSlice';

const SingleBlog = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);
    const blogsData = useSelector((state) => state.blogs?.blogs);
    console.log(blogsData?.[0]?.blogs)
    const data=blogsData?.[0]?.blogs?.filter((blog)=>blog?.id===id)
    
    console.log(data)
    useEffect(() => {
        dispatch(fetchBlogs({page:1,showMoreTake:73}));
        }, []);

        
    return (
        <div>
            <SimplePageHeading contentName={data?.[0]?.header} pageName='Blog' />
            <div key={data?.[0]?.id} className='mt-8 lg:mt-24 px-24'>
                <LazyLoadImage src={data?.[0]?.imageUrls?.[0]} alt='' className='md:w-96 h-60 lg:w-[1000px] lg:h-[700px]' />
                <div className='flex gap-5  lg:gap-9 items-center mt-4'>
                    <div className='flex gap-2 items-center '>
                        <img src={adminIcon} alt='' />
                        <p className='text-gray6 text-[10px] lg:text-base'>{data?.[0]?.adminInfo?.roleName}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={calendarIcon} alt='' />
                        <p className='text-gray6 text-[10px] lg:text-base'>{data?.[0]?.createdDate}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={ci_tag} alt='' />
                        <p className='text-gray6 text-[10px] lg:text-base'>{data?.[0]?.category?.categoryName}</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <h2 className='text-2xl font-medium'>{data?.[0]?.title}</h2>
                    <p className='text-gray6 mt-3 pr-96'>
                        {data?.[0]?.content}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default SingleBlog