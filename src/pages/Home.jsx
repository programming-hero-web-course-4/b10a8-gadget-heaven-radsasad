
import PropTypes from 'prop-types';
import Categories from '../components/Categories';

import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData()

    return (
        <div className=''>
            <h1 className='mb-10 text-4xl font-thin text-center text-zinc-500'>Explore Cutting-Edge Gadgets</h1>
            <div className='gap-10 lg:flex'>
                <div className='lg:w-1/4 '>
                    <div className='py-5 bg-white border px-7 rounded-xl'>
                        <Categories categories={categories}></Categories>
                    </div>
                </div>
                <div className='lg:w-3/4 '>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {

};

export default Home;