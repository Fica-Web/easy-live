import React from 'react';
import heroImage from '../../assets/images/hero-low.png'

const Hero = () => {
    return (
        <div className='h-[80vh] px-20 pt-3'>
            <div className='h-full flex'>
                <div className='h-full flex flex-col'>
                    <div className='h-fit w-fit bg-secondary'>
                        <div className='bg-white rounded-br-3xl'>
                            <h1 className='text-7xl p-5 font-bold font-semiBold tracking-wide text-primary whitespace-nowrap'>
                                Your Period, <br /> <span>Reimagined</span>
                            </h1>
                        </div>
                    </div>
                    <div className='bg-secondary w-full h-full rounded-tl-3xl rounded-bl-3xl'>
                        <div className='h-full flex flex-col justify-end gap-4 p-8'>
                            <h2 className='text-white text-3xl font-serif'>
                                Your Best Period <br />
                                Starts Here,
                            </h2>
                            <div className='text-white'>
                                <button className='border border-white p-2 px-5'>
                                    Shop now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative h-full w-full rounded-e-3xl rounded-t-3xl bg-secondary'>
                    <img 
                        src={heroImage}
                        alt="Hero-image" 
                        className='h-full object-cover absolute right-10'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
