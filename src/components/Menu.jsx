import PropTypes from 'prop-types';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LuHeart } from "react-icons/lu";
import { BsCart } from "react-icons/bs";
import { useEffect, useState } from 'react';


const Menu = () => {
    const logoStyle = {
        fontSize: '18px',
        
    };
    const location = useLocation();
    const [navLinkStyle, setNavLinkStyle] = useState({ active: 'text-zinc-600 underline', inactive: 'hover:text-zinc-500 text-zinc-600' });
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setNavLinkStyle({ active: 'text-white ', inactive: 'hover:text-zinc-200 text-white ' });
                break;
            case '/statistics':
                setNavLinkStyle({ active: 'text-orange-500 underline', inactive: 'hover:text-orange-900 text-orange-800' });
                break;
            case '/dashboard':
                setNavLinkStyle({ active: 'text-indigo-500 underline', inactive: 'hover:text-indigo-300 text-indigo-800' });
                break;
            case '/blogs':
                setNavLinkStyle({ active: 'text-purple-600 underline', inactive: 'hover:text-purple-950 text-purple-600' });
                break;
            default:
                setNavLinkStyle({ active: 'text-zinc-600 underline', inactive: 'hover:text-zinc-500 text-zinc-600' });
                break;
        }
    }, [location.pathname]);
    const navBar =
        <>

            <NavLink
                className={({ isActive }) =>
                    `${isActive ? navLinkStyle.active : navLinkStyle.inactive}`
                }
                to='/'>Home</NavLink>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? navLinkStyle.active : navLinkStyle.inactive}`
                }
                to='/statistics'>Statistics</NavLink>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? navLinkStyle.active : navLinkStyle.inactive}`
                }
                to='/dashboard'>Dashboard</NavLink>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? navLinkStyle.active : navLinkStyle.inactive}`
                }
                to='/blogs'>Blogs</NavLink>
        </>
    const logo = <>
        <NavLink 
            className={({ isActive }) =>
                `${isActive ? navLinkStyle.active  : navLinkStyle.inactive}`
            }
            to='/'><button className='text-2xl'>Gadget Heaven</button></NavLink>
    </>
    return (
        <div className="px-10 mt-6 navbar">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navBar}
                    </ul>
                </div>
                {logo}
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="gap-10 px-1 text-base uppercase menu menu-horizontal">
                    {navBar}
                </ul>
            </div>
            <div className="gap-5 navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="relative p-2 font-bold text-purple-700 bg-white border rounded-full"><BsCart />
                        <p className='absolute w-6 h-6 px-2 py-1 ml-3 -mt-8 text-xs text-red-500 border rounded-full bg-slate-50'>0</p>
                    </div>

                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="relative p-2 font-bold text-purple-700 bg-white border rounded-full"><LuHeart />
                        <p className='absolute w-6 h-6 px-2 py-1 ml-3 -mt-8 text-xs text-red-500 border rounded-full bg-slate-50'>0</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

Menu.propTypes = {

};

export default Menu;