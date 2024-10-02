import React from 'react';
import '../../../assets/css/style.css';
import Image from 'next/image';
import lgPhoto from '../../../assets/images/logph.png';
import google from '../../../assets/images/Google.svg';
import twitter from '../../../assets/images/twitter.svg';

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2">
        <Image src={lgPhoto} alt="ss" className="w-full h-[50vh] md:h-[100vh] object-cover" />
      </div>
      
      <div className="w-full md:w-1/2 p-5">
        <h2 className='text-[#333] ml-[20px] md:ml-[50px] my-[30px] md:my-[50px] text-[30px] md:text-[40px] font-bold'>Sign In Page</h2>

        <button className='flex items-center justify-center mx-[20px] md:ml-[50px] border-[1px] border-black rounded-[5px] py-[10px] px-5 md:px-10 w-full max-w-md'>
            <Image src={google} alt='Google' className='mr-[10px]' />
            Continue with Google
        </button>

        <button className='flex items-center justify-center mt-[20px] mx-[20px] md:ml-[50px] border-[1px] border-black rounded-[5px] py-[10px] px-5 md:px-10 w-full max-w-md'>
            <Image src={twitter} alt='Twitter' className='mr-[10px]' />
            Continue with Twitter
        </button>
      </div>
    </div>
  );
};

export default Login;
