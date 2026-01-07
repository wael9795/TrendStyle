import React from 'react'

const NewsletterBox = () => {


    const onSubmitHandler = (event) => {
        event.preventDefault();

    }






    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-700'>Subscribe Now and Get 30% Discount</p>
            <p className='text-gray-500 mt-3'>Sign up to our newsletter to receive updates on new arrivals, exclusive offers, and more.</p>
            <form onSubmit={onSubmitHandler} className='flex items-center w-full gap-3 mt-5 sm:w-1/2 mx-auto my-6 border pl-5 pr-5 py-2 rounded-md'>
                <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
                <button type='submit' className='bg-black text-white text-sm px-10 py-2 rounded-md'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsletterBox