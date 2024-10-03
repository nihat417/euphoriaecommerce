import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import instasvg from '../../../assets/images/instasvg.svg';
import twittersvg from '../../../assets/images/tw.svg';
import facebooksvg from '../../../assets/images/faceb.svg';
import linkednsvg from '../../../assets/images/linkedn.svg';
import appstoresvg from '../../../assets/images/appstore.png';
import googleplaysvg from '../../../assets/images/googleplay.png';

const Footer = () => {
  return (
    <footer className='bg-[#3C4242] py-[150px] md:p-10'>
        <div className='flex flex-wrap p-10 justify-around '>
            <div className='lg:my-0 lg:mt-0 md:mt-0 xs:my-[20px] xs:mt-20'>
                <h2 className='text-white font-bold text-[28px]'>Need Help</h2>
                <p className='text-white text-[16px]'>Contact Us</p>
                <p className='text-white text-[16px]'>Track Order</p>
                <p className='text-white text-[16px]'>Returns & Refunds</p>
                <p className='text-white text-[16px]'>FAQ'S</p>
                <p className='text-white text-[16px]'>Career</p>
            </div>
            <div className='lg:my-0 lg:mt-0 md:mt-0 xs:my-[20px] xs:mt-20'>
                <h2 className='text-white font-bold text-[28px]'>Company</h2>
                <p className='text-white text-[16px]'>About Us</p>
                <p className='text-white text-[16px]'>euphoria Blog</p>
                <p className='text-white text-[16px]'>euphoriastan</p>
                <p className='text-white text-[16px]'>Collaboration</p>
                <p className='text-white text-[16px]'>Media</p>
            </div>
            <div className='lg:my-0 lg:mt-0 md:mt-0 xs:my-[20px] xs:mt-20'>
                <h2 className='text-white font-bold text-[28px]'>More Info</h2>
                <p className='text-white text-[16px]'>Term and Conditions</p>
                <p className='text-white text-[16px]'>Privacy Policy</p>
                <p className='text-white text-[16px]'>Shipping Policy</p>
                <p className='text-white text-[16px]'>Sitemap</p>
            </div>
            <div className='lg:my-0 lg:mt-0 md:mt-0 xs:my-[20px] xs:mt-20'>
                <h2 className='text-white font-bold text-[28px]'>Location</h2>
                <p className='text-white text-[16px]'>support@euphoria.in</p>
                <p className='text-white text-[16px]'>TEklingpura Chouraha, Ahmedabad Main Road</p>
                <p className='text-white text-[16px]'>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
            </div>
        </div>
        <div className='flex flex-wrap md:justify-around '>
            <div className='flex flex-wrap md:flex-row mx-[100px]'>
                <Image src={facebooksvg} alt="ss" className='mr-[5px]'/>
                <Image src={instasvg} alt="ss" className='mr-[5px]'/>
                <Image src={twittersvg} alt="ss" className='mr-[5px]'/>
                <Image src={linkednsvg} alt="ss" className='mr-[5px]'/>
            </div>
            <div className='mx-[100px] mt-[50px] md:mt-0'>
                <h3 className='text-[#F6F6F6] font-bold text-[20px] md:text-[26px]'>Download The App</h3>
                <div className='flex flex-col md:flex-row w-1/2'>
                    <Image src={googleplaysvg} alt='nn' className='mr-0 md:mr-[10px] xs:my-[10px] xs:ml-0'/>
                    <Image src={appstoresvg} alt='nn' className='ml-[10px] xs:my-[10px] xs:ml-0'/>
                </div>
            </div>
        </div>
        <p className=' mt-[50px] text-center text-white font-bold text-[16px]'>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
    </footer>
  )
}

export default Footer;