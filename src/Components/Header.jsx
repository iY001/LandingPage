import React from 'react'
import Illustration from '../assets/Illustration.png'
function Header() {
  return (
    <>
    <div className='flex md:flex-row flex-col-reverse justify-between md:px-48 md:py-20 bg-main items-center '>
        <section className='md:px-0 px-6'>
            <span className='md:text-6xl text-3xl text-d_grey font-[poppins] font-bold'>
                Lessons and insights
                <p className='text-primary py-4'>from 8 years</p>
            </span>
            <p className='py-2'>Where to grow your business as a photographer: site or social media?</p>
            <button className='px-8 py-3 mt-8 bg-tint1 hover:bg-shade1 focus:ring focus:ring-primary text-white text-base rounded duration-200'>Register</button>
        </section>

        <section>
            <img src={Illustration} className='md:w-full w-56 py-12 md:py-0' alt="Illustration" />
        </section>
        
    </div>
    <div className='flex justify-center bg-main'>
            <div className='bg-tint1 rounded-full p-1 mx-1'></div>
            <div className='bg-tint3 rounded-full p-1 mx-1'></div>
            <div className='bg-tint4 rounded-full p-1 mx-1'></div>
    </div>
    </>
  )
}

export default Header