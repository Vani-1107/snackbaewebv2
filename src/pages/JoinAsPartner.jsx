import React from 'react'
import { Link } from 'react-router-dom';

//image
import joinAsPartner from '../assets/joinAsPartner.png'
import joinicon1 from '../assets/joinicon1.png';
import joinicon2 from '../assets/joinicon2.png';
import joinicon3 from '../assets/joinicon3.png';
import joinicon4 from '../assets/joinicon4.png';
import joinicon5 from '../assets/joinicon5.png';
import joinicon6 from '../assets/joinicon6.png';
import check from "../assets/check.png"

//component
import Footer from '../component/Footer';



const JoinAsPartner = () => {
  return (
    <div>
      {/* herosection */}
      <div className='w-[90%]  mx-auto flex lg:flex-row flex-col-reverse justify-evenly items-center min-h-[100vh] '>
        <div className='lg:w-[50%] h-fit p-[2rem]'>
          <p className='mb-[1rem] font-Roboto font-[700] text-[30px] leading-[40px] md:text-[50px] md:leading-[60px] text-[#020617]'>Join as Partner</p>
          <p className=' mb-[.5rem] font-Sen font-[700] text-[16px] leading-[25px] text-[#020617]'>Your Gateway to Enhanced Customer Relations</p>
          <p className='font-Sen font-[400] text-[16px] leading-[25px] text-[#020617]'>Welcome to SnackBae, where we revolutionise the dining experience through our innovative interactive digital menu solutions.
            We're dedicated to helping eateries to enhance their offerings, engage with a dynamic community, and boost customer loyalty. Our revolutionary QR-based interactive menu allows you to gather customer data like never before, effortlessly enhancing your business insights. With SnackBae, you can take your customer relations to new heights, setting your business apart in today's competitive landscape.</p>

          <div className='flex justify-start gap-[2rem] items-center w-full py-[1rem] '>
            <button className='bg-[#FFD628] text-[#004AAD] font-Roboto font-[400] text-[16px] leading-[18.75px] tracking-tight px-[1.5rem] py-[.7rem] rounded-md '>Get Started</button>
            <button className='border-2 border-[#004AAD] text-[#004AAD] font-Roboto font-[400] text-[16px] leading-[18.75px] tracking-tight px-[1.5rem] py-[.7rem] rounded-md '>Login</button>
          </div>
        </div>

        <img src={joinAsPartner} alt='joinAsPartner' className='sm:w-[70%] lg:w-[40%] aspect-square'/>
      </div>


      {/* feature */}
      <div className='bg-[#1E2833] w-full h-fit p-[2rem]'>
        <p className='border-2 bg-white  text-[#004AAD] font-Roboto font-[700] text-[16px] leading-[18.75px] tracking-tight px-[1.5rem] py-[.7rem] rounded-lg inline '>Feature</p>
        <div className='lg:w-[60%] w-full mt-[1rem]'>
          <p  className='mb-[1rem] font-Roboto font-[700] text-[30px] leading-[40px] md:text-[50px] md:leading-[60px] text-[#FFFFFF]'>Features for Partners</p>
          <p className='font-Sen font-[400] text-[16px] leading-[25px] text-[#ffffff]'>SnackBae focuses on loyalty, marketing, and capturing valuable customer data, empowering you to excel in the competitive food industry. Become our partner and elevate your business to unprecedented levels of success. Explore our offerings below.</p>
        </div>

        <div className='flex justify-evenly  flex-wrap gap-[2rem] py-[4rem] '>
          <div className=' max-w-[400px] w-full h-fit'>
            <img src={joinicon1} alt='joinicon1'/>
            <p className='font-Roboto font-[600] text-[18px] leading-[40px] md:leading-[56px] md:text-[22px] text-white'>Interactive Digital Menu</p>
            <p className='font-Sen font-[400] text-[14px] leading-[18px] md:leading-[25px] md:text-[16px] text-white '>Engage customers with our Interactive Digital Menu, utilizing QR codes for digital menus and community-driven recommendations.</p>
          </div>

          <div className=' max-w-[400px] w-full h-fit'>
            <img src={joinicon2} alt='joinicon2'/>
            <p className='font-Roboto font-[600] text-[18px] leading-[40px] md:leading-[56px] md:text-[22px] text-white'>Commission-less Payments</p>
            <p className='font-Sen font-[400] text-[14px] leading-[18px] md:leading-[25px] md:text-[16px] text-white '>Engage customers with our Interactive Digital Menu, utilizing QR codes for digital menus and community-driven recommendations.</p>
          </div>

          <div className=' max-w-[400px] w-full h-fit'>
            <img src={joinicon3} alt='joinicon3'/>
            <p className='font-Roboto font-[600] text-[18px] leading-[40px] md:leading-[56px] md:text-[22px] text-white'>Customer Data & Insights</p>
            <p className='font-Sen font-[400] text-[14px] leading-[18px] md:leading-[25px] md:text-[16px] text-white '>Gain full transparency into customer data capture and insights, empowering you to make informed decisions and tailor your services to your customer base.</p>
          </div>


          <div className=' max-w-[400px] w-full h-fit'>
            <img src={joinicon4} alt='joinicon4'/>
            <p className='font-Roboto font-[600] text-[18px] leading-[40px] md:leading-[56px] md:text-[22px] text-white'>Automated Marketing Campaigns </p>
            <p className='font-Sen font-[400] text-[14px] leading-[18px] md:leading-[25px] md:text-[16px] text-white '>Streamline your marketing efforts with our automated campaign tools, reaching your customers effectively and efficiently.</p>
          </div>


          <div className=' max-w-[400px] w-full h-fit'>
            <img src={joinicon5} alt='joinicon5'/>
            <p className='font-Roboto font-[600] text-[18px] leading-[40px] md:leading-[56px] md:text-[22px] text-white'>Loyalty-Based Offer Tools</p>
            <p className='font-Sen font-[400] text-[14px] leading-[18px] md:leading-[25px] md:text-[16px] text-white '>Customize offers and rewards to foster customer loyalty and satisfaction, driving repeat business and revenue growth.</p>
          </div>


          <div className=' max-w-[400px] w-full h-fit'>
            <img src={joinicon6} alt='joinicon6'/>
            <p className='font-Roboto font-[600] text-[18px] leading-[40px] md:leading-[56px] md:text-[22px] text-white'>Influencer Marketing Services</p>
            <p className='font-Sen font-[400] text-[14px] leading-[18px] md:leading-[25px] md:text-[16px] text-white '>Leverage our in-house influencer team and collaborate with industry experts to expand your reach on social media and engage with a broader audience.</p>
          </div>
        </div>

      </div>


{/* copy
 */}

<div className='w-full h-fit relative'>
                <div className='relative w-full h-fit  flex flex-col items-center '>
                    <div className='w-full  bg-[#EAB308] pt-[2rem] pb-[10rem] text-center'>
                        <p className='font-roboto text-white font-[600] text-[2.6rem]'>Simple Pricing for your business</p>
                        <p className='font-roboto text-gray-200 font-[100] text-[1.3rem]'>plans that are carefully crafted to suit your business</p>
                    </div>
                    <div className='md:w-[80%] relative top-[-120px] mx-auto text-center  '>
                        <div className='mt-[2rem] lg:h-[600px] h-fit flex flex-row flex-wrap  gap-[2rem] justify-center '>
                            {/* white Part */}
                            <div className='w-[100%]  max-w-[400px] h-fit  min-h-[600px] mx-auto p-[2rem] flex flex-col bg-white justify-center items-center rounded-md shadow-lg'>
                                <div className='border-b-2 text-start'>
                                    <p className=' font-roboto font-[500] leading-[51px] text-[2.8rem] tracking-[-1px] '>Starter plan</p>
                                    <p className='text-gray-400 font-roboto  leading-[32px]'>Unleash the Power of Your Business with Free Plan.</p>
                                    <p className=' font-roboto font-[600] leading-[71px] text-[3rem] tracking-[-1px] '>FREE <span className='font-roboto font-[300] text-gray-400 leading-[29px] text-[1.3rem] tracking-[-1px]'>Forever</span></p>
                                </div>
                                <div className='w-[100%]'>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Listing</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Enhanced Menu Visibility</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Manage Table Booking </p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Payment Integration</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Custom Offers</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Business Analytics</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Marketing Services</p>
                                    </div>
                                    <div className='mt-[1rem]'></div>
                                    <Link><p className=' py-1 border-2 border-black font-roboto font-[400] rounded-md leading-[40px]'>Get Started</p></Link>
                                </div>
                            </div>

                            {/* yellow part */}
                            <div className='w-[100%] h-fit max-w-[400px] mx-auto p-[2rem] flex flex-col bg-[#EAB308] justify-center items-center rounded-md shadow-xl'>
                                <div className='border-b-2 text-start'>
                                    <p className=' font-roboto font-[500] leading-[51px] text-[2.8rem] tracking-[-1px] '>Premium</p>
                                    <p className='text-[#3C3C3C] font-roboto  leading-[32px]'>Take Your Business to the Next Level with Business Plan.</p>
                                    <p className=' font-roboto font-[600] leading-[71px] text-[3rem] tracking-[-1px] '>₹699 <span className='font-roboto font-[300] text-[#3C3C3C] leading-[29px] text-[1.3rem] tracking-[-1px]'>per month</span></p>
                                </div>
                                <div className='w-[100%]'>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>All Free features</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Complete Business Analytics</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Customer Insights</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Commission-less Payments</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Loyalty Tools</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Advanced Marketing Tools</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>24/7 Priority Support</p>
                                    </div>
                                    <div className='mt-[1rem]'></div>
                                    <Link><p className=' py-1 bg-[#1B223C] text-[#EAB308] font-roboto font-[400] rounded-md leading-[40px]'>contact sales</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


      <Footer/>
    </div>
  )
}

export default JoinAsPartner