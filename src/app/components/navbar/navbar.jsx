'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../../assets/images/Logo.svg';
import searchLogo from '../../../assets/images/search (1).svg';
import component1 from '../../../assets/images/Component 1.svg';
import component2 from '../../../assets/images/Component 2.svg';
import component3 from '../../../assets/images/Component 3.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [auth, setAuth] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { href: "/", label: "Shop" },
        { href: "/common/men", label: "Men" },
        { href: "/common/women", label: "Women" },
        { href: "/common/combos", label: "Combos" },
        { href: "/common/joggers", label: "Joggers" }
    ];

    return (
        <nav className='w-full duration-300 z-50 bg-white border-b-[1px]'>
            <div className='flex flex-wrap justify-between items-center mx-[10px] md:mx-[40px] my-[20px]'>
                <Image src={logo} alt="Logo" />

                {auth ? (
                    <div className='hidden lg:flex space-x-4'>
                        {navItems.map((item) => (
                            <Link 
                                key={item.href} 
                                href={item.href} 
                                className={`py-2 text-gray-800 hover:text-gray-600 ${pathname === item.href ? 'font-semibold' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                ) : ''}

                {auth ? (
                    <div className={`fixed top-0 right-0 z-10 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                        <div className="flex flex-col p-4 h-full">
                            <button className="self-end mb-4 text-gray-500 hover:text-gray-700" onClick={toggleMenu}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <ul className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link 
                                            href={item.href} 
                                            className={`block py-2 text-gray-800 hover:text-gray-600 ${pathname === item.href ? 'font-semibold' : ''}`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : ''}

                <div className={`relative flex items-center bg-[#F6F6F6] mx-[10px] rounded-lg order-3 md:w-auto w-full ${isOpen ? 'order-2' : 'order-3'} lg:w-auto`}>
                    <Image src={searchLogo} alt="Search Icon" className="absolute left-2 w-5 h-5" />
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="pl-10 py-2 w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none"
                    />
                </div>

                {auth ? (
                    <div className='order-3 flex space-x-4'>
                        <button className='mx-[10px]'>
                            <Image src={component1} alt='Component 1'/>
                        </button>
                        <button className='mx-[10px]'>
                            <Image src={component2} alt='Component 2'/>
                        </button>
                        <button className='mx-[10px]'>
                            <Image src={component3} alt='Component 3'/>
                        </button>
                    </div>
                ) : (
                    <div className='order-2 md:order-3 my-[10px] flex  md:flex-row space-x-0 md:space-x-4'>
                        <button className='mx-[10px] md:mx-[20px] bg-[#8A33FD] px-[20px] md:px-[40px] py-[8px] md:py-[10px] rounded-[10px] text-sm md:text-base'>
                            Login
                        </button>
                        <button className='mx-[10px] md:mx-[20px] bg-[#fff] border-[1px] border-black px-[20px] md:px-[40px] py-[8px] md:py-[10px] rounded-[10px] text-sm md:text-base'>
                            Sign Up
                        </button>
                    </div>
                )}

                {auth && !isOpen ? (  
                    <button 
                        type="button" 
                        className="inline-flex order-2 md:order-4 lg:hidden items-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
                        aria-controls="navbar-search" 
                        aria-expanded={isOpen} 
                        onClick={toggleMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg 
                            className="w-6 h-6" 
                            aria-hidden="true" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                ) : ''} 
            </div>
        </nav>
    );
};

export default Navbar;
