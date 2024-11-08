
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
    const location = useLocation();
    useEffect(() => {
        // Determine the title based on the current path
        const getTitle = (pathname) => {
            switch (pathname) {
                case '/':
                    return 'Home';
                case '/about':
                    return 'About Us';
                case '/products':
                    return 'Our Products';
                case '/contact':
                    return 'Contact Us';
                default:
                    return 'My App'; // Default title
            }
        };
        document.title = getTitle(location.pathname);
    }, [location.pathname]);

    return null;
};

DynamicTitle.propTypes = {

};

export default DynamicTitle;