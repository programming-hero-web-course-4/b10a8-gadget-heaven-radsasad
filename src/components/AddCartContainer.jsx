import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddCartList from './AddCartList';
import { IoBagCheckOutline } from "react-icons/io5";


const AddCartContainer = ({ cartList, handleSort, handleDelete, amount , setCartList, setAmount , setWishList }) => {
    const roundNumber = parseFloat(amount.toFixed(2))
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteAll = () => {
        localStorage.clear();
        setIsModalOpen(true);
        setCartList([])
        setWishList([])
        
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setAmount(0)
    };

    return (
        <div className='max-w-5xl m-auto mt-10 mb-10'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-bold'>Cart</h1>
                    <div className='flex items-center justify-center gap-5'>
                        <p className='text-xl font-bold'>Total price : $ {roundNumber}</p>
                        <button onClick={() => handleSort('price')} className='px-4 py-1 mt-2 font-semibold border hover:bg-violet-100 hover:text-violet-800 text-violet-500 border-violet-300 rounded-2xl'>Short by price</button>
                        <button onClick={() => handleDeleteAll()} className='px-4 py-1 mt-2 font-semibold text-white bg-purple-500 hover:bg-violet-500 hover:text-violet-80 rounded-2xl'>Purchase</button>
                    </div>
                </div>
                {
                    cartList.map(cart => <AddCartList handleDelete={handleDelete} key={cart.product_id} cart={cart}></AddCartList>)
                }
                {isModalOpen && (
                    <div className="modal modal-open">
                        <div className="modal-box">
                            <div className='flex items-center justify-center'>
                                <IoBagCheckOutline className='text-center text-green-500 text-7xl ' />
                            </div>
                            <h3 className="mt-5 text-2xl font-bold text-center">Payment Successfully</h3>
                            <p className="py-4 text-center text-zinc-500">Thanks for purchasing</p>
                            <p className="text-center text-zinc-500">Total : ${roundNumber}</p>
                            <div className="flex justify-center">
                                <button onClick={closeModal} className="px-10 py-1 mt-2 font-semibold text-white bg-purple-500 hover:bg-violet-500 hover:text-violet-80 rounded-2xl">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

AddCartContainer.propTypes = {

};

export default AddCartContainer;