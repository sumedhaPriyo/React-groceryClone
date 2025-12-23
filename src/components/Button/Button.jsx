import React from 'react';

const Button = ({ Btntext }) => {
    return (
        <button className='w-32 h-10 sm:w-36 sm:h-11 md:w-40 md:h-12 lg:w-44 lg:h-12 bg-[#96ae00] text-white flex justify-center items-center rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors duration-300'>
            {Btntext}
        </button>
    );
};

export default Button;
