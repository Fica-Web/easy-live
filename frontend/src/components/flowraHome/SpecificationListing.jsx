import React from 'react';
import SingleSpecification from '../flowraHome/SingleSpecification';

const SpecificationListing = ({ specifications, style }) => {
    return (
        <div className='flex justify-center mt-16'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                {specifications.map(specification => (
                    <SingleSpecification 
                        key={specification.id}
                        specification={specification}
                        style={style}
                    />
                ))}
            </div>
        </div>
    )
}

export default SpecificationListing
