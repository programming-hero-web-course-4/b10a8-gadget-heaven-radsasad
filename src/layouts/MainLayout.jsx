
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = props => {
    return (
        <div>
            <div className='m-auto max-w-7xl'>
                <NavBar></NavBar>
            </div>
            <div className='min-h-[calc(100vh-413px)] m-auto max-w-7xl mt-64'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

MainLayout.propTypes = {

};

export default MainLayout;