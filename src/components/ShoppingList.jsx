import PropTypes from 'prop-types';
import WishList from './WishList';

const ShoppingList = ({wishList}) => {
    
    return (
        <div className='max-w-5xl m-auto mt-10 mb-10'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-bold'>Wish list</h1>
                    
                </div>
                {
                    wishList.map(wish=> <WishList key={wish.product_id} wish={wish}></WishList>)
                }
            </div>
        </div>
    );
};

ShoppingList.propTypes = {
    
};

export default ShoppingList;