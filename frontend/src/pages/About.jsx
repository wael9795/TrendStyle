import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {


    return (
        <div>


            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1="About" text2="Us" />
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-800'>
                    <p className='font-semibold text-xl'>Our Story</p>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, labore.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas iusto nemo cum sit vitae quibusdam debitis repudiandae expedita maxime!
                    </p>
                    <b className='font-semibold text-xl'>Our Mission</b>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, labore.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas iusto nemo cum sit vitae quibusdam debitis repudiandae expedita maxime!
                    </p>
                </div>

            </div>

            <div className='text-2xl py-4'>
                <Title text1="Why" text2="Choose Us" />
            </div>


            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <p>Quality Assurance :</p>
                    <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, labore.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <p>Convenience :</p>
                    <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, labore.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <p>Exeptional Customer Service :</p>
                    <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, labore.</p>
                </div>
            </div>

            <NewsletterBox />

        </div>
    )
}

export default About