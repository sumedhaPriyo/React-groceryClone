import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { IoBagOutline } from 'react-icons/io5';
import { CiUser, CiHeart, CiSearch } from 'react-icons/ci';
import { IoMdSearch } from 'react-icons/io';
import navLinks from '../../data/Navlinks';
import Logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(null);
  const [activeLink, setActiveLink] = useState(1);

  return (
    <header className="h-16 md:h-20 border-b border-[#e6eaf0] bg-white sticky top-0 z-[999]">
      <div className="max-w-[1800px] mx-auto px-4 md:px-10 h-full">
        <nav className="h-full flex items-center justify-between">

          {/* Logo */}
          <img src={Logo} alt="Logo" className="h-8 md:h-12" />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8">

            {navLinks.map((link) => (
              <li
                key={link.id}
                className="relative"
                onMouseEnter={() => link.megaMenu && setMegaMenuOpen(link.id)}
              >
                {/* Nav Link */}
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(link.id);
                    // Toggle mega menu on click - close if already open
                    if (link.megaMenu) {
                      setMegaMenuOpen(megaMenuOpen === link.id ? null : link.id);
                    }
                  }}
                  className={`flex items-center gap-1 font-semibold text-sm transition-colors relative py-2 cursor-pointer
                    ${activeLink === link.id ? 'text-orange-500' : 'text-zinc-700 hover:text-orange-500'}
                  `}
                >
                  {link.label}
                  {link.megaMenu && (
                    <FaChevronDown
                      className={`text-xs transition-transform ${
                        megaMenuOpen === link.id ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  {activeLink === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500" />
                  )}
                </a>

                {/* ===== MEGA MENU ===== */}
                {link.megaMenu && megaMenuOpen === link.id && (
                  <>
                    {/* 🔥 HOVER BUFFER (IMPORTANT FIX) */}
                    <div
                      className="fixed left-0 right-0 top-[4rem] h-6 z-[998]"
                      onMouseEnter={() => setMegaMenuOpen(link.id)}
                    />

                    {/* Mega Menu Panel */}
                    <div
                      className="fixed left-0 right-0 top-[5rem] z-[999]"
                      onMouseEnter={() => setMegaMenuOpen(link.id)}
                      onMouseLeave={() => setMegaMenuOpen(null)}
                    >
                      <div className="max-w-[1800px] mx-auto px-10">
                        <div className="bg-white rounded-b-2xl shadow-2xl  p-8">

                          {/* Grid with max 4 columns per row, wraps to next row if more */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                            {link.megaMenu.categories.map((category, idx) => (
                              <div key={idx}>
                                <h3 className="text-[#2d2a6e] font-bold text-sm sm:text-base mb-3 sm:mb-4 pb-2 border-b-2 border-orange-500 inline-block">
                                  {category.title}
                                </h3>
                                <ul className="space-y-2">
                                  {category.items.slice(0, link.id === 4 ? 3 : 5).map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                      <a
                                        href="#"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setMegaMenuOpen(null);
                                          console.log('Selected:', item);
                                        }}
                                        className="block text-gray-600 hover:text-orange-500 transition-all duration-300 hover:translate-x-2 text-xs sm:text-sm cursor-pointer"
                                      >
                                        <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all mr-1"></span>
                                        {item}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* Banner */}
                          <div className="mt-6 pt-6 border-t">
                            <div className="bg-orange-50 rounded-xl p-5 flex items-center justify-between">
                              <div>
                                <h4 className="font-bold text-[#2d2a6e]">
                                  Special Offer!
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Get 20% off on first order
                                </p>
                              </div>
                              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
                                Shop Now
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <button className="hidden lg:flex w-10 h-10 rounded-full bg-[#f5f2ff] items-center justify-center">
              <CiSearch className="text-xl" />
            </button>
            <button className="hidden lg:flex w-10 h-10 rounded-full bg-[#fff3ec] items-center justify-center">
              <CiUser className="text-xl" />
            </button>
            <button className="hidden lg:flex w-10 h-10 rounded-full bg-[#ecfbff] items-center justify-center relative">
              <CiHeart className="text-xl" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button className="hidden lg:flex w-10 h-10 rounded-full bg-[#feefd0] items-center justify-center relative">
              <IoBagOutline className="text-xl" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-[998] lg:hidden"
            onClick={() => setOpen(false)}
          />
          
          {/* Mobile Menu Sidebar */}
          <div className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-[999] lg:hidden overflow-y-auto animate-slideIn">
            
            {/* Close Button */}
            <div className="flex justify-between items-center p-4 border-b">
              <img src={Logo} alt="Logo" className="h-8" />
              <button 
                onClick={() => setOpen(false)}
                className="text-2xl text-zinc-700 hover:text-orange-500 transition-colors"
              >
                <RiCloseLine />
              </button>
            </div>

            <div className="p-4 space-y-6">
              {/* Search */}
              <div className="flex border-2 border-orange-500 rounded-full px-3 h-12 items-center">
                <input
                  placeholder="Search..."
                  className="flex-1 outline-none text-sm"
                />
                <button className="bg-orange-500 w-9 h-9 rounded-full text-white flex items-center justify-center">
                  <IoMdSearch />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-left font-semibold transition-all duration-300 ${
                        activeLink === link.id 
                          ? 'bg-orange-50 text-orange-500' 
                          : 'text-zinc-700 hover:bg-orange-50'
                      }`}
                      onClick={() => {
                        if (link.megaMenu) {
                          // Toggle: if clicking the same menu, close it
                          setActiveLink(activeLink === link.id ? null : link.id);
                        } else {
                          setActiveLink(link.id);
                          setOpen(false);
                        }
                      }}
                    >
                      {link.label}
                      {link.megaMenu && (
                        <FaChevronDown 
                          className={`text-xs transition-transform duration-300 ${
                            activeLink === link.id ? 'rotate-180' : ''
                          }`} 
                        />
                      )}
                    </button>

                    {/* Mobile Mega Menu */}
                    {link.megaMenu && activeLink === link.id && (
                      <div className="pl-4 pt-2 space-y-2 animate-fadeIn">
                        {link.megaMenu.categories.map((cat, idx) => (
                          <div key={idx}>
                            <h4 className="text-sm font-bold text-[#2d2a6e] mb-1">
                              {cat.title}
                            </h4>
                            <ul className="space-y-1">
                              {cat.items.slice(0, 4).map((item, i) => (
                                <li key={i}>
                                  <a
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setOpen(false);
                                      console.log('Selected:', item);
                                    }}
                                    className="block text-sm text-gray-600 hover:text-orange-500 transition-colors cursor-pointer py-1"
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile Actions */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t">
                <button className="bg-[#2d2a6e] text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 text-sm">
                  <CiUser /> Sign In
                </button>
                <button className="bg-orange-500 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 text-sm">
                  <IoBagOutline /> Cart (3)
                </button>
              </div>
            </div>
          </div>
        </>
      )}

    </header>
  );
};

export default Navbar;
