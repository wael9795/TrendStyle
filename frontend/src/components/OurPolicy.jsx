import React from 'react'
import { assets } from '../assets/assets'
const OurPolicy = () => {
    return (
        <div className='flex flex-col gap-12 sm:flex-row justify-around sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>


            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-500 '>we offer easy exchange policy</p>
            </div>
            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>7 Days Return Policy</p>
                <p className='text-gray-500 '>we provide 7 days return policy</p>
            </div>
            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>24/7 Support</p>
                <p className='text-gray-500 '>we offer 24/7 support</p>
            </div>



        </div>
    )
}

export default OurPolicy