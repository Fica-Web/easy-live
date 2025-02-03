import React from 'react';
import TitleHero from '../components/reusable/TitleHero';
import WhyFlowra from '../components/reusable/WhyFlowra';
// import ProcessListing from '../components/howToUsePage/ProcessListing';
import BlogListing from '../components/blogPage/BlogListing';
import advantages from '../data/advantages';
import JoinFlowra from '../components/reusable/JoinFlowra';
import FirstTimeUsers from '../components/blogPage/FirstTimeUsers';

const BlogPage = () => {
    return (
        <div className=''>
            <TitleHero title={'Blog'} />
            <WhyFlowra 
                title='What is a Menstrual Cup?'
                description='A menstrual cup is a reusable, bell-shaped device made from medical-grade materials like silicone, rubber, or thermoplastic elastomer (TPE). Designed to collect, not absorb, menstrual fluid, it offers a sustainable alternative to pads and tampons. Available in various sizes and capacities, menstrual cups cater to different body types and flow levels. Unlike traditional menstrual products, a menstrual cup can last for years with proper care, making it a one-time investment that pays off both financially and environmentally.'
            />
            <WhyFlowra 
                title='Benefits of Using a Menstrual Cup'
                description='Switching to a menstrual cup comes with a plethora of advantages'
                ListingComponent={BlogListing} 
                specifications={advantages}
            />
            <FirstTimeUsers />
            <WhyFlowra 
                title='Why You Should Consider Making the Switch'
                description='Menstrual cups are more than just a period product; they’re a lifestyle choice that promotes sustainability, body awareness, and financial savings. While it may take some time to adjust, many users find that menstrual cups revolutionize their period experience, offering unparalleled comfort and convenience. If you’re ready to embrace a better way to manage your period, give the menstrual cup a try. Your body, wallet, and the planet will thank you!'
            />
            <JoinFlowra />
        </div>
    )
}

export default BlogPage
