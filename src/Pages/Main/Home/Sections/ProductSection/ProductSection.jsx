import React from 'react';
import ProductCard from '../../../../../components/Productcard/Productcard';


const ProductSection = () => {
    return (
        <div className='py-8 sm:py-10 md:py-12 lg:py-14'>
            <h5 className='text-[#96ae00] font-Schoolbell text-base sm:text-lg md:text-xl text-center mb-2'>
                ~ Special Products ~
            </h5>
            <h5 className='text-[#2d2a6e] font-quicksand text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-3 sm:mb-4'>
                Weekly Food Offers
            </h5>
            <p className='text-[#4d5574] font-jost text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto mb-6 sm:mb-8'>
                The liber tempor cum soluta nobis eleifend option congue doming
                quod mazim.
            </p>
            <ProductCard />
        </div>
    );
};

export default ProductSection;
