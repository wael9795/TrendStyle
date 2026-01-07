import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'



const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')



  const fetchProductData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }



  useEffect(() => {
    fetchProductData()
  }, [productId, products])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity duration-500 ease-in opacity-100'>

      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          <div className='flex sm:flex-col overflow-x-auto sm:overflow-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img onMouseEnter={() => setImage(item)} onClick={() => setImage(item)} className='sm:w-full w-[24%] sm:mb-3 flex-shrink-0 cursor-pointer' key={index} src={item} alt="" />
            ))}
          </div>

          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>

        </div>

        {/* product info */}
        <div className='flex-1'>
          <h1 className='text-2xl font-medium mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-2 mt'>
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_dull_icon} className='w-3 5' alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='text-3xl sm:text-4xl font-medium mt-5'>{currency}{productData.price}</p>
          <p className='text-gray-500 mt-5 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>SelectSize</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200 transition-all duration-200 ${item === size ? 'border-blue-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productId, size)} className='bg-blue-500 text-white py-3 px-8 rounded-md active:bg-blue-600 transition-all duration-200'>Add To Cart</button>
          <hr className='mt-8 sm:w-4/5 w-full' />


          <div className='mt-5 flex flex-col gap-1 text-gray-600 text-sm'>
            <p>100% Original Product</p>
            <p>Cash on delivery available</p>
            <p>Easy Exchange & Return Available</p>
          </div>


        </div>

      </div>


      {/* description and reviews */}

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-5 py-6 text-sm text-gray-600 border px-6'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facilis laborum sed aliquam soluta sapiente!</p>
          <p>new Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, mollitia.</p>

        </div>
      </div>

      {/* related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : (
    <div className='opacity-0'>
      <p>Loading...</p>
    </div>
  )
}

export default Product
