import React from 'react'
import { assets } from '../assets/assets'


const Navbar = ({ setToken }) => {
    return (
        <div className='flex items-center justify-between px-[4%] sticky top-0 bg-gray-100 z-50 border'>
            <img className='w-[max(10%,80px)]' src={assets.logo05} alt="" />
            <button onClick={() => setToken("")} className='bg-blue-600 hover:bg-blue-800 transition-all duration-300 ease-in-out text-white px-5 py-2 rounded-md sm:px-7 sm:py-2 text-xs sm:text-sm'>Logout</button>
        </div>
    )
}

export default Navbar