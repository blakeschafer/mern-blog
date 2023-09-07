import React from 'react'
import { images } from "../constants";
import { FaInstagram, FaGithub, FaYoutube, FaLinkedin, FaLink } from "react-icons/fa";
import { BsFillBalloonHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <section className='bg-primary'>
      <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10'>
        <div className='col-span-5 md:col-span-4 lg:col-span-2'>
          <h3 className='text-dark-light font-bold md:text-lg lg:text-xl'>Product</h3>
          <ul className='text-[#959ead] tetx-sm mt-5 space-y-4 md:text-base'>
            <li>
              <a href="/">Landingpage</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Source Code</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span4 md:col-start-9 lg:col-span2'>
          <h3 className='text-dark-light font-bold md:text-lg lg:text-xl'>Services</h3>
          <ul className='text-[#959ead] tetx-sm mt-5 space-y-4 md:text-base'>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
        <div className='col-span-10 md:order-first md:col-span-4'>
          <img src={images.Logo} alt="logo" className='brightness-0 invert mx-auto md:mx-0' style={{height:100, width:100}}/>
          <p className='text-sm font-prompt text-bold text-center mt-4 md:text-left md:text-base'>Always Learning, Building, Growing</p>
          <ul className='flex justify-center items-center mt-5 space-x-4 text-dark-hard md:justify-start'>
            <li>
              <a href="/">
              <FaGithub className='w-6 h-auto' />
              </a>
            </li>
            <li>
              <a href="/">
              <FaYoutube className='w-6 h-auto' />
              </a>
            </li>
            <li>
              <a href="/">
              <FaLinkedin className='w-6 h-auto' />
              </a>
            </li>
            <li>
              <a href="/">
              <FaLink className='w-6 h-auto' />
              </a>
            </li>
            <li>
              <a href="/">
              <FaInstagram className='w-6 h-auto' />
              </a>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-center space-4 md:col-span-12 lg:col-span-10'>
          <div className='bg-primary text-white p-3 rounded-full'>
            <BsFillBalloonHeartFill className='w-7 h-auto'/>
          </div>
          <p className='font-bold font-sourcecodepro italic'> Copyright @ 2023. Coded with Love.</p>
        </div>
      </footer>
    </section>
  )
}

export default Footer