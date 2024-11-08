import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import { CiCircleChevRight } from "react-icons/ci";
import { Helmet } from 'react-helmet';

const BlogDetails = () => {
    const data = useLoaderData()
    const { blogId } = useParams()
    const singleBlog = data.find(blog => blog.id === parseInt(blogId))
    const {description,  title, image, author, authorImg , categoryDescription } = singleBlog;
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='py-10 bg-purple-500 min-h-[150px]  relative '>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-4xl font-thin text-white'>Blog Details</h1>
                    <p className='mt-5 text-zinc-200'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
                <div className='flex items-center justify-center gap-3 mt-7'>

                </div>
            </div>
            <div className='max-w-4xl m-auto mt-10 mb-10'>
                <img className='w-full h-[450px] object-cover rounded-xl' src={image} alt="" />
                <h1 className='mt-5 text-4xl font-thin'>{title}</h1>
                <div className='flex items-center gap-5 mt-2'>
                    <img className='object-cover w-10 h-10 rounded-full' src={authorImg} alt="" />
                    <p className='text-lg text-zinc-500'>{author}</p>
                </div>
                <p className='mt-4 text-zinc-600'>{description}</p>
                <ol className='mt-5 text-zinc-500'>
                    {
                        categoryDescription.map((category , index) => 
                            <li key={index} className='flex items-center gap-3 py-1 '>
                        <CiCircleChevRight className='text-violet-600' />
                        {category}
                    </li>)
                    }
                </ol>
            </div>
        </div>
    );
};

BlogDetails.propTypes = {

};

export default BlogDetails;