import React, { useEffect, useState } from 'react';
import {
    FaStar,
    FaStarHalfAlt,
    FaRegStar,
    FaShoppingCart,
    FaHeart,
    FaShareAlt,
    FaArrowLeft,
    FaTruck,
    FaShieldAlt,
    FaTag,
    FaCheck,
} from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { productService } from '../../../ApiServices/ProductService';

const ProductDetails = () => {
    const { ProductId } = useParams();
    console.log(ProductId);

    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchproductDetails = async () => {
        try {
            setLoading(true);
            const getDatabyId = await productService.getById(ProductId);
            setData(getDatabyId);
        } catch (err) {
            setLoading(false);
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchproductDetails();
    }, []);
    console.log(data, 'Data');

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

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    return (
        <div className='px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24'>
            {loading ? (
                <div className='flex justify-center items-center h-screen w-screen'>
                    <p className='text-gray-500 text-lg'>Loading...</p>
                </div>
            ) : error ? (
                <div className='flex justify-center items-center h-screen w-screen'>
                    <p className='text-red-500 text-lg'>{error}</p>
                </div>
            ) : (
                <div className='max-w-7xl mx-auto p-4 sm:p-6 lg:p-8'>
                    <div className='flex flex-col lg:flex-row gap-8'>
                        <div className='lg:w-1/2'>
                            <div className='relative bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-4 shadow-lg'>
                                <div className='relative overflow-hidden rounded-xl aspect-square'>
                                    <img
                                        src={data?.images?.[0]}
                                        alt={data?.title}
                                        className='w-full h-full object-contain transition-all duration-500'
                                    />
                                    <button
                                        onClick={toggleWishlist}
                                        className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition-all ${
                                            isWishlisted
                                                ? 'bg-red-500 text-white'
                                                : 'bg-white text-gray-600 hover:bg-red-50'
                                        }`}
                                    >
                                        <FaHeart
                                            className={
                                                isWishlisted
                                                    ? 'fill-current'
                                                    : ''
                                            }
                                        />
                                    </button>
                                </div>

                                <div className='flex gap-3 mt-4 overflow-x-auto pb-2'>
                                    {data?.images?.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className={`flex-shrink-0 w-20 h-20 cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                                                selectedImage === idx
                                                    ? 'border-[#2d2a6e]'
                                                    : 'border-transparent'
                                            }`}
                                            onClick={() =>
                                                handleImageClick(idx)
                                            }
                                        >
                                            <img
                                                src={img}
                                                alt={`${data.title}-${idx}`}
                                                className='w-full h-full object-cover'
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='lg:w-1/2 space-y-6'>
                            <div>
                                <div className='flex mb-2 items-center  gap-4'>
                                    <span className='text-sm font-semibold text-[#2d2a6e]'>
                                        {data?.category}
                                    </span>
                                    <div className='flex items-center gap-1'>
                                        {renderStars(data?.rating)}
                                        <span className='text-gray-500 ml-2'>
                                            ({data?.rating}/5)
                                        </span>
                                    </div>
                                </div>

                                <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
                                    {data?.title}
                                </h1>

                                <div className='flex datas-center gap-4 mb-4'>
                                    <div className='flex datas-center gap-2 mt-5'>
                                        <span className='text-3xl font-bold text-[#2d2a6e]'>
                                            ${data?.price}
                                        </span>
                                        {data?.discountPercentage && (
                                            <span className='text-lg text-red-500 font-semibold'>
                                                {data.discountPercentage}% OFF
                                            </span>
                                        )}
                                    </div>
                                    {data?.originalPrice && (
                                        <span className='text-lg text-gray-500 line-through'>
                                            ${data.originalPrice}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className='prose max-w-none'>
                                <p className='text-gray-600 text-base leading-relaxed mb-6'>
                                    {data?.description}
                                </p>
                            </div>

                            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6'>
                                <div className='flex datas-center gap-2 p-3 bg-green-50 rounded-lg'>
                                    <FaTruck className='text-green-600' />
                                    <span className='text-sm'>
                                        Free Delivery
                                    </span>
                                </div>
                                <div className='flex datas-center gap-2 p-3 bg-blue-50 rounded-lg'>
                                    <FaShieldAlt className='text-blue-600' />
                                    <span className='text-sm'>Secure</span>
                                </div>
                                <div className='flex datas-center gap-2 p-3 bg-purple-50 rounded-lg'>
                                    <FaTag className='text-purple-600' />
                                    <span className='text-sm'>Best Price</span>
                                </div>
                            </div>

                            <div className='mb-6 '>
                                <div className='flex datas-center gap-3 items-center'>
                                    <span className='font-semibold text-gray-700'>
                                        Quantity:
                                    </span>
                                    <div className='flex datas-center border-2 border-gray-300 rounded-lg overflow-hidden'>
                                        <button
                                            onClick={() =>
                                                setQuantity(
                                                    Math.max(quantity - 1, 1)
                                                )
                                            }
                                            className='px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors'
                                        >
                                            -
                                        </button>
                                        <span className='px-6 py-2 font-semibold'>
                                            {quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                setQuantity(quantity + 1)
                                            }
                                            className='px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors'
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col sm:flex-row gap-4'>
                                <button
                                    onClick={() =>
                                        handleAddTocart({ ...data, quantity })
                                    }
                                    className='flex items-center justify-center gap-2 bg-linear-to-r from-[#2d2a6e] to-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-[#3d3a8e] hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg'
                                >
                                    <FaShoppingCart />
                                    Add to Cart
                                </button>
                                <button className='flex items-center justify-center gap-2 border-2 border-[#2d2a6e] text-[#2d2a6e] font-semibold py-2 px-6 rounded-lg hover:bg-[#2d2a6e] hover:text-white transition-all duration-300'>
                                    <FaShareAlt />
                                    Share
                                </button>
                            </div>

                            <div className='mt-6'>
                                <button
                                    onClick={() => window.history.back()}
                                    className='flex items-center gap-2 text-gray-600 hover:text-[#2d2a6e] transition-colors'
                                >
                                    <FaArrowLeft />
                                    Back to Products
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className='mt-12 bg-white rounded-2xl p-6 shadow-lg'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                            Product Details
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <h3 className='font-semibold text-gray-700 mb-2'>
                                    Features
                                </h3>
                                <ul className='space-y-2'>
                                    <li className='flex datas-center gap-2'>
                                        <FaCheck className='text-green-500' />
                                        <span>High Quality Ingredients</span>
                                    </li>
                                    <li className='flex datas-center gap-2'>
                                        <FaCheck className='text-green-500' />
                                        <span>Fresh from the source</span>
                                    </li>
                                    <li className='flex datas-center gap-2'>
                                        <FaCheck className='text-green-500' />
                                        <span>Organic Certified</span>
                                    </li>
                                    <li className='flex datas-center gap-2'>
                                        <FaCheck className='text-green-500' />
                                        <span>Eco-friendly Packaging</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='font-semibold text-gray-700 mb-2'>
                                    Specifications
                                </h3>
                                <div className='space-y-2'>
                                    <div className='flex justify-between border-b pb-2'>
                                        <span className='text-gray-600'>
                                            Weight
                                        </span>
                                        <span className='font-medium'>
                                            {data?.weight || '500g'}
                                        </span>
                                    </div>
                                    <div className='flex justify-between border-b pb-2'>
                                        <span className='text-gray-600'>
                                            Brand
                                        </span>
                                        <span className='font-medium'>
                                            {data?.brand || 'Generic'}
                                        </span>
                                    </div>
                                    <div className='flex justify-between border-b pb-2'>
                                        <span className='text-gray-600'>
                                            Expiry Date
                                        </span>
                                        <span className='font-medium'>
                                            {data?.expiry || '6 months'}
                                        </span>
                                    </div>
                                    <div className='flex justify-between border-b pb-2'>
                                        <span className='text-gray-600'>
                                            Availability
                                        </span>
                                        <span className='font-medium text-green-600'>
                                            In Stock
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
