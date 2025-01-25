import React from 'react';
import SingleBenefit from './SingleBenefit';
import benefits from '../../data/benefits';

const BenefitsListing = () => {
    return (
        <div className='w-11/12 mx-auto sm:px-4 lg:px-7 my-32'>
            <div className=''>
                <h2 className='text-primary font-semiBold lg:text-5xl sm:text-4xl text-3xl text-center my-14'>
                    Benefits of Choosing Flowra
                </h2>
            </div>
            
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-8'>
                    {benefits.map(item => (
                        <SingleBenefit 
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BenefitsListing
