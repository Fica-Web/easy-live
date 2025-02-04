import React from 'react';
import TitleHero from '../components/reusable/TitleHero';
import Hero from '../components/ourStoryPage/Hero';
import WhyFlowra from '../components/reusable/WhyFlowra';
import BenefitsListing from '../components/ourStoryPage/BenefitsListing';
import Commitment from '../components/ourStoryPage/CommitMent';
import Sustainability from '../components/ourStoryPage/Sustainability';
import JoinFlowra from '../components/reusable/JoinFlowra';
import CurvedText from '../components/flowraHome/CurvedText';

const OurStoryPage = () => {
    return (
        <>
            <Hero />
            <WhyFlowra 
                title='Why Flowra'
                description={`At Flowra, we’re reimagining periods with comfort, sustainability, and empowerment at the forefront. Born from a
                    vision to create a product that’s kind to your body and the planet, Flowra combines innovation with simplicity. The
                    name "Flowra" blends "flow" and "flora," symbolizing the natural beauty of menstruation and the balance we strive
                    to bring to every cycle.`}
            />
            <CurvedText />
            <BenefitsListing />
            <Commitment />
            <Sustainability />
            <JoinFlowra />
        </>
    )
}

export default OurStoryPage
