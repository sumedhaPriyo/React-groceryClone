import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    totalItems: 0,
    totalAmount: 0,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.cart.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            CartSlice.caseReducers.calculateTotals(state);
        },
        
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.cart = state.cart.filter(item => item.id !== id);
            CartSlice.caseReducers.calculateTotals(state);
        },
        
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find(item => item.id === id);
            
            if (item) {
                if (quantity <= 0) {
                    state.cart = state.cart.filter(item => item.id !== id);
                } else {
                    item.quantity = quantity;
                }
                CartSlice.caseReducers.calculateTotals(state);
            }
        },
        
        clearCart: (state) => {
            state.cart = [];
            state.totalItems = 0;
            state.totalAmount = 0;
        },
        
        calculateTotals: (state) => {
            state.totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        },
        
        loadCartFromStorage: (state, action) => {
            const savedCart = action.payload;
            if (savedCart) {
                state.cart = savedCart.cart || [];
                state.totalItems = savedCart.totalItems || 0;
                state.totalAmount = savedCart.totalAmount || 0;
            }
        }
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, calculateTotals, loadCartFromStorage } = CartSlice.actions;

export default CartSlice.reducer;
