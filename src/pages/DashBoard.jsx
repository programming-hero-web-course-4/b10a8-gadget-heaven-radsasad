
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartList, getStoredWishList } from '../utility/addToDb';

import AddCartContainer from '../components/AddCartContainer';
import ShoppingList from '../components/ShoppingList';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';


const DashBoard = () => {
    const [cartList, setCartList] = useState([])
    const [sort, setSort] = useState('')

    const [amount, setAmount] = useState(0);

    const allProducts = useLoaderData()
    useEffect(() => {
        const storedCartList = getStoredCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));

        const addCartList = allProducts.filter(cart => storedCartListInt.includes(cart.product_id));
        setCartList(addCartList)

        const totalAmount = addCartList.reduce((accumulator, transaction) => {
            return accumulator + transaction.price;

        }, 0);
        setAmount(totalAmount)
    }, [])

    const [wishList, setWishList] = useState([])
    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWistListInt = storedWishList.map(id => parseInt(id));
        const addWishList = allProducts.filter(wish => storedWistListInt.includes(wish.product_id));
        setWishList(addWishList)
    }, [])

    const [isActive, setIsActive] = useState({
        cart: true,
        status: 'cart'
    })
    const handleIsActiveStatus = (status) => {
        if (status == 'cart') {
            setIsActive({
                cart: true,
                status: 'cart'
            })
        }
        else {
            setIsActive({
                cart: false,
                status: 'wishlist'
            })
        }
    }
    const handleSort = sortType => {
        setSort(sortType);
        if (sortType === 'price') {
            const storedCartList = [...cartList].sort((a, b) => b.price - a.price);
            setCartList(storedCartList)
        }
    }
    const handleDecreasePrice = (id) => {
        const product = cartList.find((p) => p.product_id == id);
        setAmount(amount - product.price)
        // console.log(product)
    }
    const handleDelete = (id) => {
        handleDecreasePrice(id)
        const remainingProducts = cartList.filter((product => product.product_id != id));
        setCartList(remainingProducts)
        toast.success(" successfully delete your product  !", {
            position: "top-center"
        });
    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='py-10 bg-purple-500 min-h-[150px]  relative '>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-4xl font-thin text-white'>Dashboard</h1>
                    <p className='mt-5 text-zinc-200'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
                <div className='flex items-center justify-center gap-3 mt-7'>
                    <button onClick={() => handleIsActiveStatus('cart')}
                        className={`${isActive.cart ? "px-10 py-1 mt-2 font-semibold text-purple-700 border bg-white border-violet-300 rounded-2xl" : "px-10 py-1 mt-2 font-semibold text-white border border-white  rounded-2xl"}`}>Cart</button>
                    <button onClick={() => handleIsActiveStatus('wish;ist')}
                        className={`${isActive.cart ? "px-10 py-1 mt-2 font-semibold text-white border border-white  rounded-2xl" : "px-10 py-1 mt-2 font-semibold text-purple-700 border bg-white border-violet-300 rounded-2xl"}`}>Wishlist</button>
                </div>
            </div>
            {
                isActive.cart ? <AddCartContainer setWishList={setWishList} setAmount={setAmount} setCartList={setCartList} amount={amount} handleSort={handleSort} cartList={cartList} handleDelete={handleDelete}></AddCartContainer> : <ShoppingList wishList={wishList}></ShoppingList>
            }


        </div>
    );
};

DashBoard.propTypes = {

};

export default DashBoard;



