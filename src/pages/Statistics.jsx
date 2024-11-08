
import PropTypes from 'prop-types';
import Menu from '../components/Menu';
import { Helmet } from 'react-helmet';

const Statistics = () => {
   
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Statistic</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='py-10 bg-purple-500 min-h-[150px]  relative '>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-4xl font-thin text-white'>Statistic</h1>
                    <p className='mt-5 text-zinc-200'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
                <div className='flex items-center justify-center gap-3 mt-7'>

                </div>
            </div>
        </div>
    );
};

Statistics.propTypes = {

};

export default Statistics;