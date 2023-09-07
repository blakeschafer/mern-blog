import React from 'react';
import { images } from "../../../constants";
import { GrSearch} from "react-icons/gr";
const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
      <div className='mt-10 lg:w-1/2'>
        <h1 className='font-sourcecodepro text-3xl text-center font-bold text-dark-hard md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]'>Lenny writes on the internet</h1>
        <p className='font-sourcecodepro text-dark-light mt-4 text-center md:text-xl lg:text-xl xl:text-xl lg:text-left'>
            developer, creator, programmer, videographer, athlete, musician writes everyday thoughts and ideas in attempt to grow and learn more life
        </p>
        <div className='flex flex-col gap-y-2.5 mt-top lg:mt-6 xl:mt-10 relative'>
        <div className='relative'>
            <GrSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]' />
            <input className="placeholder:font-bold font-semibold text-dark-hard placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4" type="text" placeholder='Search Article'/>
        </div>
        <button className='w-full bg-primary text-black font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>Search</button>
      </div>
      <div className='flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
        <span className='text-dark-hard font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base'>Popular Tags:</span>
        <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base'>
            <li className='rounded-lg bg-primary bg-opacity-80 px-3 py-1.5 text-black font-semibold'>School</li>
            <li className='rounded-lg bg-primary bg-opacity-80 px-3 py-1.5 text-black font-semibold'>Journal</li>
            <li className='rounded-lg bg-primary bg-opacity-80 px-3 py-1.5 text-black font-semibold'>Development</li>
        </ul>
      </div>
      </div>
      <div className='hidden lg:block lg:1/2 h-100px w-100px'>
        <img className="" src={images.HeroImage} alt="users are reading articles" style={{height:500, width:500}}/>
      </div>
    </section>
  )
}

export default Hero
