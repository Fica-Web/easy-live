import React from 'react'

const SingleSpecification = ({ specification }) => {
    return (
        <div className='lg:px-16 px-10 border-r border-gray-700 last:border-r-0'>
            <div className='flex flex-col items-center gap-5 py-4'>
                <div className='lg:border border-gray-700 w-28 h-28 rounded-full'>

                </div>
                <h3 className='text-primary font-semiBold text-2xl mt-5'>
                    Simple and Hassle Free
                </h3>
                <p className='text-center text-lg text-gray-700 lg:max-w-72 '>
                    Easy to use and clean, with a guide to help you every step of the way.
                </p>
            </div>
        </div>
    )
}

export default SingleSpecification
