import PropTypes from 'prop-types';
import { IoMdClose } from "react-icons/io";

const AddCartList = ({ cart , handleDelete }) => {
    const { product_id, product_title, product_image, price, description } = cart;
    return (
        <div className="rounded-md bg-zinc-100">
            <div className="flex items-center justify-between px-2 py-1 ">
                <div className='flex items-center gap-5'>
                    <img src={product_image} className="h-24 max-w-sm rounded-lg" />
                    <div>
                        <h1 className="text-xl font-semibold text-zinc-500">{product_title}</h1>
                        <p className="py-1 text-zinc-400">
                            {description}
                        </p>
                        <p className='text-zinc-500'>price ${price}</p>
                    </div>
                </div>
                <div>
                    <button onClick={()=> handleDelete(product_id)} className='w-6 h-6 px-1 text-red-500 bg-white border border-red-400 rounded-full'><IoMdClose /></button>
                </div>
            </div>
        </div>
    );
};

AddCartList.propTypes = {

};

export default AddCartList;