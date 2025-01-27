import React from 'react';
import SingleModel from './SingleModel';
import small from '../../assets/images/small.png';
import medium from '../../assets/images/medium.png';
import large from '../../assets/images/large.png';

const sizes = [
    {
        size: 'S',
        description: 'Recommended for those who have already been pregnant or are 30 years or older.',
        img: small
    },
    {
        size: 'M',
        description: 'Recommended for those who have already been pregnant or are 30 years or older.',
        img: medium
    },
    {
        size: 'L',
        description: 'Recommended for those who have already been pregnant or are 30 years or older.',
        img: large
    },
]

const SizeChart = () => {
    return (
        <div className='w-full py-10 lg:py-16 bg-primary text-pink'>
            <div className='w-11/12 mx-auto sm:px-4 lg:px-7 my-20'>
                <div className='flex flex-col items-center gap-6'>
                    <h2 className='sm:text-6xl text-3xl font-semiBold max-w-[600px] text-center'>
                        Size of the cup
                    </h2>
                    <p className='text-center text-xl lg:max-w-5xl tracking-wide leading-9'>
                        Flowra menstrual cups come in 3 sizes: small, medium, and large. The size guide below is a general
                        recommendation, and you may need to try a different size depending on your comfort and flow.
                    </p>
                </div> 
                
                <div className='flex justify-center mt-16'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                        {sizes.map(size => (
                            <SingleModel 
                                key={size.id}
                                model={size}
                            />
                        ))}
                    </div>
                </div>              
            </div>
        </div>
    )
}

export default SizeChart
