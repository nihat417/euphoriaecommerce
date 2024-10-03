import React from 'react'
import rgphoto from '../../../assets/images/checkmailphto.png';
import Link from 'next/link';
import Image from 'next/image';


const CheckMail = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 order-2">
        <Image src={rgphoto} alt="ss" className="w-full h-[50vh] md:h-[100vh] object-cover" />
        </div>
        
        <div className="w-full md:w-1/2 p-5 order-1 mb-[50px] md:order-2">
            <h2 className=' text-[#333] ml-[20px] md:ml-[50px] my-[30px] md:my-[50px] text-[30px] md:text-[40px] font-bold'>Reset Your Password</h2>

            <div className='flex flex-col md:mx-[50px]'>
                <p className='text-[#666666] mb-[20px]'>Please check your email inbox and click on the provided link to reset your password . If you don’t receive email , 
                  <Link href='/common/Verification' className='text-[#8A33FD]'>Click here to resend</Link>
                </p>
                

                <span className='text-[15px]'>
                    Back to
                    <Link href="/auth/Login" className='underline'> Login</Link>
                </span>

            </div>
        </div>
    </div>
  )
}

export default CheckMail;