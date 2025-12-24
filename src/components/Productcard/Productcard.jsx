import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Fruits from '../../assets/images/product-img.webp';
import FruitsHover from '../../assets/images/product-img-16.webp';
import StarRating from '../../utils/StarRating';
import Button from '../Button/Button';

const ProductCard = () => {
    const cardRefs = useRef([]);
    const [isHovered, setIsHovered] = useState(false);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,

        responsive: [
            {
                breakpoint: 1536, // 2xl
                settings: { slidesToShow: 5, slidesToScroll: 2 },
            },
            {
                breakpoint: 1280, // xl
                settings: { slidesToShow: 4, slidesToScroll: 2 },
            },
            {
                breakpoint: 1024, // lg
                settings: { slidesToShow: 3, slidesToScroll: 2 },
            },
            {
                breakpoint: 768, // md
                settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
                breakpoint: 640, // sm
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 480, // xs
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    return (
        <div className='w-full mx-auto mt-6 sm:mt-7'>
            <div
                className='relative'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Slider {...settings}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div key={item} className='sm:px-3 mb-5'>
                            <div className='bg-white shadow-lg hover:shadow-2xl rounded-2xl min-h-[420px] sm:min-h-[400px] md:min-h-[420px] p-6 sm:p-5 group transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100'>
                                {/* Discount Badge */}
                                <div className='absolute top-6 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-10'>
                                    -5%
                                </div>

                           
                                <div className='relative flex justify-center mb-4 bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:to-yellow-50 transition-all duration-500 overflow-hidden'>
                                    <img
                                        src={Fruits}
                                        className='w-48 h-48 sm:w-40 sm:h-40 md:w-45 md:h-45 transition-all duration-500 group-hover:opacity-0 group-hover:scale-110 object-contain'
                                        alt='Product'
                                    />
                                    <img
                                        src={FruitsHover}
                                        className='w-48 h-48 sm:w-40 sm:h-40 md:w-45 md:h-45 absolute top-4 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 object-contain'
                                        alt='Product Hover'
                                    />
                                    
                                    {/* Quick Action Icons */}
                                    <div className='absolute top-2 left-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                        <button className='bg-white w-9 h-9 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center'>
                                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                                            </svg>
                                        </button>
                                        <button className='bg-white w-9 h-9 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center'>
                                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                           
                                <div className='flex flex-wrap gap-1 mb-2'>
                                    <span className='text-[#96ae00] font-jost text-xs bg-green-50 px-2 py-0.5 rounded-full'>
                                        Fresh Bakery
                                    </span>
                                    <span className='text-orange-500 font-jost text-xs bg-orange-50 px-2 py-0.5 rounded-full'>
                                        Organic
                                    </span>
                                </div>

                                {/* Product Title */}
                                <h3 className='text-[#2d2a6e] font-jost text-sm sm:text-sm md:text-md mb-2 leading-tight group-hover:text-orange-500 transition-colors duration-300'>
                                    Banana, Beautiful Skin, Good For Health 1Kg
                                </h3>

                                {/* Rating Section */}
                                <div className='mb-3 flex items-center gap-2'>
                                    <StarRating />
                                    <span className='text-xs text-gray-500'>(4.5)</span>
                                </div>

                                {/* Price Section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <span className='text-red-500 font-bold text-xl sm:text-lg block'>
                                            $19.00
                                        </span>
                                        <span className='text-gray-400 line-through text-sm'>$20.00</span>
                                    </div>
                                    <div className='text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded'>
                                        In Stock
                                    </div>
                                </div>

                                {/* Hover Details */}
                                <div className='overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-500 ease-in-out'>
                                    <div className='border-t border-gray-100 pt-3 mb-3'>
                                        <div className='grid grid-cols-2 gap-2 text-xs mb-3'>
                                            <div className='flex items-center gap-1'>
                                                <span className='text-gray-400'>Category:</span>
                                                <span className='text-gray-600 font-medium'>Organic</span>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <span className='text-gray-400'>MFG:</span>
                                                <span className='text-gray-600 font-medium'>2024</span>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <span className='text-gray-400'>Life:</span>
                                                <span className='text-gray-600 font-medium'>30 Days</span>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <span className='text-gray-400'>Weight:</span>
                                                <span className='text-gray-600 font-medium'>1 Kg</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='flex items-center gap-2'>
                                        <Button Btntext='Add to cart' />
                                        <button className='bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 w-11 h-10 sm:h-11 rounded-full transition-all duration-300 flex items-center justify-center shadow-sm'>
                                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductCard;
