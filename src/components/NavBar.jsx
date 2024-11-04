import PropTypes from 'prop-types';

import Menu from './Menu';
import { Link, NavLink } from 'react-router-dom';
import BannerHeading from './BannerHeading';
import BannerImage from './BannerImage';

const NavBar = props => {
    const navBar = <>
        <NavLink
            className={({ isActive }) => ` ${isActive ? 'text-white underline' : 'hover:text-zinc-200 text-white'}`}
            to='/'>Home</NavLink>
        <NavLink
            className={({ isActive }) => ` ${isActive ? 'text-white underline' : 'hover:text-zinc-200 text-white'}`}
            to='/statistics'>Statistics</NavLink>
        <NavLink
            className={({ isActive }) => ` ${isActive ? 'text-white underline' : 'hover:text-zinc-200 text-white'}`}
            to='/dashboard'>Dashboard</NavLink>
    </>
    const logo = <>
        <Link to='/' className="text-xl font-bold text-white">Gadget Heaven</Link>
    </>
    return (
        <div className='p-1 mt-5 border rounded-box'>
            <div className='bg-purple-500 rounded-box min-h-[550px]'>
                <Menu logo={logo} navBar={navBar}></Menu>
                <BannerHeading></BannerHeading>
                <BannerImage></BannerImage>
            </div>
        </div>
    );
};

NavBar.propTypes = {

};

export default NavBar;