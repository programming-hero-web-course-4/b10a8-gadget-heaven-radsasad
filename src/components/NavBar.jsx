import PropTypes from 'prop-types';

import Menu from './Menu';
import { Link, NavLink } from 'react-router-dom';
import BannerHeading from './BannerHeading';
import BannerImage from './BannerImage';

const NavBar = () => {

    return (
        <div className='p-1 -mt-16 border rounded-box'>
            <div className='bg-purple-500  rounded-box min-h-[530px]'>
                
                <BannerHeading></BannerHeading>
                <BannerImage></BannerImage>
            </div>
        </div>
    );
};

NavBar.propTypes = {

};

export default NavBar;