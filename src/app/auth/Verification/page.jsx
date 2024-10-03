'use client'
import React from 'react'
import rgphoto from '../../../assets/images/verficationphoto.png';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Verification = () => {
    const router = useRouter();

    const handleSubmit = () =>{router.push('/auth/NewPassword')};

  return (
    <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 order-2">
        <Image src={rgphoto} alt="ss" className="w-full h-[50vh] md:h-[100vh] object-cover" />
        </div>
        
        <div className="w-full md:w-1/2 p-5 order-1 mb-[50px] md:order-2">
            <h2 className=' text-[#333] ml-[20px] md:ml-[50px] my-[30px] md:my-[50px] text-[30px] md:text-[40px] font-bold'>Verification</h2>

            <div className='flex flex-col md:mx-[50px]'>
                <div className="mb-4">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-[#3C4242]">Verification Code</label>
                    <input type="number" id="default-input" placeholder='0757' className="border text-sm rounded-lg block w-full p-2.5 border-black"/>
                </div>

                <button onClick={handleSubmit} className='bg-purple-600 mb-2 p-2 rounded-[5px] text-white md:w-1/3'>Verify Code</button>
            </div>
        </div>
    </div>
  )
}

export default Verification;