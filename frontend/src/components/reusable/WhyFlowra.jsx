import React from 'react';

const WhyFlowra = ({ title, ListingComponent, specifications }) => {
    return (
        <div className='w-11/12 mx-auto sm:px-4 lg:px-7 my-20'>
            <div className='flex flex-col items-center gap-6'>
                <h2 className='text-primary sm:text-5xl text-3xl font-semiBold max-w-[600px] text-center'>
                    { title }
                </h2>
                {/* <p className='text-center text-xl text-gray-700 lg:max-w-5xl tracking-wide leading-9'>
                    { description }
                </p> */}
            </div>

            {ListingComponent && (
                <ListingComponent specifications={specifications} />
            )}
        </div>
    )
}

export default WhyFlowra;