import React from 'react'

const SingleModel = ({ model }) => {
    return (
        <div className='flex flex-col gap-8 p-10 lg:px-16 text-center'>
            <img 
                src={model.img} 
                alt="Size image" 
                className='w-32 mx-auto'
            />
            <h5 className='uppercase font-semibold text-xl'>
                Model 
            </h5>
            <p className='lg:text-xl text-lg'>
                Recommended for those who
                have already been pregnant or
                are 30 years or older.
            </p>
        </div>
    )
}

export default SingleModel;
