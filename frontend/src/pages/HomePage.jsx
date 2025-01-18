import React from 'react';
import Hero from '../components/homePage/Hero';
import WhyFlowra from '../components/homePage/WhyFlowra';
import SpecificationListing from '../components/homePage/SpecificationListing';
// import CurvedText from '../components/homePage/CurvedText';
import SustainablePractice from '../components/homePage/SustainablePractice';

const HomePage = () => {
    const specifications = [1, 3, 2];

    return (
        <>
            <Hero />
            <WhyFlowra 
                title='Why Choose Flowra'
                description="Periods deserve a glow up gentle on your body, great for the planet, and drama free. Flowra isn’t just a cup; it's your new best period buddy. Let's ditch the drama and flow better together"
                ListingComponent={SpecificationListing}
                specifications={specifications}
            />
            {/* <CurvedText /> */}
            <SustainablePractice />
            <WhyFlowra 
                title='Choose the right Flowra product made just for you'
                description="At Flowra, we design our products to be your body’s best friend—always gentle, supportive, and reliable. Choosing the right product is always on your hands"
            />
        </>
    )
}

export default HomePage