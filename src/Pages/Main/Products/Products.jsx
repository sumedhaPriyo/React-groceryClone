import React, { useEffect, useState } from 'react';
import { productService } from '../../../ApiServices/ProductService';
import ProductCard from './productsection/ProductCard';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import { api } from '../../../ApiManager/ApiRequests';
import { ENDPOINTS } from '../../../ApiManager/endpoint';

const Products = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [pagination, setPagination] = useState({
        limit: 10,
        total: 0,
        page: 1,
        totalPages: 0,
        skip: 0,
    });

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const skip = (pagination.page - 1) * pagination.limit;

            const data = await productService.getAllWithParams({
                limit: pagination.limit,
                total: pagination.total,
                skip: pagination.skip,
            });
            setProducts(data.products || data);
            if (data.total) {
                setPagination((prev) => ({
                    ...prev,
                    total: data.total,
                    totalPages: Math.ceil(data.total / pagination.limit),
                }));
            } else {
                const total = data.total || data.length;
                setPagination((prev) => ({
                    ...prev,
                    total: total,
                    totalPages: Math.ceil(total / pagination.limit),
                }));
            }
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    console.log(pagination, 'pagination state');

    useEffect(() => {
        fetchProducts();
    }, [pagination.skip]);

    const handleAddTocart = (item) => {
        console.log(item, 'perticular item');
    };

    const handleProductView = (item) => {
        console.log(item?.id, 'perticular item');
        navigate(`/product/${item?.id}`);
    };

    const handleNext = () => {
        if (pagination.page < pagination.totalPages) {
            setPagination((prev) => ({
                ...prev,
                limit: prev.limit,
                page: prev.page + 1,
                skip: prev.skip + 10,
            }));
        }
    };

    const handlePrev = () => {
        if (pagination.page > 1) {
            setPagination((prev) => ({
                ...prev,
                limit: prev.limit,
                page: prev.page - 1,
                skip: prev.skip - 10,
            }));
        }
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= pagination.totalPages) {
            setPagination((prev) => ({
                ...prev,
                page: page,
            }));
        }
    };
    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <p className='text-gray-500 text-lg'>Loading products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <p className='text-red-500 text-lg'>{error}</p>
            </div>
        );
    }

    return (
        <div className='px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-5'>
                {(Array.isArray(products)
                    ? products
                    : products?.products || []
                )?.map((item, index) => (
                    <ProductCard
                        key={index}
                        item={item}
                        handleAddTocart={handleAddTocart}
                        handleProductView={handleProductView}
                    />
                ))}
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
