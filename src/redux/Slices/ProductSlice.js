import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productService } from '../../ApiServices/ProductService';

export const FetchProducts = createAsyncThunk('product/fetchProducts', async (paginationParams) => {
    const params = {
        limit: paginationParams.limit || 10,
        skip: paginationParams.skip || 0,
    };
    const response = await productService.getAllWithParams(params);
    return response.data || response;
});

const initialState = {
    items: [],
    status: 'idle',
    error: null,
    pagination: {
        limit: 10,
        total: 0,
        page: 1,
        totalPages: 0,
        skip: 0,
    },
};

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.pagination.page = action.payload;
            state.pagination.skip = (action.payload - 1) * state.pagination.limit;
        },
        setLimit: (state, action) => {
            state.pagination.limit = action.payload;
            state.pagination.skip = (state.pagination.page - 1) * action.payload;
        },
        nextPage: (state) => {
            if (state.pagination.page < state.pagination.totalPages) {
                state.pagination.page += 1;
                state.pagination.skip = (state.pagination.page - 1) * state.pagination.limit;
            }
        },
        prevPage: (state) => {
            if (state.pagination.page > 1) {
                state.pagination.page -= 1;
                state.pagination.skip = (state.pagination.page - 1) * state.pagination.limit;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(FetchProducts.pending, (state, action) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(FetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload 
            state.error = null;
            const total = action.payload.total || action.payload.length || 0;
            state.pagination.total = total;
            state.pagination.totalPages = Math.ceil(total / state.pagination.limit);
        });
        builder.addCase(FetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload || 'something went wrong ';
        });
    },
});

export default ProductSlice.reducer;
export const { setPage, setLimit, nextPage, prevPage } = ProductSlice.actions;
