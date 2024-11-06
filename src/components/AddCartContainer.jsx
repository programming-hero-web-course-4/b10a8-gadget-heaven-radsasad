import React from 'react';
import PropTypes from 'prop-types';
import AddCartList from './AddCartList';

const AddCartContainer = ({cartList , handleSort , handleDelete , amount}) => {
    const roundNumber = parseFloat(amount.toFixed(2)) 
    
    return (
        <div className='max-w-5xl m-auto mt-10 mb-10'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-bold'>Cart</h1>
                    <div className='flex items-center justify-center gap-5'>
                        <p className='text-xl font-bold'>Total price : $ {roundNumber}</p>
                        <button onClick={()=> handleSort('price')} className='px-4 py-1 mt-2 font-semibold border hover:bg-violet-100 hover:text-violet-800 text-violet-500 border-violet-300 rounded-2xl'>Short by price</button>
                        <button className='px-4 py-1 mt-2 font-semibold text-white bg-purple-500 hover:bg-violet-500 hover:text-violet-80 rounded-2xl'>Purchase</button>
                    </div>
                </div>
                {
                    cartList.map(cart => <AddCartList handleDelete={handleDelete} key={cart.product_id} cart={cart}></AddCartList>)
                }
            </div>
        </div>
    );
};

AddCartContainer.propTypes = {

};

export default AddCartContainer;