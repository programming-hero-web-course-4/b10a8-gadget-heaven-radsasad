import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import Cart from './Cart';
import DataNotFount from './DataNotFount';

const Carts = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [carts, setCarts] = useState([])
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(cart => cart.category === category)
            setCarts(filteredByCategory)
        }
        else{
            setCarts(data)
        }
       
    }, [category, data])

    return (
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {
                carts.map(cart => <Cart key={cart.product_id} cart={cart}></Cart>  )
            }
        </div>
    );
};

Carts.propTypes = {

};

export default Carts;