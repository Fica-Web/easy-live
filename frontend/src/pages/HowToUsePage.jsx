import React from 'react';
import processes from '../data/HowToUseSteps';
import TitleHero from '../components/reusable/TitleHero';
import PeriodFine from '../components/howToUsePage/PeriodFine';
import WhyFlowra from '../components/reusable/WhyFlowra';
import ProcessListing from '../components/howToUsePage/ProcessListing';

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
        </>
    )
}

export default HowToUsePage