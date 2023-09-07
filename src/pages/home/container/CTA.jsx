import React from 'react'

import {images} from '../../../constants';

const CTA = () => {
  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#93e9be" fill-opacity="1" d="M0,0L48,16C96,32,192,64,288,90.7C384,117,480,139,576,138.7C672,139,768,117,864,101.3C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        {/* <svg className='w-full h-auto max-h-40' preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,0L48,16C96,32,192,64,288,90.7C384,117,480,139,576,138.7C672,139,768,117,864,101.3C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
    <section className='relative bg-primary px-5'>
        <div className='container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center'>
            <div className='col-span-12 lg:col-span-6'>
                <h2 className='text-white font-prompt font-bold text-2xl md:text-center md:text-4xl md:leading-normal lg:text-left'>Recieve Articles in your eMailbox</h2>
                <div className='w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0'>
                    <input type="text" placeholder='Your Email' className='px-4 py-3 rounded-lg w-full placeholder:text-dark-hard'/>
                    <button className='px-4 py-3 rounded-lg w-full bg-dark-light text-white font-bold md:w-fit md:whitespace-nowrap'>Get Started</button>
                </div>
                <p className='text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left'>
                    <span className='font-bold text-white md:not-italic md:font-normal md:text-dark-light'>Thank you for signing up!</span> More content coming soon...</p>
            </div>
            <div className='col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last'>
                <div className='w-2/3 mx-auto relative'>
                    <div className='w-1/2 h-1/2 bg-black rounded-lg absolute top-[10%] -right-[8%]'/>
                    <div className='w-1/2 h-1/2 bg-white rounded-lg opacity-[.45] absolute bottom-[10%] -left-[8%]'/>
                    <div className=' w-full bg-white p-3 z-1 relative rounded-xl'>
                        <img src={images.CtaImage} alt='title' className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-50'/>
                            <div className='p-5'>
                                <h2 className='font-prompt font-bold text-xl text-dark-hard md:text-2xl lg:text-[28px]'>I am addicted to Social Media</h2>
                                <p className='text-dark-light mt-3 text-sm md:text-lg'>The struggle of being a slave to your phone</p>
                            </div>
                    </div>                  
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default CTA
