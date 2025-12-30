import React from 'react';
import ProductCard from '../../../../../components/Productcard/Productcard';


const SpecialProjectSection = () => {
    return (
        <div className='py-8 sm:py-10 md:py-12 lg:py-14'>
            <h5 className='text-[#96ae00] font-Schoolbell text-base sm:text-lg md:text-xl text-center mb-2'>
                ~ Special Products ~
            </h5>
            <h5 className='text-[#2d2a6e] font-quicksand text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-4 sm:mb-6'>
                Weekly Food Offers
            </h5>
            <div className='flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-4 sm:mt-5 mb-6 sm:mb-8'>
                <a className='font-quicksand text-sm sm:text-base md:text-lg text-black hover:text-[#96ae00] transition-colors duration-300 cursor-pointer'>
                    All products
                </a>
                <a className='font-quicksand text-sm sm:text-base md:text-lg text-black hover:text-[#96ae00] transition-colors duration-300 cursor-pointer'>
                    Fruit Drink
                </a>
                <a className='font-quicksand text-sm sm:text-base md:text-lg text-black hover:text-[#96ae00] transition-colors duration-300 cursor-pointer'>
                    Fresh fruits
                </a>
                <a className='font-quicksand text-sm sm:text-base md:text-lg text-black hover:text-[#96ae00] transition-colors duration-300 cursor-pointer'>
                    Vegetables
                </a>
            </div>

            <ProductCard />
            <p className='text-[#4d5574] font-jost text-center my-6 sm:my-8 md:my-10 text-sm sm:text-base md:text-lg'>
                Discover thousands of other quality products.{' '}                                                                                                          
                <span className='font-quicksand text-[#96ae00] text-sm sm:text-base md:text-lg hover:underline cursor-pointer'>
                    Shop All Products
                </span>
            </p>
        </div>
    );
};

export default SpecialProjectSection;
