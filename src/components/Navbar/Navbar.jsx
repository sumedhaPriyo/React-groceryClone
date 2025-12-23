import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { RiShoppingBag4Fill, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { IoBagOutline } from 'react-icons/io5';
import { CiUser, CiHeart, CiSearch } from 'react-icons/ci';
import { IoMdSearch } from 'react-icons/io';
import navLinks from '../../data/Navlinks';
import Logo from '../../assets/images/logo.png';
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className='h-16 sm:h-18 md:h-20 border-b border-[#e6eaf0]'>
            <nav className='h-full flex items-center justify-between'>
                <a href='#' className='text-xl sm:text-2xl font-bold'>
                    <img src={Logo} alt='Logo' className='h-8 sm:h-10 md:h-12 w-auto' />
                </a>

                <ul className='hidden md:flex gap-4 lg:gap-6 xl:gap-8'>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href}
                                className='font-semibold tracking-wider text-sm lg:text-base text-zinc-700 hover:text-orange-500 transition-colors'
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center gap-2 sm:gap-3 md:gap-4'>
                    <button className='bg-[#f5f2ff] text-[#2d2a6e] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-[#e6e0ff] transition-colors'>
                        <CiSearch className='text-lg sm:text-xl' />
                    </button>
                    <button className='bg-[#fff3ec] text-[#2d2a6e] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-[#ffe4d1] transition-colors'>
                        <CiUser className='text-lg sm:text-xl' />
                    </button>
                    <button className='bg-[#ecfbff] text-[#2d2a6e] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-[#d1f4ff] transition-colors'>
                        <CiHeart className='text-lg sm:text-xl' />
                    </button>
                    <button className='bg-[#feefd0] text-[#2d2a6e] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-[#fee5b5] transition-colors'>
                        <IoBagOutline className='text-lg sm:text-xl' />
                    </button>
                    <button
                        onClick={() => setOpen(!open)}
                        className='md:hidden text-xl sm:text-2xl text-[#2d2a6e]'
                    >
                        {open ? <RiCloseLine /> : <RiMenu3Line />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className='md:hidden bg-white shadow-md p-4'>
                    <div className='flex border border-orange-500 rounded-full px-3 h-10 items-center justify-between mb-4'>
                        <input
                            placeholder='Search...'
                            className='focus:outline-none text-sm w-full'
                            type='text'
                        />
                        <button className='bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors'>
                            <IoMdSearch />
                        </button>
                    </div>
                    <ul className='flex flex-col items-center gap-4 py-4'>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    className='font-semibold text-base text-zinc-700 hover:text-orange-500 transition-colors'
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
