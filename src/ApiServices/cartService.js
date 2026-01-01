import { CgLayoutGrid } from 'react-icons/cg';
import { api } from '../ApiManager/ApiRequests';
import { ENDPOINTS } from '../ApiManager/endpoint';

export const cartService = {
    getAllCartItems: (config) => api.get(ENDPOINTS.CARTS.ALL(), config),

    addToCart: (userId, products, config) => {
        const data = {
            userId: userId,
            products: products.map(product => ({
                id: product.id,
                quantity: product.quantity || 1
            }))
        };
        return api.post(ENDPOINTS.CARTS.ADD_TO_CART(), data, config);
    },

    updateCartItem: (cartId, data, config) =>
        api.put(ENDPOINTS.CARTS.UPDATE(cartId), data, config),

    removeCartItem: (cartId, config) =>
        api.delete(ENDPOINTS.CARTS.REMOVE(cartId), config),

    clearCart: (userId, config) => {
        return api.delete(`/users/${userId}/cart`, config);
    },
};
