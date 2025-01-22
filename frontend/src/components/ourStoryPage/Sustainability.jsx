import React from 'react';
import sustainableImage from '../../assets/images/sustainable-low.png'

const Sustainability = () => {
    return (
        <div className='w-11/12 mx-auto sm:px-4 lg:px-7'>
            <div className='bg-pink rounded-3xl lg:flex relative'>
                <div className='flex flex-col lg:mx-16  px-4 sm:px-8 lg:pt-0 pt-10 gap-8 lg:w-1/2 w-full lg:my-20 sm:my-12 my-5 '>
                    <h2 className='text-primary font-semiBold text-center lg:text-start lg:text-6xl text-4xl lg:max-w-[350px]'>
                        Sustainability
                        At Our Core
                    </h2>
                    <p className=' lg:text-lg '>
                        Flowra goes beyond eco-friendly periods, striving for a
                        sustainable future in every choice. With toxin-free
                        materials and biodegradable packaging, our
                        products protect both you and the planet, leaving a
                        lasting impact on the environment
                    </p>
                </div>

                <div className='flex items-end pb-5'>
                    <img
                        src={sustainableImage}
                        alt=""
                        className='object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default Sustainability
