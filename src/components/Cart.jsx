import PropTypes from 'prop-types';

const Cart = ({ cart }) => {
    const { product_title, product_image, price } = cart;
    return (
        <div className="p-2 border card">
            <figure>
                <img className='w-full' src={product_image} alt={product_title} />
            </figure>
            <div className="text-center">
                <h2 className="text-lg font-semibold text-slate-600">{product_title}</h2>
                <p className='mt-1 font-semibold text-slate-500'>Price : $ {price}</p>
                <div className="justify-center card-actions">
                    <button className="px-4 py-1 mt-2 font-semibold border hover:bg-violet-500 hover:text-white text-violet-500 border-violet-300 rounded-2xl">View Details</button>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {

};

export default Cart;