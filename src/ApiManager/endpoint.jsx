export const ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
    },

    USERS: {
        ALL: '/users',
        BY_ID: (id) => `/users/${id}`,
    },

    PRODUCTS: {
        ALL: (params = {}) => {
            const query = new URLSearchParams(params).toString();
            return query ? `/products?${query}` : '/products';
        },
        WITH_PARAMS: (params) => {
            let url = "/products";
            const queryParams = [];
            
            if (params.limit) queryParams.push(`limit=${params.limit}`);
            if (params.skip) queryParams.push(`skip=${params.skip}`);
            if (params.select) queryParams.push(`select=${params.select}`);
            if (params.category) queryParams.push(`category=${params.category}`);
            if (params.q) queryParams.push(`q=${params.q}`);
            
            if (queryParams.length > 0) {
                url += `?${queryParams.join("&")}`;
            }
            
            return url;
        },

        UPDATE: (id) => `/products/${id}`,
    },
};
