import React from 'react';
import cupImg from '../../assets/images/cup-low.png';

const SustainablePractice = () => {
    return (
        <div className='w-11/12 mx-auto sm:px-4 lg:px-7'>
            <div className='bg-pink rounded-3xl lg:flex relative'>
                <div className='flex flex-col lg:mx-16  px-4 sm:px-8 lg:pt-0 pt-10 gap-8 lg:w-1/2 w-full lg:my-20 sm:my-12 my-5 '>
                    <h2 className='text-primary font-semiBold text-center lg:text-start lg:text-6xl text-4xl lg:max-w-[350px]'>
                        Sustainable Practices
                    </h2>
                    <p className=' lg:text-lg '>
                        Sustainability isn’t a buzzword for us; it’s the Flowra way. Our cups
                        are made from toxin free, recyclable silicone, and our packaging is
                        biodegradable—because the earth deserves some TLC too.
                    </p>
                    <div className='flex justify-center lg:justify-start'>
                        <button className='bg-primary text-white p-3 px-10 rounded-full text-lg font-thin'>
                            Read More
                        </button>
                    </div>
                </div>

                <div  className='flex items-end justify-end'>
                    <img 
                        src={cupImg}
                        alt="" 
                        className='lg:absolute right-0 bottom-0'
                    />
                </div>
            </div>
        </div>
    )
}

export default SustainablePractice
