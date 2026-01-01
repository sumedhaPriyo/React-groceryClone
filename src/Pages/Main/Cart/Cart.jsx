import React, { useEffect, useState } from 'react';
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag, FiArrowLeft } from 'react-icons/fi';
import { cartService } from '../../../ApiServices/cartService';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, clearCart } from '../../../redux/Slices/CartSlice';


const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.cart || []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = subtotal > 50 ? 0 : 4.99;
    return subtotal + shipping;
  };

  const shipping = calculateSubtotal() > 50 ? 0 : 4.99;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <FiShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-[#96ae00] text-white rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300">
              <FiArrowLeft className="mr-2" />
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }



;
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Cart Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Cart Items</h2>
                  <button
                    onClick={handleClearCart}
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={item.images[0]}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-base font-semibold text-gray-900 mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                                 {item.category}
                              
                              </p>

                            {/* Price */}
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-lg font-bold text-gray-900">
                                ${' '}{item.price}

                              </span>
                              <span className="text-sm text-gray-400 line-through">
                              </span>
                              <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                                {item.discountPercentage}% OFF
                              </span>
                            </div>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex flex-col items-end gap-3">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <FiMinus className="w-4 h-4" />
                              </button>
                              <span className="px-3 py-2 text-gray-900 font-medium min-w-[3rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <FiPlus className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Item Total */}
                            <div className="text-right">
                              <p className="text-sm text-gray-500">Item Total</p>
                              <p className="text-lg font-bold text-gray-900">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="mt-3 flex items-center text-sm text-red-600 hover:text-red-700 font-medium"
                        >
                          <FiTrash2 className="w-4 h-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm sticky top-8">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>

                {/* Summary Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span className="font-medium">${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <div className="text-sm text-green-600">
                      Add ${(50 - calculateSubtotal()).toFixed(2)} more for FREE shipping
                    </div>
                  )}
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-gray-900">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-lg font-bold">${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#96ae00] focus:border-transparent"
                    />
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                {/* <div className="space-y-3">
                  <Button Btntext="Proceed to Checkout" />
                  <button className="w-full py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    Continue Shopping
                  </button>
                </div> */}

                {/* Security Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Secure Checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% Authentic Products
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              Fast Delivery
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Easy Returns
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
