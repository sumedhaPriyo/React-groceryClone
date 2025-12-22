import React from 'react';
import Productcard from '../../../../components/Productcard/Productcard';

const ProductSection = () => {
    return (
        <div>
            <h5 className='text-[#96ae00] font-Schoolbell text-lg text-center mb-1 '>
                ~ Special Products ~
            </h5>
            <h5 className='text-[#2d2a6e] font-quicksand text-3xl text-center mb-1'>
                Weekly Food Offers
            </h5>
            <p className='text-[#4d5574] font-jost text-center '>
                The liber tempor cum soluta nobis eleifend option congue doming
                quod mazim.
            </p>
            <Productcard />
        </div>
    );
};

export default ProductSection;
