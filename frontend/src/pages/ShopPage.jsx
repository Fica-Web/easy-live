import React from 'react';
// import TitleHero from '../components/reusable/TitleHero';
import PageTitle from '../components/reusable/PageTitle';
import WhyFlowra from '../components/reusable/WhyFlowra';
import products from '../data/products';
import ProductListing from '../components/flowraHome/ProductListing';

const ShopPage = () => {
    return (
        <div className=''>
            {/* <TitleHero title='Shop' /> */}
            <PageTitle title='Shop' />
            {/* <h3 className='text-dark-green sm:text-5xl text-3xl font-semiBold text-center -mb-16 pt-10'>
                Shop your Product
            </h3>
            <div className='w-11/12 mx-auto flex justify-center my-20'>
                <ProductListing specifications={products} title='Choose you ' />
            </div> */}
            <div className='pt-1'>
            <WhyFlowra 
                title='Care You Can Trust'
                description="Elevate your hygiene and personal care routine with products designed to prioritize your comfort and well-being. Gentle, effective, and made to meet your unique needs—because your care deserves the best."
                ListingComponent={ProductListing}
                specifications={products}
            />
            </div>
        </div>
    )
}

export default ShopPage
