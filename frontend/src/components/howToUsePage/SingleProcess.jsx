import React from 'react'

const SingleProcess = ({ index, step }) => {
    return (
        <div className='border-4 border-secondary p-8 py-16 rounded-xl lg:w-9/12 w-full'>
            <div className={`flex justify-center text-center ${index % 2 === 0 ? 'sm:justify-start sm:text-start' : 'sm:justify-end sm:text-right'}`}>
                <div className='flex flex-col gap-5 sm:w-1/2'>
                    <h3 className='font-semiBold text-2xl lg:text-5xl text-primary'>
                        Step {step.id}: {step.title}
                    </h3>
                    <p className='text-gray-800 text-lg lg:text-xl'>
                        { step.description }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleProcess
