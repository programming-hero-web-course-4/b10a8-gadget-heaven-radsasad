import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Blog from '../components/Blog';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    const blogs = useLoaderData()
    
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gadget Heaven | Blogs</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='py-10 bg-purple-500 min-h-[150px]  relative '>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-4xl font-thin text-white'>Blogs</h1>
                    <p className='mt-5 text-zinc-200'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
                <div className='flex items-center justify-center gap-3 mt-7'>

                </div>
            </div>
            <div className='grid max-w-6xl grid-cols-1 gap-6 m-auto mt-5 mb-10 lg:grid-cols-2'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    
};

export default Blogs;