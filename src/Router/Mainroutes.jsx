import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Main/Home/Home';
import AboutUs from '../Pages/Main/AboutUs/AboutUs';
import Shops from '../Pages/Main/Shops/Shops';
import Products from '../Pages/Main/Products/Products';
import Blogs from '../Pages/Main/Blogs/Blog';
import Wishlists from '../Pages/Main/Wishlists/Wishlists';
import Cart from '../Pages/Main/Cart/Cart';
import ContactUs from '../Pages/Main/ContactUs/ContactUs';
import Login from '../Pages/Auth/Login/Login';

const Mainroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/shop' element={<Shops />} />
            <Route path='/product' element={<Products />} />
            <Route path='/blog' element={<Blogs />} />
            <Route path='/wishlist' element={<Wishlists />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    );
};

export default Mainroutes;
