import React from 'react';
import cupImage from '../../assets/images/singleCup-low.png'

const PeriodFine = () => {
    return (
        <div className='w-11/12 mx-auto sm:px-4 lg:px-7 lg:my-36 my-24'>
            <div className='relative'>
                <h2 className='text-center lg:text-8xl/snug sm:text-6xl text-3xl font-semiBold text-primary '>
                    Period is Fine <br />
                    Say goodbye to <span className='text-secondary'>leaks, <br />
                    hello to comfort</span>
                </h2>
                <img 
                    src={cupImage} 
                    alt="menstrual cup image" 
                    className='absolute inset-0 mx-auto lg:h-[430px] sm:h-[250px] h-[200px] opacity-90 sm:-mt-[30px] -mt-[40px] lg:mt-0'
                />
            </div>

            <div className='mt-8 lg:mt-12'>
                <p className='lg:w-10/12 mx-auto text-center text-lg lg:text-xl leading-8 '>
                    Getting the hang of Flowra might take a few tries, and that’s absolutely okay- we’ve all been there. The key is to stay
                    relaxed. The more comfortable you are, the smoother insertion and removal will be. Before you know it, using Flowra
                    will feel completely natural
                </p>
            </div>
        </div>
    )
}

export default PeriodFine
