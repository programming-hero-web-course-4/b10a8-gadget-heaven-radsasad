
import PropTypes from 'prop-types';
import Menu from './Menu';

const ErrorPage = () => {
    return (
        <div className='m-auto max-w-7xl'>
            <Menu></Menu>
            <div className="border mockup-window bg-base-300">
            
            <div className="flex justify-center px-4 py-16 text-4xl font-bold bg-base-200">No data Found</div>
        </div>
        </div>
    );
};

ErrorPage.propTypes = {

};

export default ErrorPage;