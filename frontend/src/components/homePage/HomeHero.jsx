import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/gif/hero.png';

const HomeHero = () => {
    return (
        <section
            className="relative  bg-easy-primary-dark pt-24 py-16 px-8 lg:px-20 h-[90vh] flex items-center "
            style={{
                backgroundImage: `url(${heroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >

            {/* Content */}
            <div className='lg:w-1/2 flex items-center sm:justify-start justify-center'>
                <div className='sm:w-4/5 lg:mx-auto'>
                    <h1 className="font-regular text-4xl lg:text-5xl font-bold text-dark-green mb-6">
                        Choose a better you
                    </h1>
                    <p className="text-gray-8 text-lg mb-6">
                        Explore our exclusive collection of products that blend style and quality seamlessly. Don't wait to elevate your wardrobe with our premium items.
                    </p>
                    <Link
                        to={'/flowra'}
                        className="bg-dark-green text-white font-semibold py-3 px-6 rounded-md hover:scale-105 transition duration-300"
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;