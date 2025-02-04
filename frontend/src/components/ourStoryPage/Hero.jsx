import React from 'react';
import bannerImg from '../../assets/images/our-story.png';
import leaf1 from '../../assets/images/leaf-01.png';

const Hero = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className="flex justify-center lg:mt-14 sm:mt-8 mt-4 px-2">
                <img
                    src={bannerImg}
                    alt="Our story page banner image"
                    className='max-h-[60vh] '
                />
            </div>
            <div className=' hidden lg:block lg:absolute bottom-10 -left-28'>
                <img
                    src={leaf1}
                    alt="Leaf image"
                    className='max-h-[350px]'
                />
            </div>
            <div className=' hidden lg:block lg:absolute bottom-10 -right-28'>
                <img
                    src={leaf1}
                    alt="Leaf image"
                    className='max-h-[350px] rotate-180'
                />
            </div>
        </div>
    )
}

export default Hero
