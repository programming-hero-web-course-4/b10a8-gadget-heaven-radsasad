
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import { Helmet } from 'react-helmet';

const MainLayout = props => {
    return (

        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='m-auto max-w-7xl'>
                <Menu></Menu>
            </div>
            <div className='min-h-[calc(100vh-437px)]  mt-0'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

MainLayout.propTypes = {

};

export default MainLayout;