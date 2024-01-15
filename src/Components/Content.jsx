import React from 'react'
import logo from '../assets/icons/Logo.png';
import logo1 from '../assets/icons/Logo-1.png';
import logo2 from '../assets/icons/Logo-2.png';
import logo3 from '../assets/icons/Logo-3.png';
import logo4 from '../assets/icons/Logo-4.png';
import logo5 from '../assets/icons/Logo-5.png';
import logo6 from '../assets/icons/Logo-6.png';
function Content() {
    const Logos = [
        logo,logo1,logo2,logo3,logo4,logo5,logo6
    ]
  return (
        <>
        <div className='py-12 text-center bg-main'>
            <h1 className='font-bold font-[poppins] text-4xl py-2 text-d_grey'>Our Clients</h1>
            <p className='text-d_grey font-[Poppins] text-base'>We have been working with some Fortune 500+ clients</p>

            <section className='flex md:justify-center flex-wrap text-center  md:w-full'>
               {
                Logos.map((logo)=>{
                    return (
                        <img src={logo} className='md:px-24 md:py-6 px-8 py-6   ' alt="logo" />
                    )
                })
               }
            </section>
        </div>

        <div className='py-10 text-center bg-main'>
            <h1 className='font-bold font-[poppins] text-4xl py-2 text-d_grey'>Manage your entire community<br></br> in a single system</h1>
            <p className='text-d_grey font-[Poppins] text-base'>Who is Nextcent suitable for?</p>

            <section className='flex md:justify-center flex-wrap text-center  md:w-full'>
               {
                Logos.map((logo)=>{
                    return (
                        <img src={logo} className='md:px-24 md:py-6 px-8 py-6   ' alt="logo" />
                    )
                })
               }
            </section>
        </div>
        </>
  ) 
}

export default Content