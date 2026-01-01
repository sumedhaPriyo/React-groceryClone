import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateQuantity } from '../../../../redux/Slices/CartSlice';

const ProductCard = ({ item, handleAddTocart, handleProductView }) => {

const dispatch = useDispatch()
const cartItems = useSelector((state) => state.cart?.cart || []);

const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
const isInCart = !!cartItem;
const quantity = cartItem?.quantity || 0;

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i)
                stars.push(<FaStar key={i} className='text-yellow-400' />);
            else if (rating >= i - 0.5)
                stars.push(
                    <FaStarHalfAlt key={i} className='text-yellow-400' />
                );
            else stars.push(<FaRegStar key={i} className='text-yellow-400' />);
        }
        return stars;
    };

    return (
        <div className='group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-md cursor-pointer mx-auto'>
            <div className='relative w-full h-64 overflow-hidden rounded-t-2xl pt-2 '>
                <img
                    src={item?.images[0]}
                    alt={item?.title}
                    className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500'
                />

                <div className='absolute top-3 left-3 bg-linear-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-xl text-sm font-semibold'>
                    ${item?.price} - {item?.discountPercentage}%
                </div>
            </div>

            <div className='p-5 flex flex-col gap-2'>
                <h3 className='text-lg font-semibold text-gray-800 truncate'>
                    {item?.title}
                </h3>

                <div className='flex items-center gap-1'>
                    {renderStars(item?.rating)}
                    <span className='text-gray-500 text-sm ml-2'>
                        ({item?.rating})
                    </span>
                </div>

                <p className='text-gray-600 text-sm line-clamp-2 '>
                    {item?.description}
                </p>
                <div className='flex flex-col sm:flex-row gap-2 mt-3'>
                    {isInCart ? (
                        <button
                            disabled
                            className='bg-green-100 text-green-700 font-semibold py-2 px-4 rounded-lg cursor-not-allowed border border-green-300 text-sm sm:text-base'
                        >
                            Added to Cart
                        </button>
                    ) : (
                        <button
                            onClick={() => handleAddTocart(item)}
                            className='bg-linear-to-r from-[#2d2a6e] to-blue-200 text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transform transition duration-300 border border-orange-200 text-sm sm:text-base'
                        >
                            Add to Cart
                        </button>
                    )}
                    <button
                        onClick={() => handleProductView(item)}
                        className='bg-linear-to-r from-[#2d2a6e] to-blue-200 text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transform transition duration-300 border border-orange-200 text-sm sm:text-base'
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
