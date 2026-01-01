import React, { useEffect } from 'react';
import ProductCard from './productsection/ProductCard';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {
    FetchProducts,
    setPage,
    nextPage,
    prevPage,
} from '../../../redux/Slices/ProductSlice';
import { addToCart } from '../../../redux/Slices/CartSlice';

const Products = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {
        items: products,
        status,
        error,
        pagination,
    } = useSelector((state) => state.products);
    // console.log(products, status, error, pagination, 'productsData');

    const fetchProducts = () => {
        dispatch(
            FetchProducts({ limit: pagination.limit, skip: pagination.skip })
        );
    };

    useEffect(() => {
        fetchProducts();
    }, [pagination.skip, pagination.limit]);

    const handleAddTocart = (item) => {
        dispatch(addToCart(item));
    };

    const handleProductView = (item) => {
        console.log(item?.id, 'perticular item');
        navigate(`/product/${item?.id}`);
    };

    const handleNext = () => {
        dispatch(nextPage());
    };

    const handlePrev = () => {
        dispatch(prevPage());
    };

    const handlePageChange = (page) => {
        dispatch(setPage(page));
    };

    if (status === 'loading') {
        return (
            <div className='flex justify-center items-center h-screen'>
                <p className='text-gray-500 text-lg'>Loading products...</p>
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className='flex justify-center items-center h-screen'>
                <p className='text-red-500 text-lg'>{error}</p>
            </div>
        );
    }

    return (
        <div className='px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-5'>
                {products?.products?.map((item, index) => {
                    return (
                        <ProductCard
                            key={index}
                            item={item}
                            handleAddTocart={handleAddTocart}
                            handleProductView={handleProductView}
                        />
                    );
                })}
            </div>
            <Pagination
                currentPage={pagination.page}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
                hasNext={pagination.page < pagination.totalPages}
                hasPrev={pagination.page > 1}
                onPrev={handlePrev}
                onNext={handleNext}
            />
        </div>
    );
};

export default Products;
