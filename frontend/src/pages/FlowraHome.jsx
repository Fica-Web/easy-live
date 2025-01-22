import React from 'react';
import Hero from '../components/flowraHome/Hero';
import WhyFlowra from '../components/reusable/WhyFlowra';
import SpecificationListing from '../components/flowraHome/SpecificationListing';
// import CurvedText from '../components/homePage/CurvedText';
import SustainablePractice from '../components/flowraHome/SustainablePractice';
import ProductListing from '../components/flowraHome/ProductListing';
import FAQ from '../components/flowraHome/FAQ';

const products = [
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        firstTitle: 'Flowra',
        lastTitle: 'Menstrual Cup',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
        price: 29.99,
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/150',
        firstTitle: 'Flowra',
        lastTitle: 'Menstrual Cup',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
        price: 29.99,
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/150',
        firstTitle: 'Flowra',
        lastTitle: 'Menstrual Cup',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
        price: 29.99,
    },
];

const FlowraHome = () => {
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
                ListingComponent={ProductListing}
                specifications={products}
            />
            <FAQ />
        </>
    )
}

export default FlowraHome;