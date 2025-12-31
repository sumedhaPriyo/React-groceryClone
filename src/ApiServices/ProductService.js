import { api } from '../ApiManager/ApiRequests';
import { ENDPOINTS } from '../ApiManager/endpoint';

export const productService = {
    getAll: (config) => api.get(ENDPOINTS.PRODUCTS.ALL, config),

    getAllWithParams: (params) => api.get(ENDPOINTS.PRODUCTS.WITH_PARAMS(params)),

    getById: (id, config) => api.get(ENDPOINTS.PRODUCTS.UPDATE(id), config),


    create: (data, config) => api.post(ENDPOINTS.PRODUCTS.CREATE, data, config),

    update: (id, data, config) =>
        api.put(ENDPOINTS.PRODUCTS.UPDATE(id), data, config),

    remove: (id, config) => api.delete(ENDPOINTS.PRODUCTS.DELETE(id), config),
};
