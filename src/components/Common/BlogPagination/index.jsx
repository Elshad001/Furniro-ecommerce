import React, { useState ,useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector,useDispatch } from 'react-redux';
import { BlogCard} from 'components';
import { fetchBlogs } from 'redux/features/blogs/blogsSlice';

const BlogPagination = () => {



    const dispatch = useDispatch();
    const blogsData = useSelector((state) => state.blogs?.blogs);
   
    console.log(blogsData[0])


    const [currentPage, setCurrentPage] = useState(2);
    const perPage = 3;

    useEffect(() => {
    dispatch(fetchBlogs({page:1,showMoreTake:73}));
    }, []);


    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const pageCount = Math.ceil(blogsData[0]?.totalBlogCount/ perPage);


    const displayedBlogs = blogsData[0]?.blogs.slice(
        currentPage * perPage,
        (currentPage + 1) * perPage
    );
        console.log(blogsData)
    return (
        <div className=''>
            <div className='flex flex-wrap gap-8 h-auto mt-8'>
                {displayedBlogs?.map((blog) => (
                    <BlogCard key={blog?.id} blog={blog} />
                ))}
            </div>
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={'flex items-center justify-center w-full h-[90px] my-8'}
                pageLinkClassName={'mx-2 px-6 py-4 rounded bg-[#F9F1E7] text-xl hover:bg-[#B88E2E] hover:text-white'}
                activeLinkClassName={'bg-primary text-white'}
                previousClassName={currentPage === 0 ? 'hidden' : 'mx-2 px-7 py-4  bg-[#F9F1E7] text-xl font-light rounded hover:bg-[#B88E2E] hover:text-white'}
                previousLinkClassName={''}
                nextClassName={currentPage === pageCount - 1 ? 'hidden' : 'mx-2 px-7 py-4  bg-[#F9F1E7] text-lg font-light rounded hover:bg-[#B88E2E] hover:text-white'}
                nextLinkClassName={'hover:text-white'}
            />
        </div>
    );
};

export default BlogPagination;