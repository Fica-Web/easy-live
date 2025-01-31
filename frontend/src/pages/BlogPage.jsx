import React from 'react';
import TitleHero from '../components/reusable/TitleHero';
import WhyFlowra from '../components/reusable/WhyFlowra';
import ProcessListing from '../components/howToUsePage/ProcessListing';
import advantages from '../data/advantages';

const BlogPage = () => {
    return (
        <div className='flex flex-col'>
            <TitleHero title={'Blog'} />
            <WhyFlowra 
                title='What is a Menstrual Cup?'
                description='A menstrual cup is a reusable, bell-shaped device made from medical-grade materials like silicone, rubber, or thermoplastic elastomer (TPE). Designed to collect, not absorb, menstrual fluid, it offers a sustainable alternative to pads and tampons. Available in various sizes and capacities, menstrual cups cater to different body types and flow levels. Unlike traditional menstrual products, a menstrual cup can last for years with proper care, making it a one-time investment that pays off both financially and environmentally.'
            />
            <WhyFlowra 
                title='Benefits of Using a Menstrual Cup'
                description='Switching to a menstrual cup comes with a plethora of advantages'
                ListingComponent={ProcessListing} 
                specifications={advantages}
            />
        </div>
    )
}

export default BlogPage
