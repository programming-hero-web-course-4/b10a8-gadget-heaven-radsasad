import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import { CiCircleChevRight } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { addToStoredCartList } from '../utility/addToDb';

const ProductDetails = () => {
    const { productId } = useParams();
    const data = useLoaderData()
    const product = data.find(product => product.product_id === parseInt(productId))
    const { product_image, product_title, price, availability, description, specification, rating } = product || {};
    const handleAddToCart = (id) => {
        addToStoredCartList(id)
    }
    return (
        <div className=''>
            <div className='py-10 bg-purple-500 min-h-[350px]  relative '>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-4xl font-thin text-white'>Product Details</h1>
                    <p className='mt-5 text-zinc-200'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>

                <div className="absolute top-[600px] lg:top-[400px] bottom-0 left-0 right-0 min-h-[800px] lg:min-h-[450px] max-w-5xl m-auto bg-white border hero rounded-2xl">
                    <div className="flex-col hero-content lg:flex-row">
                        <img
                            src={product_image}
                            className="max-w-sm rounded-lg " />
                        <div>
                            <h1 className="text-2xl font-semibold text-slate-500">{product_title}</h1>
                            <p className='mt-1 text-base text-zinc-600'>Price : ${price}</p>
                            {
                                availability ? <button className='px-2 bg-lime-100 rounded-3xl '>In Stock</button> : <button className='px-2 bg-red-100 rounded-3xl '>Out of Stock</button>
                            }
                            <p className="py-2 text-zinc-500">{description}</p>
                            <p className='font-bold'>Specification:</p>
                            <ol className='mt-2 text-zinc-500'>
                                {
                                    specification.map((item, index) =>
                                        <li key={index} className='flex items-center gap-3'>
                                            <CiCircleChevRight className='text-violet-600' />
                                            {item}
                                        </li>)
                                }
                            </ol>
                            <p className='font-bold'>Rating :</p>
                            <div className='flex items-center gap-4 mt-2'>
                                <div className=" rating">
                                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" defaultChecked />
                                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                </div>
                                <p className='px-2 text-white bg-violet-500 rounded-3xl'>{rating}</p>
                            </div>

                            <div className='flex gap-5 mt-5'>
                                <button onClick={() => handleAddToCart(productId)} className="px-3 py-1 text-white bg-violet-600 hover:bg-violet-800 rounded-3xl">Add to cart</button>
                                <button className='px-2 py-1 border rounded-full hover:bg-violet-100 hover:text-zinc-600 border-violet-200'><IoIosHeartEmpty /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='min-h-[650px] lg:min-h-[300px]'></div>

        </div>
    );
};

ProductDetails.propTypes = {

};

export default ProductDetails;