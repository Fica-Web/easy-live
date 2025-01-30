import React from 'react';
import HomeHero from '../components/homePage/HomeHero';
import HomeProductListing from '../components/homePage/HomeProductListing';
import AboutEasyLive from '../components/homePage/AboutEasyLive';
import FlowraSpotlight from '../components/homePage/FlowraSpotLight';
import WhyEasyLive from '../components/homePage/WhyEasyLive';
import SpecificationListing from '../components/flowraHome/SpecificationListing';
import easyLiveSpecifications from '../data/easyLiveSpecification';

const HomePage = () => {
    return (
        <>
            <HomeHero />
            {/* <HomeProductListing /> */}
            <AboutEasyLive />
            <FlowraSpotlight />
            <WhyEasyLive 
                title='Why EasyLive'
                ListingComponent={SpecificationListing} 
                specifications={easyLiveSpecifications}
                style='text-dark-green'
            />
        </>
    )
}

export default HomePage
