import React from 'react';
import { Link } from 'react-router-dom';

const HomeHero = () => {
    return (
        <section className="bg-gradient-to-br from-easy-primary-light to-easy-primary-dark py-16 px-8 lg:px-20">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
                {/* Left Side */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        Discover Your Perfect Style
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        Explore our exclusive collection of products that blend style and quality seamlessly. Don't wait to elevate your wardrobe with our premium items.
                    </p>
                    <Link to={'/flowra'} className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300">
                        Buy Now
                    </Link>
                </div>

                {/* Right Side */}
                <div className="lg:w-1/2">
                    <img
                        src="https://www.verywellfit.com/thmb/k9go2qz1hWBWSpZM225eLohK1oE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/muscular-endurance-59f7fcce519de20011687f79.jpg"
                        alt="Hero"
                        className="w-full rounded-md shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeHero;