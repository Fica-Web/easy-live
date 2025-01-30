import React from 'react';

const SingleProcess = ({ index, step }) => {
    return (
        <div className='border-4 border-secondary p-8 py-16 rounded-xl lg:w-9/12 w-full'>
            <div className={`flex justify-between sm:flex-row flex-col-reverse text-center ${index % 2 === 0 ? 'sm:flex-row sm:text-start' : 'sm:flex-row-reverse sm:text-right'}`}>
                <div className='flex flex-col justify-center gap-5 sm:w-2/3'>
                    <h3 className='font-semiBold text-2xl lg:text-5xl text-primary'>
                        Step {step.id}: {step.title}
                    </h3>
                    <p className='text-gray-800 text-lg lg:text-xl'>
                        { step.description }
                    </p>
                </div>
                
                <div className='sm:w-1/3 flex justify-center items-center'>
                    <img 
                        src={step.gif} 
                        alt="" 
                        className='object-cover w-full max-h-48'
                    />
                </div>
            </div>
        </div>
    )
}

export default SingleProcess
