import React from 'react';
import { PageHeading, Quality, BlogPagination, Categories, RecentPosts } from 'components';
import { motion } from 'framer-motion';

const BlogPage = () => {


    return (
        <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5 }}
        >
            <div className='w-full pt-[100px]'>
                <PageHeading activePage='Blog'/>
                <div className='w-full flex flex-col-reverse md:flex md:flex-row lg:flex lg:flex-row gap-4 lg:gap-8 px-12 lg:px-24'>
                        <BlogPagination />
                    <div className='mt-6'>
                        <Categories />
                        <RecentPosts />
                    </div>
                </div>
                <Quality />
            </div>
        </motion.div>
    )
}

export default BlogPage
