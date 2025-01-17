import React from 'react';
import SpecificationListing from './SpecificationListing';

const arr = [1, 3, 4]

const WhyFlowra = () => {
    return (
        <div className='px-20 my-20'>
            <div className='flex flex-col items-center gap-6'>
                <h2 className='text-primary text-4xl font-semiBold'>
                    Why Choose Flowra
                </h2>
                <p className='text-center text-xl text-gray-700 lg:max-w-5xl tracking-wide leading-9'>
                    Periods deserve a glow up gentle on your body, great for the planet, and drama free. Flowra isn’t just a cup;
                    it's your new best period buddy. Let's ditch the drama and flow better together
                </p>
            </div>

            <SpecificationListing 
                specifications={arr}
            />
        </div>
    )
}

export default WhyFlowra
