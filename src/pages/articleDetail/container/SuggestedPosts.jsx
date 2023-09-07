import React from 'react';
import { Link } from "react-router-dom";


const SuggestedPosts = ({ className, header, posts = [], tags }) => {
  return (
    <div className={`w-full shadow-2xl shadow-blue-500/20 rounded-lg p-4 ${className}`}>
      <h2 className='font-prompt font-medium text-dark-hard md:text-xl'>{header}</h2>
      <div className='grid gap-y-5 mt-5 md:grip-cols-2 md:gap-x-5 lg:grid-cols-1'>
        {posts.map((item) => (
            <div key={item._id} className='flex space-x-3 flex-nowrap items-center'>
                <img className="apect-square object-cover rounded-lg w-1/5"src={item.image} alt="laptop" />
                <div className='text-sm font-prompt text-dark-hard font-medium'>
                    <h3 className='text-sm font-prompt text-dark-hard font-medium md:text-base lg:text-lg'>{item.title}</h3>
                    <span className='text-xs opacity-60'>
                        {new Date(item.createdAt).toLocaleDateString("en-US", {day: "numeric", month: "short", year: "numeric"})}
                    </span>
                </div>
            </div>
        ))}
      </div>
      <h2 className='font-prompt font-medium text-dark-hard mt-8 md:text-xl'>Tags</h2>
      <div className='flex flex-wrap gap gap-x-2 gap-y-2 mt-4'>
        {tags.map((item) => (
            <Link to="/" className='inline-blockrounded-md px-3 py-1.5 bg-primary font-sourcecodepro text-xs text-white md:text-sm'>
                {item}
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SuggestedPosts;