import React from 'react';
import ProductListing from '../flowraHome/ProductListing';

const products = [
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        firstTitle: 'Flowra',
        lastTitle: 'Menstrual Cup',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
        price: 29.99,
    },
    // {
    //     id: 2,
    //     image: 'https://via.placeholder.com/150',
    //     firstTitle: 'Flowra',
    //     lastTitle: 'Menstrual Cup',
    //     description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
    //     price: 29.99,
    // },
    // {
    //     id: 3,
    //     image: 'https://via.placeholder.com/150',
    //     firstTitle: 'Flowra',
    //     lastTitle: 'Menstrual Cup',
    //     description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
    //     price: 29.99,
    // },
];

const HomeProductListing = () => {
    return (
        <div className='px-8 lg:px-20'>
            <h2 className='text-center '>
                Our Products
            </h2>
            <div className='flex justify-center bg-red-100'>
                <ProductListing specifications={products} />
            </div>
        </div>
    )
}

export default HomeProductListing
