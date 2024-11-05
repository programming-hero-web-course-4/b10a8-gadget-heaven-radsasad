
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';


const MainLayout = props => {
    return (
        <div>
            <div className='m-auto max-w-7xl'>
                <Menu></Menu>
                {/* <NavBar></NavBar> */}
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