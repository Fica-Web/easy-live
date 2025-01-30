import React from 'react'

const SingleSpecification = ({ specification, style = 'text-primary' }) => {
    console.log('style prop:', style)
    return (
        <div className='w-11/12 mx-auto sm:px-4 lg:px-7 lg:border-r border-gray-700 shadow-md lg:shadow-none mt-5 last:border-r-0 py-8 lg:py-0'>
            <div className='flex flex-col items-center gap-5 py-4'>
                <div className='border border-gray-700 w-28 h-28 rounded-full'>

                </div>
                <h3 className={` ${style} font-semiBold text-2xl mt-8 lg:mt-1 text-center`}>
                    {specification.title}
                </h3>
                <p className='text-center text-lg text-gray-700 lg:max-w-72 '>
                    {specification.description}
                </p>
            </div>
        </div>
    )
}

export default SingleSpecification
