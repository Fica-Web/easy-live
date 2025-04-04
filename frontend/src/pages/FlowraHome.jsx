import React from 'react';
import Hero from '../components/flowraHome/Hero';
import WhyFlowra from '../components/reusable/WhyFlowra';
import SpecificationListing from '../components/flowraHome/SpecificationListing';
import CurvedText from '../components/flowraHome/CurvedText';
import SustainablePractice from '../components/flowraHome/SustainablePractice';
import ProductListing from '../components/flowraHome/ProductListing';
import Impact from '../components/flowraHome/Impact';
import FAQ from '../components/flowraHome/FAQ';
import JoinFlowra from '../components/reusable/JoinFlowra';
import ImageGrid from '../components/flowraHome/ImageGrid';
import products from '../data/products';
import flowraSpecifcation from '../data/flowraSpecifications';

const FlowraHome = () => {

    return (
        <>
            <Hero />
            <WhyFlowra 
                title='Why Choose Flowra'
                description="Periods deserve a glow up gentle on your body, great for the planet, and drama free. Flowra isn’t just a cup; it's your new best period buddy. Let's ditch the drama and flow better together"
                ListingComponent={SpecificationListing}
                specifications={flowraSpecifcation}
            />
            <CurvedText />
            <SustainablePractice />
            <WhyFlowra 
                title='Choose the right Flowra product made just for you'
                description="At Flowra, we design our products to be your body’s best friend—always gentle, supportive, and reliable. Choosing the right product is always on your hands"
                ListingComponent={ProductListing}
                specifications={products}
            />
            <Impact />
            <FAQ />
            <JoinFlowra />
            <ImageGrid />
        </>
    )
}

export default FlowraHome;