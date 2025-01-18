import React from 'react';
import cupImg from '../../assets/images/cup-low.png';

const SustainablePractice = () => {
    return (
        <div className='w-full px-20'>
            <div className='bg-secondary rounded-3xl flex relative'>
                <div className='flex flex-col mx-16 gap-8 lg:w-1/2 my-20'>
                    <h2 className='text-primary font-semiBold text-6xl lg:max-w-[350px]'>
                        Sustainable Practices
                    </h2>
                    <p className=' lg:text-lg'>
                        Sustainability isn’t a buzzword for us; it’s the Flowra way. Our cups
                        are made from toxin free, recyclable silicone, and our packaging is
                        biodegradable—because the earth deserves some TLC too.
                    </p>
                    <div>
                        <button className='bg-primary text-white p-3 px-10 rounded-full text-lg font-thin'>
                            Read More
                        </button>
                    </div>
                </div>

                <div  className='flex items-end justify-end'>
                    <img 
                        src={cupImg}
                        alt="" 
                        className='absolute right-0 bottom-0'
                    />
                </div>
            </div>
        </div>
    )
}

export default SustainablePractice
