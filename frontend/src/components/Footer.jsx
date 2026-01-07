import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 my-12 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='w-32 mb-5' alt="" />
                    <p className='text-gray-800 w-full md:w-2/3'>Explore the latest fashion trends and shop our collection of high-quality, trendy, and affordable clothing and accessories. From stylish dresses and trendy bags to comfortable footwear and trendy jewelry, we have everything you need to look and feel your best.</p>
                </div>
                <div>
                    <p className='font-medium mb-5 text-xl'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-800'>
                        <li><Link to="/">Home</Link></li>
                        <li>Delivery</li>
                        <li>About</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='font-medium mb-5 text-xl'>Get In Touch</p>
                    <ul className='flex flex-col gap-2 text-gray-800'>
                        <li>+121212122</li>
                        <li>contact@trendstyle.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='text-center text-sm text-gray-800 py-5'>© 2026 TrendStyle All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer