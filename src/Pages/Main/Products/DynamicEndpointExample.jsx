import React, { useState, useEffect } from 'react';
import { productService } from '../../../ApiServices/ProductService';

const DynamicEndpointExample = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Example parameters for dynamic endpoint
    const [params, setParams] = useState({
        limit: 10,
        skip: 0,
        select: 'title,price,thumbnail',
        q: ''
    });

    const fetchProductsWithParams = async () => {
        try {
            setLoading(true);
            setError(null);
            
            // Fetch products with dynamic parameters
            const data = await productService.getAllWithParams(params);
            setProducts(data.products || data);
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductsWithParams();
    }, [params]);

    const updateParams = (newParams) => {
        setParams(prev => ({
            ...prev,
            ...newParams
        }));
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dynamic Endpoint Example</h1>
            
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h2 className="text-lg font-semibold mb-3">Current Endpoint</h2>
                <code className="bg-gray-100 p-2 rounded block overflow-x-auto">
                    /products?limit={params.limit}&skip={params.skip}&select={params.select}{params.q && `&q=${params.q}`}
                </code>
            </div>

            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h2 className="text-lg font-semibold mb-3">Control Parameters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Limit</label>
                        <input
                            type="number"
                            value={params.limit}
                            onChange={(e) => updateParams({ limit: parseInt(e.target.value) || 10 })}
                            className="w-full border rounded px-3 py-2"
                            min="1"
                            max="100"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-1">Skip</label>
                        <input
                            type="number"
                            value={params.skip}
                            onChange={(e) => updateParams({ skip: parseInt(e.target.value) || 0 })}
                            className="w-full border rounded px-3 py-2"
                            min="0"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-1">Select Fields</label>
                        <input
                            type="text"
                            value={params.select}
                            onChange={(e) => updateParams({ select: e.target.value })}
                            placeholder="e.g., title,price,thumbnail"
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-1">Search Query</label>
                        <input
                            type="text"
                            value={params.q}
                            onChange={(e) => updateParams({ q: e.target.value })}
                            placeholder="Search..."
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                </div>
                
                <div className="mt-4">
                    <button
                        onClick={fetchProductsWithParams}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                    >
                        Fetch Products
                    </button>
                    
                    <button
                        onClick={() => setParams({
                            limit: 10,
                            skip: 0,
                            select: 'title,price,thumbnail',
                            q: ''
                        })}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Reset to Defaults
                    </button>
                </div>
            </div>

            {loading && (
                <div className="text-center py-8">
                    <p className="text-gray-500">Loading products...</p>
                </div>
            )}

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    Error: {error}
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products?.map((product, index) => (
                    <div key={product.id || index} className="border rounded-lg p-4">
                        <img 
                            src={product.thumbnail} 
                            alt={product.title} 
                            className="w-full h-32 object-contain mb-2"
                        />
                        <h3 className="font-semibold">{product.title}</h3>
                        <p className="text-blue-600 font-bold">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DynamicEndpointExample;