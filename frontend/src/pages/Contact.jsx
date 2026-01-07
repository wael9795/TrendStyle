import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1="Contact" text2="Us" />
      </div>
      <div className='flex flex-col md:flex-row gap-10 my-10 justify-center mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <h4 className='font-semibold text-xl'>Contact with Us</h4>
          <p>Address : 123 Main Street, Anytown, USA</p>
          <p>Phone : +1 234 567 890</p>
          <p>Email : info@trendstyle.com</p>
          <p>Hours : Monday - Friday : 9am - 6pm</p>
          <p>Saturday : 10am - 4pm</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact
