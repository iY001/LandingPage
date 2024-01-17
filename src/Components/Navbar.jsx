import React, { useState } from 'react'
import logo from '../assets/mainLogo.png'
import Sidebar from '../assets/textalign-justifycenter.png'
function Navbar() {
  const [open,setOpen] = useState()

  const Links = [
    {title : "Home",url : "/"},
    {title : "Service",url : "/Service"},
    {title : "Feature",url : "/Feature"},
    {title : "Product",url : "/Product"},
    {title : "Testimonial",url : "/Testimonial"},
    {title : "FAQ",url : "/FAQ"}, 
  ]
  return (
    <>
      <div className="relative z-10 flex md:justify-between items-center py-4 md:px-28 md:py-7 bg-main">
        <section>
        <img src={logo} className='mt-2 md:mt-0 px-6 md:px-0' alt="logo" />
        </section>


        <ul className={`z-[1] absolute md:static md:w-fit w-full text-center flex flex-col md:flex-row transition-all ease-in duration-500 md:opacity-100 ${open? "top-20 opacity-100" : "top-[-360px] opacity-0 z-[-1]"} `}>
          {
            Links.map((link)=>{
              return (
                <li className='md:mx-5 py-4 md:py-0 focus:font-semibold active:font-semibold cursor-pointer bg-main md:bg-none '><a href={link.url}>{link.title}</a></li>
                )
              })
            }
        </ul>

            <span className='md:hidden absolute right-6 mt-3'>
              <button onClick={()=>setOpen(!open)} className=' cursor-pointer'><img src={Sidebar} alt="" /></button>
            </span>
        <section className='hidden md:flex flex-row'>
          <button className='mr-5 text-sm text-shade1'>Login</button>
          <button className='px-5 py-2 md:w-24 bg-shade1 hover:bg-shade2 duration-200 text-white text-sm rounded-md focus:ring focus:ring-tint1 '>Sign Up</button>
        </section>
        </div>
    </>
  )
}

export default Navbar