import React from 'react'
import footerlogo from '../assets/footerLogo.png'
import logo from '../assets/icons/Logo.png';
import logo1 from '../assets/icons/Logo-1.png';
import logo2 from '../assets/icons/Logo-2.png';
import logo3 from '../assets/icons/Logo-3.png';
import logo4 from '../assets/icons/Logo-4.png';
import logo5 from '../assets/icons/Logo-5.png';
import logo6 from '../assets/icons/Logo-6.png';
import cIcon1 from '../assets/(Community)/icon.png'
import cIcon2 from '../assets/(Community)/Icon-1.png'
import cIcon3 from '../assets/(Community)/Icon-2.png'
import image from '../assets/rafiki.png'
import aIcon1 from '../assets/Analytics/Icon.png'
import aIcon2 from '../assets/Analytics/Icon-1.png'
import aIcon3 from '../assets/Analytics/Icon-2.png'
import aIcon4 from '../assets/Analytics/Icon-3.png'
import phone from '../assets/pana.png'
import readMore1 from '../assets/Readmore/image 18.png';
import readMore2 from '../assets/Readmore/image 19.png';
import readMore3 from '../assets/Readmore/image 20.png';
import footerIcon1 from '../assets/Footer/Social Icons.png';
import footerIcon2 from '../assets/Footer/Social Icons-1.png';
import footerIcon3 from '../assets/Footer/Social Icons-2.png';
import footerIcon4 from '../assets/Footer/Social Icons-3.png';
import vector from '../assets/Footer/Vector.png';
function Content() {
    const Logos = [
        logo, logo1, logo2, logo3, logo4, logo5, logo6
    ]
    const cIcons = [
        {
            icon: cIcon1,
            header: 'Membership Organisations',
            text: 'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            icon: cIcon2,
            header: 'National Associations',
            text: 'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            icon: cIcon3,
            header: 'Clubs And Groups',
            text: 'Our membership management software provides full automation of membership renewals and payments'
        }
    ]
    const aIcons = [
        {
            icon: aIcon1,
            header: 'Members',
            text: '2,245,341'
        },
        {
            icon: aIcon2,
            header: 'Clubs',
            text: '46,328'
        },
        {
            icon: aIcon3,
            header: 'Event Bookings',
            text: '828,867'
        },
        {
            icon: aIcon4,
            header: 'Payments',
            text: '1,926,436'
        }
    ]
    const readMore = [
        {
            img: readMore1,
            text: 'Creating Streamlined Safeguarding Processes with OneRen'
        },
        {
            img: readMore2,
            text: 'What are your safeguarding responsibilities and how can you manage them?'
        },
        {
            img: readMore3,
            text: 'Revamping the Membership Model with Triathlon Australia'
        }
    ]
    const FooterIcons = [
        {
            icon: footerIcon1,
            limk: 'https://www.instagram.com/'
        },
        {
            icon: footerIcon2,
            limk: '/'
        },
        {
            icon: footerIcon3,
            limk: '/'
        },
        {
            icon: footerIcon4,
            limk: '/'
        }
    ]
    return (
        <>
            {/* Our Clients */}

            <div className='py-12 px-4 md: text-center bg-white'>
                <h1 className='font-bold font-[poppins] text-4xl py-2 text-d_grey'>Our Clients</h1>
                <p className='text-d_grey font-[Poppins] text-base'>We have been working with some Fortune 500+ clients</p>

                <section className='flex md:justify-center flex-wrap text-center  md:w-full'>
                    {
                        Logos.map((logo) => {
                            return (
                                <img src={logo} className='md:px-24 md:py-6 px-8 py-6   ' alt="logo" />
                            )
                        })
                    }
                </section>
            </div>

            {/* Community */}

            <div className='py-10 text-center bg-white flex flex-col justify-center'>
                <h1 className='font-bold font-[poppins] text-4xl py-2 text-d_grey'>Manage your entire community<br></br> in a single system</h1>
                <p className='text-d_grey font-[Poppins] text-base'>Who is Nextcent suitable for?</p>

                <section className='flex flex-wrap md:flex-nowrap justify-center py-8 text-center'>
                    {
                        cIcons.map((item) => {
                            return (
                                <div className='w-72 px-4 py-6 md:mx-32 text-center rounded-lg shadow-md mb-8'>
                                    <img src={item.icon} className='mx-auto' alt="logo" />
                                    <h1 className='text-3xl font-bold text-d_grey py-4'>{item.header}</h1>
                                    <p className='text-sm text-d_grey'>{item.text}</p>
                                </div>
                            )
                        })
                    }
                </section>
            </div>

            {/* Learn More */}

            <div className='flex md:flex-row flex-col md:justify-between md:px-32 md:py-20 py-12 justify-center items-center'>
                <section className='md:w-[50%] flex justify-end md:px-32 pb-4'>
                    <img src={image} className='w-fit' alt="" />
                </section>

                <section className='md:w-[50%] px-12 text-center md:text-left'>
                    <h1 className='font-bold font-[poppins] text-4xl py-2 text-d_grey'>The unseen of spending three <br></br> years at Pixelgrade</h1>
                    <p className='text-sm text-d_grey md:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button className='px-8 py-3 mt-8 bg-tint1 hover:bg-shade1 focus:ring focus:ring-primary text-white text-base rounded duration-200'>Learn More</button>
                </section>
            </div>

            {/* Analytics */}

            <div className='flex flex-col md:flex-row md:justify-between items-center bg-main py-12 md:px-48 px-6'>
                <section className='md:w-[50%]'>
                    <span className='md:text-4xl text-3xl text-d_grey font-[poppins] font-bold'>
                        Helping a local
                        <p className='text-primary py-2'>business reinvent itself</p>
                    </span>
                    <p className='text-md font-medium text-d_grey'>We reached here with our hard work and dedication</p>
                </section>

                <section className='md:w-[50%] flex flex-wrap  md:px-20'>
                    {
                        aIcons.map((item) => {
                            return (
                                <div className='flex items-center w-[50%] flex-wrap py-4'>

                                    <img src={item.icon} className='md:w-12 w-8 mr-4' alt="" />

                                    <section className='flex flex-col'>
                                        <h1 className='font-bold font-[poppins] md:text-2xl text-xl text-d_grey'>{item.text}</h1>
                                        <h1 className='text-l_grey font-[Poppins] text-sm'>{item.header}</h1>
                                    </section>
                                </div>
                            )
                        })
                    }
                </section>
            </div>

            {/* Learn More - 2 */}

            <div className='flex md:flex-row flex-col md:justify-between justify-center text-center md:text-left md:px-32 md:py-20 py-8 px-8'>
                <section className='md:w-[50%] flex justify-end md:px-32'>
                    <img src={phone} className='w-fit' alt="" />
                </section>

                <section className='md:w-[50%]'>
                    <h1 className='font-bold font-[poppins] md:text-4xl text-2xl py-2 text-d_grey'>How to design your site footer like<br></br> we did</h1>
                    <p className='text-sm text-d_grey md:w-[80%]'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className='px-8 py-3 mt-8 bg-tint1 hover:bg-shade1 focus:ring focus:ring-primary text-white text-base rounded duration-200'>Learn More</button>
                </section>
            </div>

            {/* Customer */}

            <div className='flex flex-col w-full py-8 text-left items-end md:pr-44 bg-main'>

                <span className='md:w-[50%] text-d_grey font-[Poppins] flex-none md:pl-12 px-6 text-base'>
                    <p>
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p><br />
                    <p className='text-primary text-lg font-[poppins] font-semibold'>Tim Smith</p>
                    <p className='text-l_grey'>British Dragon Boat Racing Association</p>

                    <section className='flex w-full flex-wrap md:flex-nowrap items-center'>
                        {
                            Logos.map((logo) => {
                                return (
                                    <img src={logo} className='md:pr-8 md:pl-0 px-8 py-6' alt="logo" />
                                )
                            })
                        }
                        <a href="#" className='text-primary text-lg font-[poppins] font-semibold w-full'>Meet all customers →</a>
                    </section>
                </span>
            </div>

            {/* Readmore */}

            <div className='relative flex flex-col md:justify-center items-center md:py-24 px-4 text-center bg-white'>
                <section className='md:w-[50%] md:py-5'>
                    <h1 className='font-bold font-[poppins] md:text-4xl text-3xl py-2 text-d_grey'>Caring is the new marketing</h1>
                    <p className='text-l_grey font-[Poppins] mx-auto md:text-sm text-base md:w-[70%]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </section>

                <section className='md:flex md:flex-row md:px-28 mb-24'>
                    {
                        readMore.map((item) => {
                            return (
                                <div className='relative md:mx-12 mb-28 md:mb-0 mt-8 md:mt-0'>
                                    <img src={item.img} className='w-full' alt="readmore" />
                                    <section className='absolute bottom-[-85px] right-10 w-[80%] bg-n_silver text-center rounded-lg shadow-2xl px-4 py-4'>
                                        <p className='text-l_grey text-xl font-semibold font-[Poppins] py-4'>{item.text}</p>
                                        <a href="#" className='text-shade1 text-lg font-[poppins] font-semibold w-full'>Read More →</a>
                                    </section>
                                </div>
                            )
                        })
                    }
                </section>
            </div>

            {/* Footer */}

            <div className='bg-main text-center py-8'>
                <h1 className='md:text-6xl text-3xl font-bold font-[poppins] text-d_grey space-y-2 py-8'>Pellentesque suscipit <br />   fringilla libero eu.</h1>
                <button className='px-8 py-3 mt-8 bg-tint1 hover:bg-shade1 focus:ring focus:ring-primary text-white text-base rounded duration-200'>Get a Demo →</button>
            </div>

            <div className=' md:grid md:grid-cols-3 md:gap-16 flex flex-wrap md:justify-center bg-secondary md:px-14 px-12 py-10 '>
                <section className='flex flex-col'>
                    <section>
                        <img src={footerlogo} className='mt-2 md:mt-0 px-0' alt="logo" />
                        <p className='text-n_silver font-light md:py-12 py-4'>Copyright © 2020 Nexcent ltd. <br />All rights reserved</p>
                    </section>

                    <section className='flex flex-wrap md:flex-nowrap py-4 md:py-0'>
                        {
                            FooterIcons.map((item) => {
                                return (
                                    <img src={item.icon} className='mx-4 ml-0' alt="icon" />
                                )
                            })
                        }
                    </section>
                </section>

                {/* Left - 1 */}
                <div className='flex'>
                    <section className='md:px-12 mr-12 md:mr-0 items-center w-full'>
                        <label className='text-n_silver text-lg font-[poppins] font-semibold'>Company</label>
                        <ul className='text-n_silver font-light py-6 space-y-2'>
                            <li >About Us</li>
                            <li >Blog</li>
                            <li >Contact Us</li>
                            <li >Pricing</li>
                            <li >Testimonials</li>
                        </ul>
                    </section>

                    <section className='w-full'>
                        <label className='text-n_silver text-lg font-[poppins] font-semibold'>Support</label>
                        <ul className='text-n_silver font-light py-6 space-y-2'>
                            <li >Help center</li>
                            <li >Terms of service</li>
                            <li >Legal</li>
                            <li >Privacy policy</li>
                            <li >Status</li>
                        </ul>
                    </section>
                </div>

                <div className='flex flex-col'>
                <label className='text-n_silver text-lg font-[poppins] font-semibold py-4'>Stay up to date</label>
                <div className='flex w-fit relative'>
                <input className='relative w-72 bg-gray-300 text-white text-lg bg-opacity-30 py-2 px-4 rounded-lg shadow-lg' type="text" placeholder='Your email address' />
                <button>
                <img src={vector} className='absolute right-3 top-3' alt="" />
                </button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Content