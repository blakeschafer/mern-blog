import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPosts from './container/SuggestedPosts';

const breadCrumbsData = [
    {name: "Home", link: '/'},
    {name: "Blog", link: '/blog'},
    {name: "Article title", link: '/blog/1'}

];

const tagsData = [
    "Education",
    "Development",
    "Life",
    "Self-Improvement",
    "Reading",
];

const postsData = [
    {
        _id: "1",
        image: images.Post1Image,
        title: "Why I Majored in Computer Science",
        createdAt: "2023-01-28T15:35:53.607+0000"
    },
    {
        _id: "2",
        image: images.Post1Image,
        title: "Why I Majored in Computer Science",
        createdAt: "2023-01-28T15:35:53.607+0000"
    },
    {
        _id: "3",
        image: images.Post1Image,
        title: "Why I Majored in Computer Science",
        createdAt: "2023-01-28T15:35:53.607+0000"
    }
]

const ArticleDetailPage = () => {
  return (
    <MainLayout>
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
            <article className='flex-1'>
                <BreadCrumbs data={breadCrumbsData} />
                <img className='rounded-xl w-full' src={images.Post1Image} alt="laptop" />
                <Link to="/blog?category=selectedCategory" className='text-primary text-sm font-sourcecodepro inline-block mt-4 md:text-base'>
                    EDUCATION
                </Link>
                <h1 className='text-xl font-medium font-prompt mt-4 text-dark-hard md:text-[26px]'>Why I majored in Computer Science</h1>
                <div className='font-sourcecodepro mt-4 text-dark-light'>
                    <p className='leading-7'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tempus nisi, quis bibendum mauris. Nullam venenatis, turpis non malesuada mollis, nunc sapien pretium turpis, 
                    ac venenatis orci orci vel nibh. Sed tincidunt, sapien non vehicula pretium, erat felis finibus odio, et venenatis ipsum nulla eu justo. Mauris vel nulla semper, convallis massa quis, 
                    suscipit elit. In tellus mi, rutrum eget quam ut, efficitur tristique nunc. Sed in posuere lectus. Praesent non augue arcu. Maecenas porta tincidunt aliquet. Sed urna lorem, cursus eu lacinia eget, 
                    </p>
                </div>
            </article>
            <SuggestedPosts header="Latest Article" posts={postsData} tags={tagsData} className='mt-8 lg:mt-0 lg:max-w-xs'/>
        </section>
    </MainLayout>
  )
}

export default ArticleDetailPage
