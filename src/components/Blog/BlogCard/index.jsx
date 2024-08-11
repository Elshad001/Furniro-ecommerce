import React from 'react'
import adminIcon from 'assets/icons/adminIcon.svg';
import calendarIcon from 'assets/icons/calendarIcon.svg';
import ci_tag from 'assets/icons/ci_tag.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchBlogs } from 'redux/features/blogs/blogsSlice';

const BlogCard = ({ blog }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleReadMore = (id) => {
        dispatch(fetchBlogs({page:1,showMoreTake:73}));
        console.log(id);
        navigate(`${id}`)  
    };


console.log(blog.id)

    return (
        <div key={blog.id} className='mt-8 lg:mt-24'>
            <LazyLoadImage src={blog.imageUrls[0]} alt='' className='md:w-96 h-60 lg:w-[817px] lg:h-[500px]' />
            <div className='flex gap-5  lg:gap-9 items-center mt-4'>
                <div className='flex gap-2 items-center '>
                    <img src={adminIcon} alt='' />
                    <p className='text-gray6 text-[10px] lg:text-base'>{blog?.adminInfo?.roleName}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={calendarIcon} alt='' />
                    <p className='text-gray6 text-[10px] lg:text-base'>{blog?.createdDate}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={ci_tag} alt='' />
                    <p className='text-gray6 text-[10px] lg:text-base'>{blog?.category?.categoryName}</p>
                </div>
            </div>
            <div className='mt-4'>
                <h2 className='text-2xl font-medium'>{blog?.title}</h2>
                <p className='w-96 text-gray6 mt-3 truncate'>
                    {blog.content}
                </p>
            </div>

            <div className='mt-8' onClick={() => handleReadMore(blog?.id)} >Read More</div>

            <hr className='w-[77px] border-[1px] border-[#000]' />
        </div>
    )
}

export default BlogCard
