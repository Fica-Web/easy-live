import React from 'react';
import bannerImg from '../../assets/images/banner.png';

const TitleHero = ({ title }) => {
    return (
        <div className="w-11/12 mx-auto sm:px-4 lg:px-7">
            <div
                className="w-full sm:h-[60vh] h-[50vh] mt-3 rounded-3xl flex items-center justify-center bg-cover bg-center bg-pink"
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                <h2 className="lg:text-9xl sm:text-7xl text-5xl text-primary font-semiBold px-4 py-2 rounded-lg">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default TitleHero;