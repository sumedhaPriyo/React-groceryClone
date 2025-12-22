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
        <header className='h-20 border-b border-[#e6eaf0]'>
            <nav className='h-full flex items-center justify-between'>
                <a href='#' className='text-2xl font-bold'>
                    <img src={Logo} />
                </a>

                <ul className='hidden md:flex gap-8'>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href}
                                className='font-semibold tracking-wider text-zinc-700 hover:text-orange-500'
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center gap-4 '>
                    <button className=' bg-[#f5f2ff] text-[#2d2a6e] w-10 h-10 rounded-full flex items-center justify-center'>
                        <CiSearch className='text-xl' />
                    </button>
                    <button className=' bg-[#fff3ec] text-[#2d2a6e] w-10 h-10 rounded-full flex items-center justify-center'>
                        <CiUser className='text-xl' />
                    </button>{' '}
                    <button className=' bg-[#ecfbff;] text-[#2d2a6e] w-10 h-10 rounded-full flex items-center justify-center'>
                        <CiHeart className='text-xl' />
                    </button>{' '}
                    <button className=' bg-[#feefd0] text-[#2d2a6e] w-10 h-10 rounded-full flex items-center justify-center'>
                        <IoBagOutline className='text-xl' />
                    </button>
                    <button
                        onClick={() => setOpen(!open)}
                        className='md:hidden text-2xl'
                    >
                        {open ? <RiCloseLine /> : <RiMenu3Line />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className='md:hidden bg-white shadow-md'>
                    <div className='flex border border-orange-500 rounded-full px-2 h-9 items-center justify-between'>
                        <input
                            placeholder='Search...'
                            className='focus:outline-none text-sm'
                            type='text'
                        />
                        <button className='bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center'>
                            <IoMdSearch />
                        </button>
                    </div>
                    <ul className='flex flex-col items-center gap-6 py-6'>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    className='font-semibold text-zinc-700 hover:text-orange-500'
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
