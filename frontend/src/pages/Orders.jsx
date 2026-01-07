import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'

const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext)

  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + "/api/order/userorders", {}, {
        headers: {
          token
        }
      })
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map(order => {
          order.items.map(item => {
            item["status"] = order.status
            item["payment"] = order.payment
            item["paymentMethod"] = order.paymentMethod
            item["date"] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }

    } catch (error) {

    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl mb-3'>
        <Title text1="My" text2="Orders" />
      </div>
      <div className=''>
        {
          orderData.map((item, index) => (
            <div key={index} className='py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm' >
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='font-medium sm:text-base'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                    <p className='font-bold text-green-600'>{currency} {item.price}</p>
                    <p className='font-bold'>Quantity : <span className='text-sky-500 font-semibold'>{item.quantity}</span></p>
                    <p className='font-bold'>Size : <span className='text-sky-500 font-semibold'>{item.size}</span></p>
                  </div>
                  <p className='mt-1 font-bold'>Date : <span className='text-sky-500 font-semibold'>{new Date(item.date).toDateString()}</span></p>
                  <p className='mt-1 font-bold'>Payment Method : <span className='text-sky-500 font-semibold'>{item.paymentMethod}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-3'>
                  <p className='min-w-3 h-3 border rounded-full bg-green-400'></p>
                  <p className='text-sm md:text-base'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className='bg-blue-600 text-white text-sm sm:text-base px-8 my-8 py-2 rounded-md hover:bg-blue-800 transition-all duration-300'>Track Order</button>
              </div>
            </div>
          )

          )
        }
      </div>
    </div>
  )
}

export default Orders
