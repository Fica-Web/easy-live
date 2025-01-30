import React from 'react';
import TitleHero from '../components/reusable/TitleHero';
import products from '../data/products';
import ProductListing from '../components/flowraHome/ProductListing';

const ShopPage = () => {
    return (
        <div className=''>
            <TitleHero title='Shop' />
            <div className='w-11/12 mx-auto flex justify-center my-20'>
                <ProductListing specifications={products} />
            </div>
        </div>
    )
}

export default ShopPage
