import React from 'react';
import HomeHero from '../components/homePage/HomeHero';
import HomeProductListing from '../components/homePage/HomeProductListing';
import AboutEasyLive from '../components/homePage/AboutEasyLive';
import FlowraSpotlight from '../components/homePage/FlowraSpotLight';
import WhyEasyLive from '../components/homePage/WhyEasyLive';
import SpecificationListing from '../components/flowraHome/SpecificationListing';

const HomePage = () => {
    const specifications = [1, 3, 2];
    return (
        <>
            <HomeHero />
            {/* <HomeProductListing /> */}
            <AboutEasyLive />
            <FlowraSpotlight />
            <WhyEasyLive 
                title='Why EasyLive'
                ListingComponent={SpecificationListing} 
                specifications={specifications}
            />
        </>
    )
}

export default HomePage
