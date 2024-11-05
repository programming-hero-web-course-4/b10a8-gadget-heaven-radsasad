import PropTypes from 'prop-types';

import Menu from './Menu';
import { Link, NavLink } from 'react-router-dom';
import BannerHeading from './BannerHeading';
import BannerImage from './BannerImage';

const NavBar = props => {

    return (
        <div className='p-1 mt-5 border rounded-box'>
            <div className='bg-purple-500 rounded-box min-h-[530px]'>
                <Menu></Menu>
                <BannerHeading></BannerHeading>
                <BannerImage></BannerImage>
            </div>
        </div>
    );
};

NavBar.propTypes = {

};

export default NavBar;