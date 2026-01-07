import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <div className='inline-flex items-center gap-2 mb-3'>
            <p className='text-gray-700'>{text1} <span className='font-medium text-gray-900'>{text2}</span></p>
            <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#414141]'></p>
        </div>
    )
}

export default Title