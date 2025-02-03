import React from 'react';
import firstTimeTip from '../../data/firstTimeTip';
import BlogListing from './BlogListing';

const FirstTimeUsers = () => {

    return (
        <div className='w-11/12 mx-auto sm:px-4 lg:px-7 my-20 lg:my-32'>
            <h2 className='text-center text-2xl sm:text-4xl lg:text-5xl font-semiBold font-bold mb-6'>
                Tips for First-Time Users
            </h2>
            
            <BlogListing specifications={firstTimeTip} />
        </div>
    );
};

export default FirstTimeUsers;