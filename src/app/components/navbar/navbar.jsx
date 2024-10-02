'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../../assets/images/Logo.svg'
import searchLogo from '../../../assets/images/search (1).svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

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
    <nav className='w-full fixed top-0 duration-300'>
        <div className="flex flex-wrap justify-center items-center md:mx-[40px] my-[20px]">    
            <Image src={logo} alt="Picture of the author" className='mx-[40px]'/>
            <button type="button" className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-search" 
                aria-expanded={isOpen} onClick={toggleMenu}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
                <ul className="flex flex-col p-4 md: mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                    {navItems.map((item) => (
                    <li key={item.href} className="relative group">
                    <Link href={item.href} passHref
                      className={`block py-2 pl-3 pr-4 rounded md:p-0 ${pathname === item.href ? 'text-[#3C4242]' : 'text-[#807D7E]  hover:[#807D7E]'} transition-all duration-300`}
                      style={{ fontSize: '0.8rem' }}>
                      <span className="text-sm md:text-base lg:text-lg xl:text-xl">{item.label}</span>
                    </Link>
                  </li>))}
                </ul>
            </div>

            <div className='relative flex items-center bg-[#000] mx-[20px] rounded-lg  md:w-auto md:order-2'>
                <Image src={searchLogo} alt="Search Icon" className="absolute left-2 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="pl-10 py-2 w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none"
                />
            </div>

            <button className='mx-[20px] bg-[#8A33FD] px-[40px] py-[10px] rounded-[10px] order-3'>
                Login
            </button>

            <button className='mx-[20px] bg-[#fff] border-[1px] border-black px-[40px] py-[10px] rounded-[10px] order-3'>
                Sign Up
            </button>

        </div>
    </nav>
  )
}

export default Navbar;