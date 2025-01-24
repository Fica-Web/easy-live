import React from 'react';
import HomeHero from '../components/homePage/HomeHero';
import HomeProductListing from '../components/homePage/HomeProductListing';
import AboutEasyLive from '../components/homePage/AboutEasyLive';
import FlowraSpotlight from '../components/homePage/FlowraSpotLight';

const HomePage = () => {
    return (
        <>
            <HomeHero />
            {/* <HomeProductListing /> */}
            <AboutEasyLive />
            <FlowraSpotlight />
        </>
    )
}

export default HomePage
