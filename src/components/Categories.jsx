import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {

    return (
        <div>
            <NavLink 
             className={({isActive})=> 
                `flex px-3 py-2 mb-3 font-medium text-slate-500  rounded-2xl 
                ${isActive? 'bg-violet-500 text-white': 'hover:bg-violet-100 bg-zinc-100'}`}
             to='/'>
                 <button>All Products</button>
            </NavLink>
            {
                categories.map(category => (
                <NavLink key={category.category} 
                to={`/category/${category.category}`} 
                className={({isActive})=> 
                `flex px-3 py-2 mb-3 font-medium text-slate-500  rounded-2xl 
                ${isActive? 'bg-violet-500 text-white': 'hover:bg-violet-100 bg-zinc-100'}`}>                   
                <button >{category.category}</button>
               </NavLink>) )
            }
        </div>
    );
};

Categories.propTypes = {

};

export default Categories;