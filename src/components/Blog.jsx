import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const {id, title,  image, author, authorImg } = blog;
    return (
        <div className='p-3 mt-10 rounded-lg bg-violet-50 '>
            <img className='object-cover w-full rounded-lg h-80 ' src={image} alt="" />
            <h1 className='mt-5 text-2xl font-thin'>{title}</h1>
            <div className='flex items-center gap-5 mt-2'>
                <img className='object-cover w-10 h-10 rounded-full' src={authorImg} alt="" />
                <p className='text-lg text-zinc-500'>{author}</p>
            </div>
            <Link to={`/blog/${id}`}>
                <button className="px-4 py-1 mt-3 font-semibold border hover:bg-violet-500 hover:text-white text-violet-500 border-violet-300 rounded-2xl">Read now </button>
            </Link>
        </div>
    );
};

Blog.propTypes = {

};

export default Blog;