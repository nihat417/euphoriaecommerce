import React from 'react';
import '../../../assets/css/style.css';
import Image from 'next/image';
import lgPhoto from '../../../assets/images/logph.png';
import google from '../../../assets/images/Google.svg';
import twitter from '../../../assets/images/twitter.svg';

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 order-2">
        <Image src={lgPhoto} alt="ss" className="w-full h-[50vh] md:h-[100vh] object-cover" />
      </div>
      
      <div className="w-full md:w-1/2 p-5 order-1 mb-[50px] md:order-2">
        <h2 className=' text-[#333] ml-[20px] md:ml-[50px] my-[30px] md:my-[50px] text-[30px] md:text-[40px] font-bold'>Sign In Page</h2>

        <div className='flex flex-col md:mx-[50px]'>
            <button type="button" className="items-center justify-center  bg-white hover:bg-gray-100 border border-[#000] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex dark:text-black me-2 mb-2">
                <Image src={google} alt='Google' className='mr-[10px]' />
                Continue with Google
            </button>


            <button type="button" className="items-center justify-center  bg-white hover:bg-gray-100 border border-[#000] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex  dark:text-black me-2 mb-2">
                <Image src={twitter} alt='Twitter' className='mr-[10px]' />
                Continue with Twitter
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
