
import PropTypes from 'prop-types';
import Categories from '../components/Categories';

import { Outlet, useLoaderData } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Helmet } from 'react-helmet';

const Home = () => {
    const categories = useLoaderData()

    return (
        <div className='m-auto mb-10 max-w-7xl'>
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>Gadget Heaven</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            <NavBar></NavBar>
            <h1 className='mb-10 text-4xl font-thin text-center mt-44 text-zinc-500'>Explore Cutting-Edge Gadgets</h1>
            <div className='gap-10 mt-10 lg:flex'>
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