
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { getStoredCartList } from '../utility/addToDb';


const DashBoard = () => {
    const [cartList , setCartList] = useState([])
    const allProducts = useLoaderData()
    useEffect(()=>{
        const storedCartList = getStoredCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));
   
        const addCartList =  allProducts.filter(cart => storedCartListInt.includes(cart.product_id));
        setCartList(addCartList)
        
    },[])
    return (
        <div>
            
            <div className='py-10 bg-purple-500 min-h-[150px]  relative '>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-4xl font-thin text-white'>Dashboard</h1>
                    <p className='mt-5 text-zinc-200'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
                <div className='flex items-center justify-center gap-3 mt-7'>
                    
                </div>
            </div>
            
        </div>
    );
};

DashBoard.propTypes = {

};

export default DashBoard;



