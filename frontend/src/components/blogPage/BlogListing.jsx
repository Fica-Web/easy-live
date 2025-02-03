import React from 'react';
// import advantages from '../../data/advantages';

const BlogListing = ({ specifications }) => {
    return (
        <div className='flex flex-col gap-5 my-10'>
            {specifications.map((item) => (
                <div key={item.id}>
                    <h2 className='text-primary sm:text-2xl text-xl font-semiBold my-2'>
                        { item.title }
                    </h2>
                    <p className='lg:text-xl text-lg' >
                        { item.description }
                    </p>
                </div>
            ))}
        </div>
    )
}

export default BlogListing
