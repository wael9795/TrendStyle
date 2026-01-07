import React, { useState } from 'react'
import { assets } from '../assets/assets.js'
import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'









const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const { setShowSearch, getCartCount, token, setToken, navigate, setCartItems } = useContext(ShopContext)





    const logout = () => {
        navigate("/login")
        localStorage.removeItem("token")
        setToken("")
        setCartItems({})
    }




    return (
        <div className='flex justify-between items-center py-5 font-medium'>
            <Link to="/">
                <img src={assets.logo} className='w-36' alt="" />
            </Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-full border-none h-[1.5px] bg-blue-700 hidden' />
                </NavLink>
                <NavLink to="/collection" className='flex flex-col items-center gap-1'>
                    <p>Collection</p>
                    <hr className='w-full border-none h-[1.5px] bg-blue-700 hidden' />
                </NavLink>
                <NavLink to="/about" className='flex flex-col items-center gap-1'>
                    <p>About</p>
                    <hr className='w-full border-none h-[1.5px] bg-blue-700 hidden' />
                </NavLink>
                <NavLink to="/contact" className='flex flex-col items-center gap-1'>
                    <p>Contact</p>
                    <hr className='w-full border-none h-[1.5px] bg-blue-700 hidden' />
                </NavLink>
            </ul>






            <div className='flex items-center gap-6'>
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
                <div className='group relative'>
                    <img onClick={() => token ? null : navigate("/login")} src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />

                    {/* Dropdown menu */}

                    {token &&
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-gray-700 rounded'>
                                <p className='cursor-pointer hover:text-gray-500'>Profile</p>
                                <p onClick={() => navigate("/orders")} className='cursor-pointer hover:text-gray-500'>Orders</p>
                                <p onClick={logout} className='cursor-pointer hover:text-gray-500'>Logout</p>
                            </div>
                        </div>}



                </div>
                <Link to="/cart" className='relative'>
                    <img src={assets.cart_icon} className='w-5 cursor-pointer min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>
            {/* Sidebar menu for small screens */}

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${visible ? "w-full" : "w-0"}`}>
                <div className="flex flex-col text-gray-700">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} to="/" className='py-2 pl-6 border'>
                        <p>Home</p>
                        <hr className='w-full h-[4px] hidden' />
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/collection" className='py-2 pl-6 border'>
                        <p>Collection</p>
                        <hr className='w-full h-[4px] hidden' />
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/about" className='py-2 pl-6 border'>
                        <p>About</p>
                        <hr className='w-full h-[4px] hidden' />
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/contact" className='py-2 pl-6 border'>
                        <p>Contact</p>
                        <hr className='w-full h-[4px] hidden' />
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar
