import PropTypes from 'prop-types';
import bannerImg from '../assets/banner.jpg'

const BannerImage = props => {
    return (
        <div className='mt-5 lg:absolute lg:px-64 lg:ml-14'>
            <div className='p-1 border rounded-2xl '>
                <img className='object-cover w-[650px] rounded-2xl h-[22rem]' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

BannerImage.propTypes = {

};

export default BannerImage;