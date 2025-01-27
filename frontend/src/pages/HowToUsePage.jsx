import React from 'react';
import processes from '../data/HowToUseSteps';
import TitleHero from '../components/reusable/TitleHero';
import PeriodFine from '../components/howToUsePage/PeriodFine';
import WhyFlowra from '../components/reusable/WhyFlowra';
import ProcessListing from '../components/howToUsePage/ProcessListing';
import SizeChart from '../components/howToUsePage/SizeChart';
import products from '../data/products';
import ProductListing from '../components/flowraHome/ProductListing';

const HowToUsePage = () => {
    return (
        <>
            <TitleHero 
                title='How to Use'
            />
            <PeriodFine />
            <WhyFlowra 
                title='How To Be Friendly With Your Cup'
                description="Whether you're playing sports, going to school, or hanging out with friends, Flowra menstrual cups can help you stay active and confident during your period."
                ListingComponent={ProcessListing}
                specifications={processes}
            /> 
            <SizeChart />

            <div className='w-11/12 mx-auto sm:px-4 lg:px-7 my-20 lg:mt-40'>
                <h3 className='font-semiBold text-3xl sm:text-5xl text-center text-primary'>
                    Choose your Product
                </h3>
                <ProductListing specifications={products} />
            </div>
            
        </>
    )
}

export default HowToUsePage