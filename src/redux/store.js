import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from './Slices/CounterSlice';
import cartReducer from './Slices/CartSlice';
import ProductReducer from './Slices/ProductSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: persistedCartReducer,
        products: ProductReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

export const persistor = persistStore(store);

export default store;
