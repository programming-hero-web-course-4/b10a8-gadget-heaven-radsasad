import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BannerHeading = props => {
    return (
        <div className='flex flex-col items-center justify-center text-center lg:p-5'>
            <h1 className='mt-10 text-4xl font-semibold text-white'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className='mt-5 text-zinc-300'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <Link to='/dashboard'  className='px-5 py-2 mt-5 font-semibold bg-white border text-violet-600 rounded-3xl border-violet-200'>Shop now</Link>
        </div>
    );
};

BannerHeading.propTypes = {
    
};

export default BannerHeading;