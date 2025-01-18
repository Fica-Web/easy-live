import React from 'react';
import SpecificationListing from './SpecificationListing';

const arr = [1, 3, 4]

const WhyFlowra = ({ title, description, ListingComponent, specifications }) => {
    return (
        <div className='px-20 my-20'>
            <div className='flex flex-col items-center gap-6'>
                <h2 className='text-primary text-5xl font-semiBold max-w-[600px] text-center'>
                    { title }
                </h2>
                <p className='text-center text-xl text-gray-700 lg:max-w-5xl tracking-wide leading-9'>
                    { description }
                </p>
            </div>

            {ListingComponent && (
                <ListingComponent specifications={specifications} />
            )}
        </div>
    )
}

export default WhyFlowra;