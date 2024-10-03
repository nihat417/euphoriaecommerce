import React from 'react'
import rgphoto from '../../../assets/images/rr.svg';
import google from '../../../assets/images/Google.svg';
import twitter from '../../../assets/images/twitter.svg';
import hideic from '../../../assets/images/Hide view.svg'
import Link from 'next/link';
import Image from 'next/image';

const ResetPassword = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 order-2">
        <Image src={rgphoto} alt="ss" className="w-full h-[50vh] md:h-[100vh] object-cover" />
        </div>
        
        <div className="w-full md:w-1/2 p-5 order-1 mb-[50px] md:order-2">
            <h2 className=' text-[#333] ml-[20px] md:ml-[50px] my-[30px] md:my-[50px] text-[30px] md:text-[40px] font-bold'>Reset Your Password</h2>

            <div className='flex flex-col md:mx-[50px]'>
                <div className="mb-4">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-[#3C4242]">Email address</label>
                    <input type="text" id="default-input" placeholder='designer@gmail.com' className="border text-sm rounded-lg block w-full p-2.5 border-black"/>
                </div>

                <button className='bg-purple-600 mb-2 p-2 rounded-[5px] text-white md:w-1/3'>Send</button>

                <span className='text-[15px]'>
                    Back to
                    <Link href="/common/Login" className='underline'> Login</Link>
                </span>

            </div>
        </div>
    </div>
  )
}

export default ResetPassword;