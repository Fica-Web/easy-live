import React from 'react';
import SingleProcess from './SingleProcess';

const ProcessListing = ({ specifications }) => {
    return (
        <div className='flex flex-col gap-4 items-center my-20'>
            {specifications.map((item, index) => (
                <SingleProcess key={item.id} step={item} index={index}  />
            ))}
        </div>
    )
}

export default ProcessListing
