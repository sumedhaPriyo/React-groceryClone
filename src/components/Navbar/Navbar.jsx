import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { IoBagOutline } from 'react-icons/io5';
import { CiUser, CiHeart, CiSearch } from 'react-icons/ci';
import { IoMdSearch } from 'react-icons/io';
import navLinks from '../../data/Navlinks';
import Logo from '../../assets/images/logo.png';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(null);
    const [mobileMegaOpen, setMobileMegaOpen] = useState(null);
    const [activeLink, setActiveLink] = useState(1);

    const closeTimeout = useRef(null);
    const navigate = useNavigate()

    const cartitem = useSelector((state) => state.cart?.cart)
//  console.log(cartitem?.length,"Navbar")

    /* ===== DESKTOP HOVER HANDLERS ===== */
    const handleMouseEnter = (id) => {
        clearTimeout(closeTimeout.current);
        setMegaMenuOpen(id);
    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            setMegaMenuOpen(null);
        }, 200);
    };

    /* Close mobile accordion when sidebar closes */
    useEffect(() => {
        if (!open) setMobileMegaOpen(null);
    }, [open]);


    const handlenavigate = (data) => {
        navigate(data)
    }

    return (
        <header className='h-16 md:h-20 border-b border-[#e6eaf0] bg-white sticky top-0 z-[999]'>
            <div className='max-w-[1800px] mx-auto px-4 md:px-10 h-full'>
                <nav className='h-full flex items-center justify-between'>
                    {/* LOGO */}
                    <img src={Logo} alt='Logo' className='h-8 md:h-12' />

                    {/* ================= DESKTOP NAV ================= */}
                    <ul className='hidden lg:flex gap-8'>
                        {navLinks.map((link) => (
                            <li key={link.id} className='relative'>
                                <div
                                    onMouseEnter={() =>
                                        link.megaMenu &&
                                        handleMouseEnter(link.id)
                                    }
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link
                                        to={link.href}
                                        onClick={() => {
                                            setActiveLink(link.id);
                                            setMegaMenuOpen(null);
                                        }}
                                        className={`flex items-center gap-1 font-semibold text-sm py-2
                                            ${activeLink === link.id
                                                ? 'text-orange-500'
                                                : 'text-zinc-700 hover:text-orange-500'
                                            }
                                        `}
                                    >
                                        {link.label}
                                        {link.megaMenu && (
                                            <FaChevronDown
                                                className={`text-xs transition-transform ${megaMenuOpen === link.id
                                                    ? 'rotate-180'
                                                    : ''
                                                    }`}
                                            />
                                        )}
                                    </Link>
                                </div>

                                {/* DESKTOP MEGA MENU */}
                                {link.megaMenu && megaMenuOpen === link.id && (
                                    <div
                                        className='fixed left-0 right-0 top-[5rem] z-[999]'
                                        onMouseEnter={() =>
                                            handleMouseEnter(link.id)
                                        }
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className='max-w-[1800px] mx-auto px-10'>
                                            <div className='bg-white rounded-b-2xl shadow-2xl p-8'>
                                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                                                    {link.megaMenu.categories.map(
                                                        (cat, idx) => (
                                                            <div key={idx}>
                                                                <h3 className='text-[#2d2a6e] font-bold mb-4 pb-2 border-b-2 border-orange-500 inline-block'>
                                                                    {cat.title}
                                                                </h3>
                                                                <ul className='space-y-2'>
                                                                    {cat.items
                                                                        .slice(
                                                                            0,
                                                                            5
                                                                        )
                                                                        .map(
                                                                            (
                                                                                item,
                                                                                i
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        i
                                                                                    }
                                                                                >
                                                                                    <Link
                                                                                        to='/'
                                                                                        onClick={() =>
                                                                                            setMegaMenuOpen(
                                                                                                null
                                                                                            )
                                                                                        }
                                                                                        className='block text-gray-600 hover:text-orange-500 transition-all hover:translate-x-2 text-sm'
                                                                                    >
                                                                                        {
                                                                                            item
                                                                                        }
                                                                                    </Link>
                                                                                </li>
                                                                            )
                                                                        )}
                                                                </ul>
                                                            </div>
                                                        )
                                                    )}
                                                </div>

                                                <div className='mt-6 pt-6 border-t'>
                                                    <div className='bg-orange-50 rounded-xl p-5 flex justify-between items-center'>
                                                        <div>
                                                            <h4 className='font-bold text-[#2d2a6e]'>
                                                                Special Offer!
                                                            </h4>
                                                            <p className='text-sm text-gray-600'>
                                                                Get 20% off on
                                                                first order
                                                            </p>
                                                        </div>
                                                        <button className='bg-orange-500 text-white px-6 py-2 rounded-full'>
                                                            Shop Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* RIGHT ICONS */}
                    <div className='flex items-center gap-3'>
                        <button className='hidden lg:flex w-10 h-10 rounded-full bg-[#f5f2ff] items-center justify-center'>
                            <CiSearch className='text-xl' />
                        </button>
                        <button className='hidden lg:flex w-10 h-10 rounded-full bg-[#fff3ec] items-center justify-center'>
                            <CiUser className='text-xl' />
                        </button>
                        <button className='hidden lg:flex w-10 h-10 rounded-full bg-[#ecfbff] items-center justify-center relative'>
                            <CiHeart className='text-xl' />
                        </button>
                        <button
                            onClick={() => handlenavigate('/cart')}
                            className='hidden lg:flex w-10 h-10 rounded-full bg-[#feefd0] items-center justify-center relative'>
                            <IoBagOutline className='text-xl' />
                            {cartitem?.length > 0 && (
                                <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                                    {cartitem.length}
                                </span>
                            )}
                        </button>

                        {/* MOBILE TOGGLE */}
                        <button
                            className='lg:hidden text-2xl'
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <RiCloseLine /> : <RiMenu3Line />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* ================= MOBILE MENU ================= */}
            {open && (
                <>
                    <div
                        className='fixed inset-0 bg-black/50 z-[998] lg:hidden'
                        onClick={() => setOpen(false)}
                    />

                    <div className='fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-[999] lg:hidden overflow-y-auto'>
                        <div className='flex justify-between items-center p-4 border-b'>
                            <img src={Logo} alt='Logo' className='h-8' />
                            <div className='flex items-center gap-3'>
                                <button
                                    onClick={() => {
                                        handlenavigate('/cart');
                                        setOpen(false);
                                    }}
                                    className='w-10 h-10 rounded-full bg-[#feefd0] items-center justify-center relative flex'>
                                    <IoBagOutline className='text-xl' />
                                    {cartitem?.length > 0 && (
                                        <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                                            {cartitem.length}
                                        </span>
                                    )}
                                </button>
                                <button onClick={() => setOpen(false)}>
                                    <RiCloseLine className='text-2xl' />
                                </button>
                            </div>
                        </div>

                        <div className='p-4 space-y-6'>
                            {/* SEARCH */}
                            <div className='flex border-2 border-orange-500 rounded-full px-3 h-12 items-center'>
                                <input
                                    placeholder='Search...'
                                    className='flex-1 outline-none text-sm'
                                />
                                <button className='bg-orange-500 w-9 h-9 rounded-full text-white flex items-center justify-center'>
                                    <IoMdSearch />
                                </button>
                            </div>

                            {/* MOBILE LINKS + MEGA */}
                            <ul className='space-y-2'>
                                {navLinks.map((link, index) => (
                                    <li key={link.id}>
                                        {link.megaMenu ? (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        setMobileMegaOpen(
                                                            mobileMegaOpen ===
                                                                link.id
                                                                ? null
                                                                : link.id
                                                        )
                                                    }
                                                    className='w-full flex items-center justify-between px-3 py-3 rounded-lg font-semibold text-zinc-700 hover:bg-orange-50'
                                                >
                                                    {link.label}
                                                    <FaChevronDown
                                                        className={`text-xs transition-transform ${mobileMegaOpen ===
                                                            link.id
                                                            ? 'rotate-180'
                                                            : ''
                                                            }`}
                                                    />
                                                </button>

                                                {mobileMegaOpen === link.id && (
                                                    <div className='pl-4 pt-2 space-y-4'>
                                                        {link.megaMenu.categories.map(
                                                            (cat, idx) => (
                                                                <div key={idx}>
                                                                    <h4 className='text-sm font-bold text-[#2d2a6e]'>
                                                                        {
                                                                            cat.title
                                                                        }
                                                                    </h4>
                                                                    <ul className='space-y-1'>
                                                                        {cat.items
                                                                            .slice(
                                                                                0,
                                                                                4
                                                                            )
                                                                            .map(
                                                                                (
                                                                                    item,
                                                                                    i
                                                                                ) => (
                                                                                    <li
                                                                                        key={
                                                                                            i
                                                                                        }
                                                                                    >
                                                                                        <Link
                                                                                            to='/'
                                                                                            onClick={() => {
                                                                                                setOpen(
                                                                                                    false
                                                                                                );
                                                                                                setMobileMegaOpen(
                                                                                                    null
                                                                                                );
                                                                                            }}
                                                                                            className='block text-sm text-gray-600 hover:text-orange-500 py-1'
                                                                                        >
                                                                                            {
                                                                                                item
                                                                                            }
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            )}
                                                                    </ul>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                onClick={() => setOpen(false)}
                                                className='block px-3 py-3 rounded-lg font-semibold text-zinc-700 hover:bg-orange-50'
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
};

export default Navbar;
