import React from 'react';
import BlogCard from '../../../../../components/Blogcard/BlogCard';

const BlogSection = () => {
    return (
        <div>
            <h5 className='text-[#96ae00] font-Schoolbell text-base sm:text-lg md:text-xl text-center mb-2 mt-5'>
                ~ Special Products ~
            </h5>
            <h5 className='text-[#2d2a6e] font-quicksand text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-3 sm:mb-4'>
                Weekly Food Offers
            </h5>
            <p className='text-[#4d5574] font-jost text-sm sm:text-base md:text-lg text-center px-4 sm:px-6 md:px-8 max-w-2xl mx-auto mb-6 sm:mb-8'>
                The liber tempor cum soluta nobis eleifend option congue doming quod mazim.
            </p>
            <BlogCard />
        </div>
    );
};

export default BlogSection;
