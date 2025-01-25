import React from 'react';
import cup from '../../assets/images/vector-cup.png';
import heart from '../../assets/images/vector-heart.png';
import earth from '../../assets/images/vector-earth.png';

const Impact = () => {
    return (
        <div className='w-11/12 mx-auto sm:px-4 lg:px-7 my-20 lg:my-32'>
            <div className='flex flex-col items-center gap-10 text-gray-800'>
                <div className='grid grid-cols-3 lg:gap-16 sm:gap-10'>
                    <img 
                        src={cup} 
                        alt="cup image" 
                        className='max-h-[180px]'
                    />
                    <img 
                        src={heart} 
                        alt="Heart image" 
                        className='max-h-[180px]'
                    />
                    <img 
                        src={earth} 
                        alt="Earth image" 
                        className='max-h-[180px]'
                    />
                </div>
                <h2 className=' lg:text-5xl md:text-4xl text-3xl font-semiBold text-center'>
                    Impact on You and the Planet
                </h2>
                <div className='text-center'>
                    <h3 className='lg:text-4xl text-2xl font-semiBold underline decoration-wavy decoration-primary'>
                        Your Body
                    </h3>
                    <p className='my-5 text-lg lg:text-xl lg:w-11/12'>
                        No chemicals, no fragrances, no nonsense. Just pure, safe comfort. Plus, many users report fewer
                        cramps—hello, life upgrade!
                    </p>
                </div>
                <div className='text-center'>
                    <h3 className='lg:text-4xl text-2xl font-semiBold underline decoration-wavy decoration-primary'>
                        The Planet
                    </h3>
                    <p className='my-5 text-lg lg:text-xl lg:w-11/12'>
                        Less waste, more care. Together, we’re making periods kinder to the earth, one cycle at a time
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Impact
