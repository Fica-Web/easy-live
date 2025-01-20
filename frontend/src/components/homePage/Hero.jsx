import React from 'react';
import heroImage from '../../assets/images/hero-low.png'

const Hero = () => {
    return (
        <div className='lg:h-[80vh] w-11/12 mx-auto sm:px-4 lg:px-7 pt-3'>
            <div className='h-full lg:flex'>
                <div className='h-full flex flex-col'>
                    <div className='h-fit lg:w-fit bg-secondary'>
                        <div className='bg-white lg:rounded-br-3xl'>
                            <h1 className='lg:text-7xl sm:text-6xl text-5xl p-5 font-bold font-semiBold tracking-wide text-primary whitespace-nowrap text-center lg:text-start'>
                                Your Period, <br /> <span>Reimagined</span>
                            </h1>
                        </div>
                    </div>
                    <div className='bg-secondary w-full h-full rounded-tl-3xl rounded-bl-3xl hidden lg:block'>
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
                <div className='relative h-full w-full rounded-e-3xl rounded-t-3xl rounded-bl-3xl lg:rounded-bl-none bg-secondary px-5'>
                    <img
                        src={heroImage}
                        alt="Hero-image"
                        className='h-full w-full lg:w-auto object-cover lg:absolute lg:right-10 '
                    />
                    <div className='absolute lg:hidden bottom-0 right-0' >
                        <div className='flex flex-col justify-end sm:gap-4 gap-2 sm:p-8 p-4'>
                            <h2 className='text-white sm:text-3xl text-lg font-serif'>
                                Your Best Period <br />
                                Starts Here,
                            </h2>
                            <div className='text-white'>
                                <button className='border border-white sm:p-2 p-1 sm:px-5 px-2'>
                                    Shop now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
