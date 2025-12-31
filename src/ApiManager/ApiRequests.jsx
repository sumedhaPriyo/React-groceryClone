import axiosClient from './axiosInstance';


export const api = {
  get: (url, config = {}) => axiosClient.get(url, config),

  post: (url, data, config = {}) =>
    axiosClient.post(url, data, config),

  put: (url, data, config = {}) =>
    axiosClient.put(url, data, config),

  patch: (url, data, config = {}) =>
    axiosClient.patch(url, data, config),

  delete: (url, config = {}) =>
    axiosClient.delete(url, config),
};
