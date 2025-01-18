import React from 'react';
import Hero from '../components/homePage/Hero';
import WhyFlowra from '../components/homePage/WhyFlowra';
// import CurvedText from '../components/homePage/CurvedText';
import SustainablePractice from '../components/homePage/SustainablePractice';

const HomePage = () => {
    return (
        <>
            <Hero />
            <WhyFlowra />
            {/* <CurvedText /> */}
            <SustainablePractice />
        </>
    )
}

export default HomePage