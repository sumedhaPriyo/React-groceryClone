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
import Signup from '../Pages/Auth/SignUp/Signup';
import MainLayout from '../components/MainLayout/MainLayout';
import ProductDetails from '../Pages/Main/Products/ProductDetails';


const Mainroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/shop' element={<Shops />} />
                <Route path='/product' element={<Products />} />
                <Route path='/blog' element={<Blogs />} />
                <Route path='/wishlist' element={<Wishlists />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/product/:ProductId' element={<ProductDetails />}/>
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    );
};

export default Mainroutes;
