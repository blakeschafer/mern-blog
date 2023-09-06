import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { images } from "../constants";
import { MdArrowDropDown } from "react-icons/md";

const navItemInfo = [
    {name: "Home", type: "link"},
    {name: "Articles", type: "link"},
    {name: "Pages", type: "dropdown", items: ["About", "Contact"]},
    {name: "FAQ", type: "link"},
]

const NavItem = ({ item }) => {
return (
    <li className='relative group'>
        *
        {item.type === "link" ? ( <> <a href="/" className='px-4 py-2 group-hover:text-'> 
            {item.name} 
        
        </a>
        <span className='text-yellow-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:opacity-100'>
        
        </span></> ) : (
        <>
        
        <a href="/" className='px-4 py-2 items-center-flex'> 
        
            {item.name}
            
        </a>
        <div className="hidden transition-all duration-500 pt-4 absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max">
            <ul className="flex flex-col shadow-lg rounded-lg overflow-hidden">
                {item.items.map((page) => (
                    <a href="/" className="hover:bg-dark-hard hover:text-white px-4 py-2 text-dark lg:text-dark-hard">
                    {page}
                    </a>
                ))}
                
            </ul>
            
        </div>
        </>
        )}
    </li>
    );
};

const Header = () => {
const [navIsVisible, setNavIsVisible] = useState(false);

const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
        return !curState;
    });
};

  return (
    <section>
        <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
            <div>
                <img className="w-16" src={images.Logo} alt="logo" />
            </div>
            <div className="lg:hidden z-50">
                {navIsVisible ? (<AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandler} /> ) : ( <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />)}
            </div>
            <div className={`${navIsVisible ? "right-0" : "-right-full"} transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 -right-full lg:static gap-x-9 items-center`}>
                <ul className='text-white items-center gap-y-5 lg:text-dark-hard flex flex-col lg:flex-row gap-x-2 font-semibold'>
                    {navItemInfo.map((item) => (
                        <NavItem key={item.name} item={item} />
                    ))}
                </ul>
                <button className='mt-5 lg:mt-0 border-2 border-yellow-500 px-6 py-2 rounded-full text-gray-500 font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-300'>Sign In</button>
            </div>
        </header>
    </section>
  )
}

export default Header
