import React from 'react';

const SingleBenefit = ({ item }) => {
    return (
        <div className='border-4 border-secondary p-8 max-w-[400px] rounded-xl'>
            <div className='flex flex-col gap-5 '>
                <div className='w-2/3 py-5 mb-10'>
                    <img 
                        src={item.img} 
                        alt="Image 1" 
                        className=""
                    />
                </div>
                <h3 className='font-semiBold text-2xl text-primary'>
                    { item.title }
                </h3>
                <p className='text-gray-800 text-lg'>
                    { item.description }
                </p>
            </div>
        </div>
    )
}

export default SingleBenefit
