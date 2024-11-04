import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { LuHeart } from "react-icons/lu";
import { BsCart } from "react-icons/bs";

const Menu = ({ navBar, logo }) => {

    return (
        <div className="px-10 navbar">
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
                    <div tabIndex={0} role="button" className="p-2 font-bold text-purple-700 bg-white border rounded-full"><BsCart /></div>
                    <ul tabIndex={0} className="dropdown-content -ml-48 mt-2 menu bg-base-100 rounded-xl z-[1] w-60 p-2  shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="p-2 font-bold text-purple-700 bg-white border rounded-full"><LuHeart /></div>
                    <ul tabIndex={0} className="dropdown-content -ml-48 mt-2 menu bg-base-100 rounded-xl z-[1] w-60 p-2  shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

Menu.propTypes = {

};

export default Menu;