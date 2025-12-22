import React from 'react';

const Button = ({ Btntext }) => {
    return (
        <button className='w-40 h-12 bg-[#96ae00] text-white flex justify-center items-center rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300'>
            {Btntext}
        </button>
    );
};

export default Button;
