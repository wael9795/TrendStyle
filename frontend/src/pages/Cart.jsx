import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'


const Cart = () => {


  const { cartItems, products, currency, updateQuantity, navigate } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])


  useEffect(() => {

    if (products.length > 0) {
      const tempData = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData)
    }
  }, [cartItems, products])



  return (

    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1="Your" text2="Cart" />
      </div>
      <div className='flex flex-col gap-4'>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id)
          return (
            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
                <div>
                  <p className='font-medium text-sm sm:text-lg'>
                    {productData.name}
                  </p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p className='text-sm'>
                      {currency} {productData.price}
                    </p>
                    <p className='px-2 sm:px-3 sm:py-1 bg-gray-200 border text-sm'>
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
              <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />
            </div>
          )
        })}
      </div>

      <div className='flex justify-end my-6'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={() => navigate('/place-order')} className='bg-blue-600 text-white text-sm sm:text-base px-8 my-8 py-2 rounded-md hover:bg-blue-800 transition-all duration-300'>Proceed to Checkout</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
