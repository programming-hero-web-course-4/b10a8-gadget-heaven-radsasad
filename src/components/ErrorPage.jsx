
import PropTypes from 'prop-types';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='m-auto max-w-7xl'>
            <div className='flex items-center justify-center mt-5 mb-5'>
                <NavLink to='/'><button to='/dashboard' className='px-5 py-2 mt-5 font-semibold text-center bg-white border text-violet-600 rounded-3xl border-violet-200'>Go to home

                </button></NavLink>
            </div>
            <div className="border mockup-window bg-base-300">

                <div className="flex flex-col items-center justify-center px-4 py-16 text-4xl font-bold text-center bg-base-200">
                    <h1 className='text-4xl font-bold'> No data Found</h1>
                    <p className='mt-5 text-base font-semibold'>Status : 404</p>
                </div>
            </div>

        </div>
    );
};

ErrorPage.propTypes = {

};

export default ErrorPage;